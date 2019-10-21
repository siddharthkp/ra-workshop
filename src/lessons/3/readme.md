## Lesson 3

Implement `secondary` and `accent` for the `Button` component

> Directory: `lessons/3/components/Button`

> Remember to change the current lesson to 3 in `.storybook/config.js`

> Figma link: https://www.figma.com/file/4CMoLNTHXVFsDkDMVNrkuF/3?node-id=30%3A1

## CHALLENGE:

- In `Button/index.js`, modify `className` to adapt for different variants based on `props.variant`

  ```css
  .btn.primary {
  }
  .btn.secondary {
  }
  .btn.accent {
  }
  ```

- If no `variant` is given, it should default to `primary`

- Add styles for `secondary` and `accent` variants in `button.scss` based on the styles from Figma
