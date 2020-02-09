import { all } from "redux-saga/effects";
import person from "./person";
export default function* rootSaga() {
  yield all([person()]);
}
