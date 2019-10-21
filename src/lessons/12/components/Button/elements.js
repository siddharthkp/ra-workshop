import styled from "styled-components";
import css from "@styled-system/css";
import deepmerge from "deepmerge";

import theme from "../theme"; // we can delete this line at the end

const Element = styled.button(props =>
  deepmerge(
    commonStyles,
    props.variant === "secondary" ? secondaryStyles : variantStyles(props)
  )
);

const commonStyles = {
  fontSize: theme.fontSizes[3],
  height: "40px",
  ppadding: 0,
  paddingLeft: theme.space[3],
  paddingRight: theme.space[3],
  cursor: "pointer",
  border: "none",
  borderRadius: theme.radii[2],

  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  }
};

const variantStyles = props => ({
  color: theme.colors.white,
  backgroundColor: theme.colors[props.variant][500],

  "&:hover": {
    backgroundColor: theme.colors[props.variant][700]
  },
  "&:focus": {
    backgroundColor: theme.colors[props.variant][900]
  },
  "&:disabled": {
    backgroundColor: theme.colors[props.variant][500]
  }
});

const secondaryStyles = {
  backgroundColor: theme.colors.white,
  color: theme.colors.text.secondary,
  border: "1px solid",

  "&:hover": {
    color: theme.colors.text.primaryLight
  },
  "&:focus": {
    color: theme.colors.text.primary
  },
  "&:disabled": {
    color: theme.colors.text.secondary
  }
};

export { Element };
