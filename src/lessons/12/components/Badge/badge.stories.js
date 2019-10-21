import React from "react";
import { Badge } from "./";
import { ThemeProvider } from "../ThemeProvider";
import theme from "../theme";

export default {
  title: "Badge"
};

export const simple = () => (
  <ThemeProvider>
    <Badge>Pro</Badge>
  </ThemeProvider>
);

export const color = () => (
  <ThemeProvider>
    <Badge>Pro</Badge>
    <br />
    <br />
    <Badge color={theme.colors.brand[500]}>Pro</Badge>
    <br />
    <br />
    <Badge>Team</Badge>
    <br />
    <br />
    <Badge color={theme.colors.accent[300]}>Team</Badge>
  </ThemeProvider>
);
