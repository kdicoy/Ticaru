import * as types from "../actionTypes/tasks";

export const moveWeeklyTasks = weeklyTasks => dispatch => {
  return dispatch({ type: types.MOVE_TASKS, weeklyTasks });
};

export const resolveTask = (taskId, day) => dispatch => {
  dispatch({ type: types.REMOVE_TASK, day, taskId });
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
