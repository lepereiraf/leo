import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import example from "./example";
import personReducer from "./personReducer";

function createRootReducer(history) {
  const router = connectRouter(history);
  const rootReducer = combineReducers({ example, router, personReducer });

  return rootReducer;
}

export default createRootReducer;
