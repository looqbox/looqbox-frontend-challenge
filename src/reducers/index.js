import { combineReducers } from "redux";
import { clickReducer } from "./clickReducer";

export default combineReducers({
  clickState: clickReducer,
});
