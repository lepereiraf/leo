import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import example from "./example";

import categoryReducer from "./categoryReducer";
import appReducer from "./appReducer";

function createRootReducer(history) {
  const router = connectRouter(history);
  const rootReducer = combineReducers({
    example,
    router,
    categoryReducer,
    appReducer
  });

  return rootReducer;
}

export default createRootReducer;
