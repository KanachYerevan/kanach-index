import type { Preview } from '@storybook/sveltekit'

import '$lib/styles/main.css';
import '$lib/styles/fonts.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
