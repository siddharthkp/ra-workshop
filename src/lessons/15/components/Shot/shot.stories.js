import React from "react";
import { Shot } from "./";
import { ThemeProvider } from "../ThemeProvider";
import docsPage from "./shot.mdx";

export default {
  title: "Shot",
  parameters: {
    docs: { page: docsPage }
  }
};

export const simple = () => (
  <ThemeProvider>
    <Shot prop1="something" prop2="something" />
  </ThemeProvider>
);

export const attachment = () => (
  <ThemeProvider>
    <Shot attachment="lalala" prop1="something" prop2="something" />
  </ThemeProvider>
);
