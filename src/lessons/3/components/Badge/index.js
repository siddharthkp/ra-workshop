import React from "react";
import "./badge.scss";

function Badge(props) {
  return <span className={`badge`} {...props} />;
}

Badge.defaultProps = {};

export { Badge };
