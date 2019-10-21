import styled from "styled-components";
import css from "@styled-system/css";

const Element = styled.img(props =>
  css({
    borderRadius: "50%",
    size: `avatar.${props.size}`
  })
);

export { Element };
