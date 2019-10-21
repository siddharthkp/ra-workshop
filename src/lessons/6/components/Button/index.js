import React from "react";
import styled, { css } from "styled-components";

// we should be able to remove this file at the end
import "./button.scss";

const Element = styled.button`
  // styles go here
`;

function Button(props) {
  return (
    <Element
      className={`btn ${props.variant}`}
      disabled={props.disabled}
      {...props}
    >
      {props.children}
    </Element>
  );
}

Button.defaultProps = {
  variant: "primary"
};

export { Button };
