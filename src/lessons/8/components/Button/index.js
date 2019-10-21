import React from "react";
import { Element } from "./elements";

function Button(props) {
  return <Element {...props}>{props.children}</Element>;
}

Button.defaultProps = {
  variant: "primary"
};

export { Button };
