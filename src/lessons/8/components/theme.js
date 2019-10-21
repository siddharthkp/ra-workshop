/*
  This theme file follows System UI Theme Specification
  https://system-ui.com/theme/
*/

const theme = {
  space: [],

  fontSizes: [],

  fonts: {
    text: "neue-haas-grotesk-text, Helvetica, Arial, sans-serif",
    code: "Dank Mono, monospace"
  },

  radii: [],

  shadows: {},

  sizes: {},

  colors: {
    white: "#fff",
    grays: {
      100: "#f4f4f4",
      200: "#e1e1e7",
      300: "#ddd",
      400: "#bbb",
      500: "#999",
      600: "#777",
      700: "#666",
      800: "#444",
      900: "#333"
    },
    pinks: {},
    blues: {},
    greens: {}
  }
};

// Aliases help codify variables into decisions
theme.colors.text = {
  primary: theme.colors.grays[800]
};

// you can create aliases for entire group of variables (objects)

// these probably should not be gray
theme.colors.brand = theme.colors.gray;
theme.colors.primary = theme.colors.gray;
theme.colors.accent = theme.colors.gray;
theme.colors.success = theme.colors.gray;

export default theme;
