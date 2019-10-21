import React from "react";
import "./button.scss";

function Button(props) {
  return <button className={`btn`}>{props.children}</button>;
}

export { Button };
