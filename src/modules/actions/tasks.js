import * as types from "../actionTypes/tasks";

export const moveWeeklyTasks = weeklyTasks => dispatch => {
  return dispatch({ type: types.SET_WEEKLY_TASKS, weeklyTasks });
};
