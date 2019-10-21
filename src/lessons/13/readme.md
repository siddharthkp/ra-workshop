## Lesson 13

Adding docs

> Directory: `lessons/13/components`

> Remember to change the current lesson to 13 in `.storybook/config.js`

## CHALLENGE:

- Enabled `addon-docs` in `./storybook/presets.js` and restart `yarn storybook`

- Import the docs page from `./button.mdx` and add it the story export.

Storybook API:

```js
import docsPage from "./button.mdx";

export default {
  title: "Button",
  parameters: {
    docs: { page: docsPage }
  }
};
```

- Add free form documentation to the docs page (mdx), example of the component, table of props, `variant` prop

Storybook API:

```js
<Props of={Button} />

<Preview>
  <Story id="see-embedding-stories-below"/>
</Preview>
```

- After adding props table, make sure the `Button` component has `propTypes` and `defaultProps` defined.

Reference: https://reactjs.org/docs/typechecking-with-proptypes.html

## STORYBOOK DOCS DOCUMENTATION:

1. Readme: https://github.com/storybookjs/storybook/tree/master/addons/docs#docspage

2. Embedding stories: https://github.com/storybookjs/storybook/blob/master/addons/docs/docs/mdx.md#embedding-stories

The id is inferred from the URL:
http://localhost:6006/?path=/docs/<page-id>

3. Advanced example: https://github.com/storybookjs/storybook/blob/master/examples/official-storybook/stories/addon-docs/addon-docs.stories.mdx
