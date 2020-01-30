import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import example from "./example";
import movieReducer from "./movieReducer";

function createRootReducer(history) {
  const router = connectRouter(history);
  const rootReducer = combineReducers({ example, movieReducer, router });

  return rootReducer;
}

export default createRootReducer;
