import * as types from "../actionTypes/tasks";

const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}`,
    content: `item ${k + offset}`
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
    case types.SET_WEEKLY_TASKS:
      return {
        ...state,
        weeklyBoard: { ...state.weeklyBoard, ...action.weeklyTasks }
      };

    default:
      return state;
  }
};
