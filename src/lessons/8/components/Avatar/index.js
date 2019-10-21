import React from "react";
import { Element } from "./elements";

function Avatar(props) {
  return <Element {...props} />;
}

Avatar.defaultProps = {
  size: "medium"
};

export { Avatar };
