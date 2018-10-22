import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";

export const breakPoints = deepMerge(grommet, {
  global: {
    breakpoints: {
      mobile: {
        value: 500
      },
      ipad: {
        value: 1000
      },
      desktop: {
        value: 1200
      }
    }
  }
});