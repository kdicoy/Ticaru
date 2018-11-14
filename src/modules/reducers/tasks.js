import * as types from "../actionTypes/tasks";
import update from "immutability-helper";

const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}`,
    content: `item ${k + offset}`,
    resolved: false
  }));

const initialState = {
  weeklyBoard: {
    monday: getItems(2),
    tuesday: getItems(2, 2),
    wednesday: getItems(2, 4),
    thursday: getItems(2, 6),
    friday: getItems(2, 8),
    saturday: getItems(2, 10),
    sunday: getItems(2, 12)
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.MOVE_TASKS:
      return {
        ...state,
        weeklyBoard: { ...state.weeklyBoard, ...action.weeklyTasks }
      };
    case types.RESOLVE_TASK:
      return {
        ...state,
        weeklyBoard: update(state.weeklyBoard, {
          [action.day]: {
            $set: state.weeklyBoard[action.day].map(item => {
              if (item.id === action.taskId) {
                return { ...item, resolved: true };
              } else {
                return { ...item };
              }
            })
          }
        })
      };
    case types.REMOVE_TASK:
      return {
        ...state,
        weeklyBoard: update(state.weeklyBoard, {
          [action.day]: {
            $set: state.weeklyBoard[action.day].filter(
              ({ id }) => id !== action.taskId
            )
          }
        })
      };

    default:
      return state;
  }
};
