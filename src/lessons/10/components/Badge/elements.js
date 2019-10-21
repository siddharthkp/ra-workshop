import styled from "styled-components";
import theme from "../theme";

/* magic numbers that don't conform to the theme */
const magicFontSize = "10px";
const magicPadding = "2px 3px";

const Element = styled.span`
  display: inline-block;
  color: ${theme.colors.white};
  background-color: ${props => props.color};
  border-radius: ${theme.radii[1]}px;
  font-weight: ${theme.fontWeights.bold};
  text-transform: uppercase;

  padding: ${magicPadding};
  font-size: ${magicFontSize};
`;

export { Element };
