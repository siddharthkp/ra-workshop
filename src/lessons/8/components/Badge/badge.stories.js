import React from "react";
import { Badge } from "./";

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
    <Badge color="var(--brand-500)">Pro</Badge>
    <br />
    <br />
    <Badge>Team</Badge>
    <br />
    <br />
    <Badge color="var(--accent-300)">Team</Badge>
  </>
);
