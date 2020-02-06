import { all } from "redux-saga/effects";

import example from "./example";
import storeSaga from "./storeSaga";

function* root() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([...example, ...storeSaga]);
  } catch (err) {
    throw err;
  }
}

export default root;
