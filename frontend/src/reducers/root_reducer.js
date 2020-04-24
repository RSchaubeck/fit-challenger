import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from "./errors_reducer";
import usersReducer from "./users_reducer";

const RootReducer = combineReducers({
  errors,
  session,
  users: usersReducer
});

export default RootReducer;