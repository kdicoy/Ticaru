import * as types from '../actionTypes/general';

const initialState = {
  screenSize: 700,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SCREEN_SIZE:
      return {
        ...state,
        screenSize: action.screenSize,
      };
    default:
      return state;
  }
};
