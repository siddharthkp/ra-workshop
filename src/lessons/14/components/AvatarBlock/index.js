import React from "react";
import PropTypes from "prop-types";

import { Element } from "./elements";

function AvatarBlock(props) {
  return <Element>your code here</Element>;
}

AvatarBlock.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  url: PropTypes.string,
  label: PropTypes.string
};

export { AvatarBlock };
