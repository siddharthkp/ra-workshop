import React from "react";
import { Button } from "./";

export default {
  title: "Button"
};

export const primary = () => (
  <>
    <Button>Button Label</Button>
    <br />
    <br />
    <Button disabled>Button Label</Button>
  </>
);

export const secondary = () => (
  <>
    <Button variant="secondary">Button Label</Button>
    <br />
    <br />
    <Button variant="secondary" disabled>
      Button Label
    </Button>
  </>
);

export const accent = () => (
  <>
    <Button variant="accent">Button Label</Button>
    <br />
    <br />
    <Button variant="accent" disabled>
      Button Label
    </Button>
  </>
);

export const all = () => (
  <>
    <div>{primary()}</div>
    <br />
    <div>{secondary()}</div>
    <br />
    <div>{accent()}</div>
    <br />
  </>
);
