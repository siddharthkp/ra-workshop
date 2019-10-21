import React from "react";
import { Element } from "./elements";
import PropTypes from "prop-types";

function Link(props) {
  return (
    <Element
      rel={props.target === "_blank" ? "noopener noreferrer" : null}
      {...props}
    />
  );
}

Link.defaultProps = {
  target: "_self"
};

Link.propTypes = {
  href: PropTypes.string,
  target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"])
};

export { Link };
