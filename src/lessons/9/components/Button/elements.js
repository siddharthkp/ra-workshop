import styled, { css } from "styled-components";
import theme from "../theme";

const Element = styled.button`
  font-size: ${theme.fontSizes[2]}px;
  padding: 0 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  height: 40px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${props => (props.variant === "secondary" ? secondaryStyles : variantStyles)}
`;

const variantStyles = css`
  color: ${theme.colors.white};
  background-color: ${props => `var(--${props.variant}-500)`};

  &:hover {
    background-color: ${props => `var(--${props.variant}-700)`};
  }
  &:focus,
  &:focus {
    background-color: ${props => `var(--${props.variant}-900)`};
  }
  &:disabled {
    background-color: ${props => `var(--${props.variant}-500)`};
  }
`;

const secondaryStyles = css`
  background-color: var(--white);
  color: var(--text-secondary);
  border: 1px solid;

  &:hover {
    color: var(--text-primary);
  }

  &:focus {
    color: var(--text-primary-light);
  }
  &:disabled {
    color: var(--text-secondary);
  }
`;

export { Element };
