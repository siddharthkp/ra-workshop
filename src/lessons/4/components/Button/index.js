import React from "react";
import "./button.scss";

function Button(props) {
  return (
    <button
      className={`btn ${props.variant}`}
      disabled={props.disabled}
      {...props}
    >
      {props.children}
    </button>
  );
}

Button.defaultProps = {
  variant: "primary"
};

export { Button };
