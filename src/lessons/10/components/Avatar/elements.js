import styled from "styled-components";
import theme from "../theme";

const Element = styled.img`
  border-radius: 50%;
  width: ${props => theme.sizes.avatar[props.size]}px;
  height: ${props => theme.sizes.avatar[props.size]}px;
`;

export { Element };
