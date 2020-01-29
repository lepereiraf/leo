import { all } from "redux-saga/effects";

import example from "./example";
import moviesSagas from "./moviesSagas";

function* root() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([...example, ...moviesSagas]);
  } catch (err) {
    throw err;
  }
}

export default root;
