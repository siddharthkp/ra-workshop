import React from "react";
import { Link } from "./";
import { ThemeProvider } from "../ThemeProvider";
import docsPage from "./link.mdx";

export default {
  title: "Link",
  parameters: {
    docs: { page: docsPage }
  }
};

export const simple = () => (
  <ThemeProvider>
    <Link href="https://dribbble.com/julietacurdi">Julieta Curdi</Link>
  </ThemeProvider>
);

export const target = () => (
  <ThemeProvider>
    <Link href="https://dribbble.com/julietacurdi" target="_blank">
      Julieta Curdi
    </Link>
  </ThemeProvider>
);
