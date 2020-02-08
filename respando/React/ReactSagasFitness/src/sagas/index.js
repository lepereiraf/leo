import { all } from "redux-saga/effects";

import example from "./example";
import ejercicioSaga from "./ejercicioSaga";

function* root() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([...example, ...ejercicioSaga]);
  } catch (err) {
    throw err;
  }
}

export default root;
