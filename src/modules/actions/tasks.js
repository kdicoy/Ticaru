import * as types from '../actionTypes/tasks';

export const reorderTasksInADay = (reorderedTasks, day) => dispatch => {
  return dispatch({ type: types.REORDER_TASKS_IN_A_DAY, reorderedTasks, day });
};

export const moveTaskToAnotherDay = movedTasksResult => dispatch => {
  console.log(movedTasksResult, 'moved Task');
  return dispatch({
    type: types.MOVE_TASK_TO_ANOTHER_DAY,
    movedTasksResult,
  });
};

export const resolveTask = task => dispatch => {
  dispatch({ type: types.REMOVE_TASK, task });
};

export const updateWithEditedTask = (previousTask, updatedTask) => dispatch => {
  if (previousTask.day !== updatedTask.day) {
    dispatch({ type: types.UPDATE_TASK_AND_MOVE, previousTask, updatedTask });
  } else {
    dispatch({ type: types.UPDATE_TASK_AND_NO_MOVE, updatedTask });
  }
};
