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
    }
  }
});
