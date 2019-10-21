import styled from "styled-components";
import theme from "../theme";

/* magic numbers that don't conform to the theme */
const magicFontSize = 10;
const magicPadding = "2px 3px";

const Element = styled.span({
  display: "inline-block",
  color: theme.colors.white,
  backgroundColor: props => props.color,
  borderRadius: theme.radii[1],
  fontWeight: theme.fontWeights.bold,
  textTransform: "uppercase",

  padding: magicPadding,
  fontSize: magicFontSize
});

export { Element };
