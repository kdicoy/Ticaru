import * as types from "../actionTypes/tasks";

export const setWeeklyBoard = (items, day, weeklyBoard) => dispatch => {
  const newWeeklyBoard = { ...weeklyBoard };
  newWeeklyBoard[day] = items;
  dispatch({ type: types.SET_WEEKLY_TASKS, weeklyBoard: newWeeklyBoard });
};

export const setWeeklyTasks = () => {};
