import React from "react";
import { Element } from "./elements";
import PropTypes from "prop-types";

function Avatar(props) {
  return <Element {...props} />;
}

Avatar.defaultProps = {
  size: "medium"
};

Avatar.propTypes = {
  size: PropTypes.oneOf(["xsmall", "small", "medium", "large", "xlarge"])
};

export { Avatar };
