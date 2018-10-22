import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";
import { css } from "styled-components";

export const headerTheme = deepMerge(grommet, {
  global: {
    elevation: {
      light: {
        small: "0px 1px 5px rgba(0, 0, 0, 0.50)",
        medium: "0px 3px 8px rgba(0, 0, 0, 0.50)"
      }
    }
  },
  tab: {
    active: {
      background: "dark-1"
    },
    background: "dark-3",
    hover: {
      background: "dark-1"
    },
    border: undefined,
    margin: undefined,
    pad: {
      bottom: undefined,
      horizontal: "xsmall"
    },
    extend: ({ theme }) => css`
      border-radius: ${theme.global.control.border.radius};
      box-shadow: ${theme.global.elevation.light.small};
    `
  },
  tabs: {
    background: "dark-4",
    header: {
      background: "dark-2",
      extend: ({ theme }) => css`
        padding: ${theme.global.edgeSize.small};
        box-shadow: ${theme.global.elevation.light.medium};
      `
    },
    gap: "medium"
  }
});