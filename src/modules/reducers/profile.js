import * as types from '../actionTypes/goals';

const initialState = {
  currentProfile: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_PROFILE:
      return {
        ...state,
        currentProfile: action.profile,
      };

    default:
      return state;
  }
};
