import { deepMerge } from 'grommet/utils';
import { hpe } from 'grommet-theme-hpe';
import { dark } from 'grommet';

console.log(dark, 'dark');

export const breakPoints = deepMerge(hpe, {
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
    button: {
      drop: {
        background: '#25c55b',
      },
    },
  },
});

console.log(breakPoints, 'BREAK POINTS');

// #fff white text color
// #25c55b green button color
// #465372 darker accent
// #5c7091 accent
// #758ab0 background
