import theme from "../theme";

const allColorTokens = Object.keys(theme.colors)
  .map(key => {
    if (typeof theme.colors[key] === "object") {
      return Object.keys(theme.colors[key]).map(k => key + "." + k);
    }
    return key;
  })
  .flat();

export { allColorTokens };
