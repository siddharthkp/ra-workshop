import React from "react";
import "./button.scss";

function Button(props) {
  return (
    <button className={`btn`} disabled={props.disabled} {...props}>
      {props.children}
    </button>
  );
}

Button.defaultProps = {};

export { Button };
