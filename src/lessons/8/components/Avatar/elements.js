import styled from "styled-components";

const Element = styled.img`
  border-radius: 50%;
  width: ${props => `var(--sizes-avatar-${props.size}`});
  height: ${props => `var(--sizes-avatar-${props.size}`});
`;

export { Element };
