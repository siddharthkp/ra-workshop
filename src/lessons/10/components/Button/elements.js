import styled, { css } from "styled-components";
import theme from "../theme";

const Element = styled.button`
  font-size: ${theme.fontSizes[3]}px;
  padding: 0 ${theme.space[3]}px;
  border-radius: ${theme.radii[2]}px;
  cursor: pointer;
  border: none;
  height: 40px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${props => (props.variant === "secondary" ? secondaryStyles : variantStyles)}
`;

const variantStyles = css`
  color: ${theme.colors.white};
  background-color: ${props => theme.colors[props.variant][500]};

  &:hover {
    background-color: ${props => theme.colors[props.variant][700]};
  }
  &:focus,
  &:focus {
    background-color: ${props => theme.colors[props.variant][900]};
  }
  &:disabled {
    background-color: ${props => theme.colors[props.variant][500]};
  }
`;

const secondaryStyles = css`
  background-color: ${theme.colors.white};
  color: ${theme.colors.text.secondary};
  border: 1px solid;

  &:hover {
    color: ${theme.colors.text.primaryLight};
  }
  &:focus {
    color: ${theme.colors.text.primary};
  }
  &:disabled {
    color: ${theme.colors.text.secondary};
  }
`;

export { Element };
