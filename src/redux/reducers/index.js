import { combineReducers } from "redux";
import authReducer from './Auth'
import bagReducer from './myBag'

const reducers = combineReducers({
  auth : authReducer,
  bag : bagReducer
});

export default reducers;