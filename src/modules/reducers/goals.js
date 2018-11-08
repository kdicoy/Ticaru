import { GET_GOALS } from "../actionTypes/goals";

const initialState = {
  listOfGoals: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GOALS:
      return {
        ...state,
        listOfGoals: action.goals
      };

    default:
      return state;
  }
};
