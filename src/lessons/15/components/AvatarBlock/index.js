import React from "react";
import PropTypes from "prop-types";

import { Element } from "./elements";
import { Avatar } from "../Avatar";
import { Link } from "../Link";
import { Badge } from "../Badge";

function AvatarBlock(props) {
  return (
    <Element>
      <Avatar size="xsmall" src={props.avatar} />
      {props.url ? (
        <Link href={props.url}>{props.name}</Link>
      ) : (
        <span className="avatar-block--name">{props.name}</span>
      )}
      {props.label ? <Badge>{props.label}</Badge> : null}
    </Element>
  );
}

AvatarBlock.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  label: PropTypes.string
};

export { AvatarBlock };
