import * as types from "../actionTypes/tasks";

const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}`,
    content: `item ${k + offset}`
  }));

const initialState = {
  weeklyBoard: {
    monday: getItems(1),
    tuesday: getItems(1, 1),
    wednesday: getItems(1, 2),
    thursday: getItems(1, 3),
    friday: getItems(1, 4),
    saturday: getItems(1, 5),
    sunday: getItems(1, 6)
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INITIALIZE_WEEKLY_TASKS:
      return {
        ...state,
        weeklyBoard: { ...state.weeklyBoard, ...action.weeklyTasks }
      };

    default:
      return state;
  }
};
