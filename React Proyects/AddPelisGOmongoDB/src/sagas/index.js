import { all } from "redux-saga/effects";

import example from "./example";
import movieSagas from "./movie";

function* root() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([...example, ...movieSagas]);
  } catch (err) {
    throw err;
  }
}

export default root;
