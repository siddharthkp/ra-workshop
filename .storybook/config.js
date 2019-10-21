import { configure } from "@storybook/react";
import "./addons";

// automatically import all files ending in *.stories.js
configure(require.context("../src/lessons/2", true, /\.stories\.js$/), module);
