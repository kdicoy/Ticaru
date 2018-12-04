import update from 'immutability-helper';
import * as types from '../actionTypes/goals';

const initialState = {
  goalsList: [
    {
      id: 'GOAL1',
      finalGoal: '12% Body Fat',
      quarterly: '18%',
      monthly: '20%',
      weekly: '22%',
      endDate: '3-13-2019',
      startDate: '10-24-2018',
      backgroundColor: 'lightblue',
      color: 'green',
    },
    {
      id: 'GOAL2',
      finalGoal: 'Finish Website MVP',
      quarterly: 'Finish Website MVP',
      monthly: 'Finish frontend',
      weekly: 'dashboard structure in place',
      startDate: '10-24-2018',
      endDate: '2-1-2019',
      backgroundColor: 'pink',
      color: 'red',
    },
    {
      id: 'GOAL3',
      finalGoal: 'Update Creator Arcade',
      weekly: 'Update Creator Arcade',
      startDate: '11-17-2018',
      endDate: '11-18-2018',
      backgroundColor: 'lightgreen',
      color: 'black',
    },
    {
      id: 'GOAL4',
      finalGoal: 'Find a new job',
      weekly: 'Send out Resumes',
      startDate: '11-16-2018',
      endDate: 'Until Found',
      backgroundColor: 'purple',
      color: 'white',
    },
  ],
  goalsColors: {
    GOAL4: {
      backgroundColor: 'purple',
      color: 'white',
    },
    GOAL3: {
      backgroundColor: 'lightgreen',
      color: 'black',
    },
    GOAL2: {
      backgroundColor: 'pink',
      color: 'red',
    },
    GOAL1: {
      backgroundColor: 'lightblue',
      color: 'green',
    },
  },
  userInputGoalProperties: {
    GOAL1: {
      weight: {
        type: 'number',
        required: true,
      },
      height: {
        type: 'number',
        required: true,
      },
      note: {
        type: 'text',
        required: false,
      },
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.MOVE_GOAL:
      return {
        ...state,
        goalsList: action.goalsList,
      };
    case types.ADD_GOAL:
      return update(state, {
        goalsList: { $push: action.goalProperties.incomingGoal },
        goalsColors: { $merge: action.goalProperties.incomingGoalColor },
        userInputGoalProperties: {
          $merge: action.goalProperties.incomingUserInputGoalProperty,
        },
      });
    case types.REMOVE_GOAL:
      return update(state, {
        goalsList: {
          $set: state.goalsList.filter(({ id }) => id !== action.goalId),
        },
      });
    default:
      return state;
  }
};
