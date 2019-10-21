import React from "react";
import "./avatar.scss";

function Avatar(props) {
  return <img className={`avatar ${props.size}`} {...props} />;
}

Avatar.defaultProps = {
  size: "medium"
};

export { Avatar };
