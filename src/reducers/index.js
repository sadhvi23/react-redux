import isLogged from "./isLogged";
import counter from "./Counter";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  counter: counter,
  isLogged: isLogged
});

export default allReducer;
