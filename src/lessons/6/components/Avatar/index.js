import React from "react";
import styled from "styled-components";
import "./avatar.scss";

function Avatar(props) {
  return <img className={`avatar ${props.size}`} {...props} />;
}

Avatar.defaultProps = {
  size: "medium"
};

export { Avatar };
