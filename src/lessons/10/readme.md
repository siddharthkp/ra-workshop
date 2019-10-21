## Lesson 10

Object styles

> Directory: `lessons/10/components`

> Remember to change the current lesson to 10 in `.storybook/config.js`

## CHALLENGE:

- Clean up the code by using style objects instead of literal string

- Documentation: https://www.styled-components.com/docs/advanced#style-objects

```js
// before:
const Element = styled.button`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes[2]}px;
  background-color: ${props => theme.colors[props.variant][500]};
`;

// after:
const Element = styled.button(props => ({
  color: theme.colors.white,
  fontSize: theme.fontSizes[2],
  backgroundColor: theme.colors[props.variant][500]
}));
```
