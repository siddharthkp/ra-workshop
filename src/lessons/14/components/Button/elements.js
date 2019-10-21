import styled from "styled-components";
import css from "@styled-system/css";
import deepmerge from "deepmerge";

const Element = styled.button(props =>
  css(
    deepmerge(
      commonStyles,
      props.variant === "secondary" ? secondaryStyles : variantStyles(props)
    )
  )
);

const commonStyles = {
  fontSize: 3,
  height: "40px",
  padding: 0,
  paddingX: 3,
  cursor: "pointer",
  border: "none",
  borderRadius: 2,

  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  }
};

const variantStyles = props => ({
  color: "white",
  backgroundColor: props.variant + ".500",

  "&:hover": {
    backgroundColor: props.variant + ".700"
  },
  "&:focus": {
    backgroundColor: props.variant + ".900"
  },
  "&:disabled": {
    backgroundColor: props.variant + ".500"
  }
});

const secondaryStyles = {
  backgroundColor: "white",
  color: "text.secondary",
  border: "1px solid",

  "&:hover": {
    color: "text.primaryLight"
  },
  "&:focus": {
    color: "text.primary"
  },
  "&:disabled": {
    color: "text.secondary"
  }
};

export { Element };
