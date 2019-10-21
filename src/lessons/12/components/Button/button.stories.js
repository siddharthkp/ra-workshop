import React from "react";
import { ThemeProvider } from "../ThemeProvider";
import { Button } from "./";

export default {
  title: "Button"
};

export const all = () => (
  <ThemeProvider>
    <div>{primary()}</div>
    <br />
    <div>{secondary()}</div>
    <br />
    <div>{accent()}</div>
    <br />
    <div>{success()}</div>
    <br />
  </ThemeProvider>
);

export const primary = () => (
  <ThemeProvider>
    <Button>Button Label</Button>
    <br />
    <br />
    <Button disabled>Button Label</Button>
  </ThemeProvider>
);

export const secondary = () => (
  <ThemeProvider>
    <Button variant="secondary">Button Label</Button>
    <br />
    <br />
    <Button variant="secondary" disabled>
      Button Label
    </Button>
  </ThemeProvider>
);

export const accent = () => (
  <ThemeProvider>
    <Button variant="accent">Button Label</Button>
    <br />
    <br />
    <Button variant="accent" disabled>
      Button Label
    </Button>
  </ThemeProvider>
);

export const success = () => (
  <ThemeProvider>
    <Button variant="success">Button Label</Button>
    <br />
    <br />
    <Button variant="success" disabled>
      Button Label
    </Button>
  </ThemeProvider>
);
