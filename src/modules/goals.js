export const GET_GOALS = 'goals/GET_GOALS'

const initialState = {
  listOfGoals: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GOALS:
      return {
        ...state,
        listOfGoals: action.goals
      }

    default:
      return state
  }
}

export const getGoals = id => dispatch =>
  new Promise(resolve => {
    setTimeout(() => {
      let goals

      if (id === 1) {
        goals = [
          {
            goal: 'Six Pack',
            end_date: '12-13-2018',
            start_date: '10-24-2018'
          },
          {
            goal: 'New Job',
            start_date: '10-24-2018',
            end_date: '1-1-2019'
          }
        ]
      } else {
        {
          goals = [
            {
              goal: 'Start Up Idea',
              end_date: '11-13-2018',
              start_date: '10-24-2018'
            },
            {
              goal: 'Bench 225x12',
              start_date: '10-24-2018',
              end_date: '2-1-2019'
            }
          ]
        }
      }

      dispatch({
        type: GET_GOALS,
        goals
      })

      resolve(goals)
    }, 3000)
  })

