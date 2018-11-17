import * as types from "../actionTypes/general";

export const setScreenSize = screenSize => dispatch =>
  dispatch({
    type: types.SET_SCREEN_SIZE,
    screenSize
  });
