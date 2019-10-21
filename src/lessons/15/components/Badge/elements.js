import styled from "styled-components";
import css from "@styled-system/css";

/* magic numbers that don't conform to the theme */
const magicFontSize = 10;
const magicPadding = "2px 3px";

const Element = styled.span(props =>
  css({
    display: "inline-block",
    color: "white",
    borderRadius: 1,
    backgroundColor: props.color,
    fontWeight: "bold",
    textTransform: "uppercase",

    padding: magicPadding,
    fontSize: magicFontSize
  })
);

export { Element };
