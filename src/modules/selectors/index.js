import { createSelector } from "reselect";
//TASKS
const getWeeklyBoard = state => state.tasks.weeklyBoard;
// reselect function
export const getWeeklyBoardState = createSelector(
  getWeeklyBoard,
  weeklyBoard => weeklyBoard
);
//GOALS
const getGoals = state => state.goals.goalsList;

export const getGoalsState = createSelector(getGoals, goalsList => goalsList);

const getGoalsColors = state => state.goals.goalsColors;

export const getGoalsColorState = createSelector(
  getGoalsColors,
  goalsColors => goalsColors
);

//GENERAL

const getScreenSize = state => state.general.screenSize;

export const getScreenSizeState = createSelector(
  getScreenSize,
  screenSize => screenSize
);
