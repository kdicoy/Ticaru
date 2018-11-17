import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import goals from "./reducers/goals";
import auth from "./auth";
import profile from "./profile";
import tasks from "./reducers/tasks";
import general from "./reducers/general";

export default combineReducers({
  auth,
  profile,
  goals,
  tasks,
  general,
  form: formReducer
});
