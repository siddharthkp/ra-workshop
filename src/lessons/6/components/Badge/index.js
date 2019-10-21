import React from "react";
import styled from "styled-components";
import "./badge.scss";

function Badge(props) {
  return (
    <span
      className={`badge`}
      style={{ backgroundColor: props.color }}
      {...props}
    />
  );
}

Badge.defaultProps = {
  color: "#bbb"
};

export { Badge };
