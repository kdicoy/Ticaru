import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import goals from './goals'
import auth from './auth';
import profile from './profile';

export default combineReducers({
  auth,
  profile,
  goals,
  form: formReducer
});
