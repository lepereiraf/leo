import { all } from "redux-saga/effects";

import example from "./example";
import personSaga from "./personSaga";

function* root() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([...example, ...personSaga]);
  } catch (err) {
    throw err;
  }
}

export default root;
