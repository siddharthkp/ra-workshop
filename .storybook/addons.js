import { addDecorator, addParameters } from "@storybook/react";

// theming:

/*

import tokens from "../src/lessons/13/components/theme";
import { create } from "@storybook/theming";

const theme = create({
  base: "light",
  brandTitle: "Dribbble",
  brandImage:
    "https://cdn.dribbble.com/assets/dribbble-ball-icon-e94956d5f010d19607348176b0ae90def55d61871a43cb4bcb6d771d8d235471.svg",
  colorPrimary: tokens.colors.brand[700],
  colorSecondary: tokens.colors.brand[500],
  barSelectedColor: tokens.colors.brand[700]
});

addParameters({
  options: { theme }
});

*/

// responsive;

/*
import "@storybook/addon-viewport/register";
*/

// accessibility;

/*

import "@storybook/addon-a11y/register";
import { withA11y } from "@storybook/addon-a11y";
addDecorator(withA11y);

import "@storybook/addon-backgrounds/register";
addParameters({
  backgrounds: [
    { name: "light", value: tokens.colors.white },
    { name: "dark", value: tokens.colors.grays[900] }
  ]
});

*/
