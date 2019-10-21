import React from "react";
import { ThemeProvider as Provider } from "styled-components";

import theme from "../theme";

export function ThemeProvider(props) {
  return <Provider theme={theme} {...props} />;
}
