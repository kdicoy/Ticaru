import * as types from "../actionTypes/goals";
import update from "immutability-helper";

const initialState = {
  goalsList: [
    {
      id: "12% Body Fat",
      quarterly: "18%",
      monthly: "20%",
      weekly: "22%",
      end_date: "3-13-2019",
      start_date: "10-24-2018",
      backgroundColor: "lightblue",
      color: "green"
    },
    {
      id: "Finish Website MVP",
      quarterly: "Finish Website MVP",
      monthly: "Finish frontend",
      weekly: "dashboard structure in place",
      start_date: "10-24-2018",
      end_date: "2-1-2019",
      backgroundColor: "pink",
      color: "red"
    },
    {
      id: "Update Creator Arcade",
      weekly: "Update Creator Arcade",
      start_date: "11-17-2018",
      end_date: "11-18-2018",
      backgroundColor: "lightgreen",
      color: "black"
    },
    {
      id: "Find a Job",
      weekly: "Send out Resumes",
      start_date: "11-16-2018",
      end_date: "Until Found",
      backgroundColor: "purple",
      color: "white"
    }
  ],
  goalsColors: {
    "Find a Job": {
      backgroundColor: "purple",
      color: "white"
    },
    "Update Creator Arcade": {
      backgroundColor: "lightgreen",
      color: "black"
    },
    "Finish Website MVP": {
      backgroundColor: "pink",
      color: "red"
    },
    "12% Body Fat": {
      backgroundColor: "lightblue",
      color: "green"
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.MOVE_GOAL:
      return {
        ...state,
        goalsList: action.goalsList
      };
    case types.REMOVE_GOAL:
      return {
        ...state,
        goalsList: update(state.goalsList, {
          $set: state.goalsList.filter(({ id }) => {
            console.log(id, "ID", action.goalId, "ACTION GOAL ID");
            console.log(id !== action.goalId, "T/F?");
            return id !== action.goalId;
          })
        })
      };
    default:
      return state;
  }
};
