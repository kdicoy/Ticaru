import update from 'immutability-helper';
import * as types from '../actionTypes/tasks';
import { days } from '../../app/constants/general-constants';

const initialState = {
  weeklyBoard: {
    Monday: [
      {
        id: 'TASK1',
        task: 'Workout at gym',
        time: '7:00 am',
        time_duration: 1,
        time_units: 'hours',
        difficulty: 2,
        points: 5,
        day: days.Monday,
        goalId: '12% Body Fat',
        weight: '',
        picture: '',
      },
      {
        id: 'TASK2',
        task:
          'create section for repeatable tasks and then go back to the gym and then do something crazy what happens if long text',
        time: '9:15 am',
        time_duration: 3,
        time_units: 'hours',
        difficulty: 1,
        points: 15,
        day: days.Monday,
        goalId: 'Finish Website MVP',
      },
      {
        id: 'TASK3',
        task: 'send out 10 resumes',
        time: '1:15 pm',
        time_duration: 1,
        time_units: 'hours',
        difficulty: 1,
        points: 3,
        day: days.Monday,
        goalId: 'Find a new job',
      },
      {
        id: 'TASK4',
        task: 'Create CV for Riot Games',
        time: '2:15 pm',
        time_duration: 1,
        time_units: 'hours',
        difficulty: 2,
        points: 5,
        day: days.Monday,
        goalId: 'Find a new job',
      },
    ],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [
      {
        id: 'TASK5',
        task: 'Do what Brock needs for Creator Arcade',
        time: '9:15 am',
        time_duration: 5,
        time_units: 'hours',
        difficulty: 0,
        points: 15,
        day: days.Friday,
        goalId: 'Update Creator Arcade',
      },
    ],
    Saturday: [],
    Sunday: [
      {
        id: 'TASK6',
        task: 'create means to add / edit goals',
        time: '3:15 pm',
        time_duration: 3,
        time_units: 'hours',
        difficulty: 4,
        points: 15,
        day: days.Sunday,
        goalId: 'Finish Website MVP',
      },
    ],
  },
  subTasks: {
    TASK6: [
      { id: '1a', task: 'something something' },
      { id: '1b', task: 'something2 something2' },
      { id: '1c', task: 'something2 something2' },
    ],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.MOVE_TASK_TO_ANOTHER_DAY:
      return update(state, {
        weeklyBoard: { $merge: action.movedTasksResult },
      });
    case types.REORDER_TASKS_IN_A_DAY:
      return update(state, {
        weeklyBoard: { [action.day]: { $set: action.reorderedTasks } },
      });

    case types.UPDATE_TASK_AND_MOVE:
      return update(state, {
        weeklyBoard: {
          [action.previousTask.day]: {
            $set: state.weeklyBoard[action.previousTask.day].filter(
              ({ id }) => id !== action.previousTask.id
            ),
          },
          [action.updatedTask.day]: {
            $push: [action.updatedTask],
          },
        },
      });
    case types.UPDATE_TASK_AND_NO_MOVE:
      return update(state, {
        weeklyBoard: {
          [action.updatedTask.day]: {
            $set: state.weeklyBoard[action.updatedTask.day].map(task => {
              if (task.id === action.updatedTask.id) {
                return action.updatedTask;
              }
              return task;
            }),
          },
        },
      });
    case types.REMOVE_TASK:
      return update(state, {
        weeklyBoard: {
          [action.task.day]: {
            $set: state.weeklyBoard[action.task.day].filter(
              ({ id }) => id !== action.task.id
            ),
          },
        },
      });
    default:
      return state;
  }
};
