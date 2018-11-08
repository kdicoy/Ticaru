import * as types from "../actionTypes/goals";

export const getGoals = id => dispatch =>
  new Promise(resolve => {
    setTimeout(() => {
      let goals;

      if (id === 1) {
        goals = [
          {
            goal: "Six Pack",
            end_date: "12-13-2018",
            start_date: "10-24-2018"
          },
          {
            goal: "New Job",
            start_date: "10-24-2018",
            end_date: "1-1-2019"
          }
        ];
      } else {
        {
          goals = [
            {
              goal: "Start Up Idea",
              end_date: "11-13-2018",
              start_date: "10-24-2018"
            },
            {
              goal: "Bench 225x12",
              start_date: "10-24-2018",
              end_date: "2-1-2019"
            }
          ];
        }
      }

      dispatch({
        type: types.GET_GOALS,
        goals
      });

      resolve(goals);
    }, 3000);
  });
