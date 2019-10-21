import React from "react";
import PropTypes from "prop-types";
import { Element } from "./elements";

function Button(props) {
  return <Element {...props}>{props.children}</Element>;
}

Button.defaultProps = {
  variant: "primary"
};

Button.propTypes = {
  //
};

export { Button };
