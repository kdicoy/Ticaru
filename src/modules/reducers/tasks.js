

export const SET_CURRENT_PROFILE = 'auth/SET_CURRENT_PROFILE';

const id2List = {
  monday: 'monday',
  tuesday: 'selected',
  wednesday: 'wednesday',
  thursday: 'thursday',
  friday: 'friday',
  saturday: 'saturday',
  sunday: 'sunday'
};

const initialState = {
  weeklyBoard: {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  },

};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PROFILE:
      return {
        ...state,
        currentProfile: action.profile
      };

    default:
      return state;
  }
};

state = {
  monday: getItems(10),
  selected: getItems(5, 10)
};

/**
* A semi-generic way to handle multiple lists. Matches
* the IDs of the droppable container to the names of the
* source arrays stored in the state.
*/
id2List = {
  monday: 'monday',
  tuesday: 'selected',
  wednesday: 'wednesday',
  thursday: 'thursday',
  friday: 'friday',
  saturday: 'saturday',
  sunday: 'sunday'
};