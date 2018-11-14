import * as types from "../actionTypes/tasks";

export const moveWeeklyTasks = weeklyTasks => dispatch => {
  return dispatch({ type: types.MOVE_TASKS, weeklyTasks });
};

export const resolveItem = (taskId, day) => dispatch => {
  dispatch({ type: types.RESOLVE_TASK, day, taskId });

  return setTimeout(
    () => dispatch({ type: types.REMOVE_TASK, day, taskId }),
    1500
  );
};

/* week{ monday: [{id: 1, },{}]

case 'SOME_ACTION':
  return update(state, { 
    contents: { 
      [action.id]: {
        text: {$set: action.payload}
      }
    }
  });

}


*/
