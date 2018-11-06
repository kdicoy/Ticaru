import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";

export const breakPoints = deepMerge(grommet, {
  global: {
    breakpoints: {
      xsmall: {
        value: 500
      },
      small: {
        value: 900
      },
      medium: 1200
    },
    colors: {
      brand: '#3966DB',
      'accent-1': '#7F9AE1',
      'accent-2': '#182B5B',
      'accent-3': '#333F5B',
      'accent-4': '#2C4EA8',
      'neutral-1': '#0ECEFF',
      'neutral-2': '#07677F',
      'neutral-3': '#5ADDFF',
      'neutral-4': '#2D6F7F',
      'neutral-5': '#0BA5CC',
    }
  }
})