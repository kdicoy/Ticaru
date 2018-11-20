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

//MODAL

const getModalContent = state => state.modal.modalContent;

export const getModalContentState = createSelector(
  getModalContent,
  modalContent => modalContent
);

const getModalIsOpen = state => state.modal.modalIsOpen;

export const getModalIsOpenState = createSelector(
  getModalIsOpen,
  modalIsOpen => modalIsOpen
);

const getModalContentType = state => state.modal.modalContentType;

export const getModalContentTypeState = createSelector(
  getModalContentType,
  modalContentType => modalContentType
);
