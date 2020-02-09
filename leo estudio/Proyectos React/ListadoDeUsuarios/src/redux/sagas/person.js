import { put, call, takeLatest } from "redux-saga/effects";
import {
  GET_PERSON_START,
  GET_PERSON_START_ERROR,
  GET_PERSON_START_COMPLETE
} from "../../const/actionTypes";

import { apiCall } from "../api";

export function* getPerson({ payload }) {
  try {
    const results = yield call(apiCall, payload.person, null, null, "GET");
    console.log(results);

    yield put({ type: GET_PERSON_START_COMPLETE, results });
  } catch (error) {
    console.log("error we");
    yield put({ type: GET_PERSON_START_ERROR });
  }
}

export default function* person() {
  yield takeLatest(GET_PERSON_START, getPerson);
}
