import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import example from "./example";
import moviesReducer from "./moviesReducer";

function createRootReducer(history) {
  const router = connectRouter(history);
  const rootReducer = combineReducers({ example, moviesReducer, router });

  return rootReducer;
}

export default createRootReducer;
