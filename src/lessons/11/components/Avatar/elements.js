import styled from "styled-components";
import css from "@styled-system/css";

import theme from "../theme";

const Element = styled.img(props => ({
  borderRadius: "50%",
  width: theme.sizes.avatar[props.size] + "px",
  height: theme.sizes.avatar[props.size] + "px"
}));

export { Element };
