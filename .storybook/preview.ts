import type { Preview } from "@storybook/react";
import '../src/index.css';

import { withThemeByDataAttribute } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [withThemeByDataAttribute({
      themes: {
          // nameOfTheme: 'dataAttributeForTheme',
          light: '',
          dark: 'dark',
      },
      defaultTheme: 'light',
      dataAttribute: 'data-theme',
  })]
};

export default preview;
