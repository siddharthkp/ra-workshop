import React from "react";
import { AvatarBlock } from "./";
import { ThemeProvider } from "../ThemeProvider";
import docsPage from "./avatar-block.mdx";

export default {
  title: "AvatarBlock",
  parameters: {
    docs: { page: docsPage }
  }
};

export const simple = () => (
  <ThemeProvider>
    <AvatarBlock
      name="Julieta Curdi"
      avatar="https://cdn.dribbble.com/users/441550/avatars/small/ff7601302c6a004465e0f936110a35de.jpg"
      url="https://dribble/julietacurdi"
      label="pro"
    />
  </ThemeProvider>
);

export const types = () => (
  <ThemeProvider>
    <AvatarBlock
      name="Julieta Curdi"
      avatar="https://cdn.dribbble.com/users/441550/avatars/small/ff7601302c6a004465e0f936110a35de.jpg"
      url="https://dribble/julietacurdi"
      label="pro"
    />
    <br />
    <AvatarBlock
      name="Zeit"
      avatar="https://cdn.dribbble.com/users/1543311/avatars/small/4c6204afc24ae0743d4dd1daf9c5d80f.png?1483736857"
      url="https://dribbble.com/zeithq"
      label="team"
    />
  </ThemeProvider>
);

export const missingInfo = () => (
  <ThemeProvider>
    <AvatarBlock
      name="Julieta Curdi"
      avatar="https://cdn.dribbble.com/users/441550/avatars/small/ff7601302c6a004465e0f936110a35de.jpg"
    />
  </ThemeProvider>
);
