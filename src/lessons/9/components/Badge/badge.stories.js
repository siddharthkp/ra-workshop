import React from "react";
import { Badge } from "./";
import theme from "../theme";

export default {
  title: "Badge"
};

export const simple = () => (
  <>
    <Badge>Pro</Badge>
  </>
);

export const color = () => (
  <>
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
  </>
);
