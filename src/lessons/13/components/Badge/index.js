import React from "react";
import PropTypes from "prop-types";
import { Element } from "./elements";

function Badge(props) {
  return <Element {...props} />;
}

Badge.defaultProps = {
  color: "#bbb"
};

Badge.propTypes = {};

export { Badge };
