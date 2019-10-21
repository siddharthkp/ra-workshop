import React from "react";
import { Badge } from "./";
import { ThemeProvider } from "../ThemeProvider";
import theme from "../theme";
// import docsPage from "./badge.mdx";

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
    <Badge color="brand.500">Pro</Badge>
    <br />
    <br />
    <Badge>Team</Badge>
    <br />
    <br />
    <Badge color="accent.300">Team</Badge>
  </ThemeProvider>
);
