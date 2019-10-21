import React from "react";
import PropTypes from "prop-types";
import { Element } from "./elements";

function Avatar(props) {
  return <Element {...props} />;
}

Avatar.defaultProps = {
  size: "medium"
};

Avatar.propTypes = {};

export { Avatar };
