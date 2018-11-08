import { createSelector } from "reselect";

const getWeeklyBoard = state => state.tasks.weeklyBoard;
// reselect function
export const getWeeklyBoardState = createSelector(
  getWeeklyBoard,
  weeklyBoard => weeklyBoard
);
