## Lesson 11

Merging object styles

> Directory: `lessons/11/components`

> Remember to change the current lesson to 11 in `.storybook/config.js`

## CHALLENGE:

- Use deep-merge to merge style objects

- Documentation: https://github.com/TehShrike/deepmerge

```js
import deepmerge from "deepmerge"; // already installed for you

const textStyles = {
  color: "red",
  "&:hover": {
    color: "blue"
  }
};

const cursorStyles = {
  // this also sets the same key
  "&:hover": {
    cursor: "pointer"
  }
};

merged = { ...textStyles, ...cursorStyles };
// and
merged = Object.assign({}, textStyles, cursorStyles);
// both have the same incorrect result:
merged = {
  color: "red",
  // both of them set the hover key and the latter overrides
  // the former (shallow merge)
  "&:hover": {
    cursor: "pointer"
  }
};

merged = deepmerge(textStyles, cursorStyles);

// deep merge will merge each key until the last leaf node (infinite depth)
// ✔ result:
merged = {
  color: "red",
  "&:hover": {
    color: "blue",
    cursor: "pointer"
  }
};
```
