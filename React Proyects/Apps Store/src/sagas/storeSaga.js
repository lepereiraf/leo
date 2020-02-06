import {
  ADD_APP,
  GET_ONE_APP,
  setOneApp,
  setName,
  GET_NAME,
  EDIT_APP
} from "../actions/storeActions";
import { all, takeLatest, call, putResolve, fork } from "redux-saga/effects";

import { storeApi } from "../services";

const {
  appService: { postApps, getCategorys, getNameApps, putApps }
} = storeApi;

function* fetchCategoryApp({ category }) {
  try {
    const { ok, data } = yield call(getCategorys, category);
    if (!ok) {
      console.log("error al recibir apps por categoria");
      return;
    }

    yield putResolve(setOneApp(data));
  } catch (error) {
    console.log(error);
  }
}

function* newApp({ data }) {
  try {
    const { ok } = yield call(postApps, data);

    if (!ok) {
      console.log("error!");
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

function* fetchName({ name }) {
  try {
    const { ok, data } = yield call(getNameApps, name);

    if (!ok) {
      alert("La app no existe!");
      return;
    }
    yield putResolve(setName(data));
  } catch (error) {
    console.log(error);
  }
}
function* updateApp({ name, data }) {
  try {
    const { ok } = yield call(putApps, name, data);
    if (!ok) {
      console.log("error en la llamada");
    }
  } catch (error) {
    console.log(error);
  }
}

function* watcher() {
  try {
    yield all([takeLatest(ADD_APP, newApp)]);
    yield all([takeLatest(GET_ONE_APP, fetchCategoryApp)]);
    yield all([takeLatest(GET_NAME, fetchName)]);
    yield all([takeLatest(EDIT_APP, updateApp)]);
  } catch (error) {
    console.log(error);
  }
}

export default [fork(watcher)];
