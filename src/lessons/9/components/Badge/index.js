import React from "react";
import { Element } from "./elements";

function Badge(props) {
  return <Element {...props} />;
}

Badge.defaultProps = {
  color: "#bbb"
};

export { Badge };
