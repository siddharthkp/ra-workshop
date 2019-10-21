import React from "react";
import PropTypes from "prop-types";

import dummy from "./shot.png";

function Shot(props) {
  return <img src={dummy} />;
}

Shot.defaultProps = {
  prop1: "value",
  prop2: "value"
};

Shot.propTypes = {
  prop1: PropTypes.string,
  prop2: PropTypes.string
};

export { Shot };
