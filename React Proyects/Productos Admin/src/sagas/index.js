import { all } from "redux-saga/effects";

import example from "./example";
import productSaga from "./productSaga";

function* root() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([...example, ...productSaga]);
  } catch (err) {
    throw err;
  }
}

export default root;
