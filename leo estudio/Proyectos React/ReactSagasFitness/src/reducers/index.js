import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import example from "./example";
import ejercicioReducer from "./ejercicioReducer";

function createRootReducer(history) {
  const router = connectRouter(history);
  const rootReducer = combineReducers({ example, router, ejercicioReducer });

  return rootReducer;
}

export default createRootReducer;
