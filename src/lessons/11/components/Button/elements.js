import styled from "styled-components";
import theme from "../theme";
import deepmerge from "deepmerge";

const Element = styled.button(props => {
  return {
    fontSize: theme.fontSizes[3],
    height: "40px",
    padding: 0,
    paddingLeft: theme.space[3],
    paddingRight: theme.space[3],
    cursor: "pointer",
    border: "none",
    borderRadius: theme.radii[2],

    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed"
    },

    ...getVariantStyles(props)
  };
});

function getVariantStyles(props) {
  return props.variant === "secondary" ? secondaryStyles : variantStyles(props);
}

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
