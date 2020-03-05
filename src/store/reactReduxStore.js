import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import counterRedcuer from "./counterReducer";
import counterRedcuer2 from "./counterReducer2";

const store = createStore(
  //模块化
  combineReducers({
    counter: counterRedcuer,
    counter2: counterRedcuer2,
  }),
  applyMiddleware(logger, thunk),
);

export default store;
