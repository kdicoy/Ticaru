import * as types from "../actionTypes/tasks";
import update from "immutability-helper";

const initialState = {
  weeklyBoard: {
    monday: [
      {
        task: "Workout at gym",
        time: "7:00 am",
        time_duration: 1,
        time_units: "hours",
        difficulty: 5,
        points: 5,
        goalId: "12% Body Fat"
      },
      {
        task: "create section for repeatable tasks",
        time: "9:15 am",
        time_duration: 3,
        time_units: "hours",
        difficulty: 5,
        points: 15,
        goalId: "Finish Website MVP"
      },
      {
        task: "send out 10 resumes",
        time: "1:15 pm",
        time_duration: 1,
        time_units: "hours",
        difficulty: 3,
        points: 3,
        goalId: "Find a Job"
      },
      {
        task: "Create CV for Riot Games",
        time: "2:15 pm",
        time_duration: 1,
        time_units: "hours",
        difficulty: 5,
        points: 5,
        goalId: "Find a Job"
      }
    ],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [
      {
        task: "Do what Brock needs for Creator Arcade",
        time: "9:15 am",
        time_duration: 5,
        time_units: "hours",
        difficulty: 3,
        points: 15,
        goalId: "Update Creator Arcade"
      }
    ],
    saturday: [],
    sunday: [
      {
        task: "create means to add / edit goals",
        time: "3:15 pm",
        time_duration: 3,
        time_units: "hours",
        difficulty: 5,
        points: 15,
        goalId: "Finish Website MVP"
      }
    ]
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
