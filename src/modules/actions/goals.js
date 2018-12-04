import * as types from '../actionTypes/goals';

export const moveGoal = goalList => dispatch =>
  dispatch({ type: types.MOVE_GOAL, goalList });

export const resolveGoal = goalId => dispatch => {
  dispatch({ type: types.REMOVE_GOAL, goalId });
};

export const addGoal = goalProperties => dispatch => {
  dispatch({ type: types.ADD_GOAL, goalProperties });
};
