import styled from "styled-components";
import css from "@styled-system/css";

import { Element as Link } from "../Link/elements";
import { Element as Avatar } from "../Avatar/elements";

const Element = styled.div(props =>
  css({
    display: "flex",
    alignItems: "center",
    fontSize: 2,
    fontWeight: "medium",

    [Link]: {
      marginX: 1
    },

    ".avatar-block--name": {
      color: "text.primary",
      marginX: 1
    }
  })
);

export { Element };
