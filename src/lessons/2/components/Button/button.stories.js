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
