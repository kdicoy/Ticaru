import { deepMerge } from 'grommet/utils';
import { hpe } from 'grommet-theme-hpe';
import { dark } from 'grommet';

console.log(dark, 'dark');

const theme = deepMerge(hpe, {
  global: {
    breakpoints: {
      xsmall: {
        value: 500,
      },
      small: {
        value: 900,
      },
      medium: 1200,
    },
    colors: {
      brand: '#25c55b',
    },
  },
});

export default theme;
