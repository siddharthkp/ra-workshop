import React from "react";
import { Avatar } from "./";
import { ThemeProvider } from "../ThemeProvider";
import docsPage from "./avatar.mdx";

export default {
  title: "Avatar",
  parameters: {
    docs: { page: docsPage }
  }
};

export const simple = () => (
  <ThemeProvider>
    <Avatar src="https://cdn.dribbble.com/users/441550/avatars/small/ff7601302c6a004465e0f936110a35de.jpg" />
  </ThemeProvider>
);

export const sizes = () => (
  <ThemeProvider>
    <Avatar
      size="xsmall"
      src="https://cdn.dribbble.com/users/927565/avatars/small/871881bb1267479631c106f2985c93b9.jpg?1469997181"
    />
    <Avatar
      size="small"
      src="https://cdn.dribbble.com/users/14845/avatars/small/46d08ba23eb1b2054488c1fd48436540.jpg?1508428049"
    />
    <Avatar
      size="medium"
      src="https://cdn.dribbble.com/users/666045/avatars/small/29abf57d513d2a4c676d955e998dbdc7.jpg?1477000821"
    />
    <Avatar
      size="large"
      src="https://cdn.dribbble.com/users/13940/avatars/small/7ae66a1b4e9cde6caff64d831c339a08.jpg?1527284840"
    />
    <Avatar
      size="xlarge"
      src="https://cdn.dribbble.com/users/63052/avatars/small/twitter.jpg?1369589341"
    />
  </ThemeProvider>
);
