import React from "react";
import PropTypes from "prop-types";
import { Element } from "./elements";
import { allColorTokens } from "./../_helpers/colors";

function Badge(props) {
  return <Element {...props} />;
}

Badge.defaultProps = {
  color: "grays.400"
};

Badge.propTypes = {
  color: PropTypes.oneOf(allColorTokens)
};

export { Badge };
