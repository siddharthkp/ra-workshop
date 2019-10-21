import styled from "styled-components";
import theme from "../theme";

const Element = styled.span`
  display: inline-block;
  color: white;
  background-color: ${props => props.color};
  border-radius: 2px;
  padding: 2px 3px;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
`;

export { Element };
