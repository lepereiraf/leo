import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import example from "./example";
import productReducer from "./productReducer";

function createRootReducer(history) {
  const router = connectRouter(history);
  const rootReducer = combineReducers({ example, productReducer, router });

  return rootReducer;
}

export default createRootReducer;
