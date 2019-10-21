import styled from "styled-components";
import css from "@styled-system/css";

const Element = styled.a(props =>
  css({
    color: "text.link",
    textDecoration: "none"
  })
);

export { Element };
