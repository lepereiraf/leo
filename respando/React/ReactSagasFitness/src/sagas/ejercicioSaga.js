import { all, call, fork, putResolve, takeLatest } from "redux-saga/effects";

import { ejercicioAPI } from "../services";

import {
  GET_EJERCICIO,
  setEjercicio,
  getEjercicio,
  ADD_EJERCICIO
} from "../actions/ejercicio";
//debugger;
const {
  ejercicioService: { getEjercicios, postEjercicio }
} = ejercicioAPI;

function* fetchEjercicio() {
  try {
    const { ok, data } = yield call(getEjercicios);
    //console.log(data);
    if (!ok) {
      console.log("error!");
      return;
    }

    yield putResolve(setEjercicio(data));
  } catch (error) {
    console.log(error);
  }
}

function* newEjercicio({ data }) {
  console.log("entro a la saga");
  console.log(data);
  try {
    const { ok, data: dataResult } = yield call(postEjercicio, data);
    if (!ok) {
      console.log("error en el post");
    }
  } catch (error) {
    console.log("error ");
    console.log(error);
  }
}

function* watcher() {
  try {
    yield all([takeLatest(GET_EJERCICIO, fetchEjercicio)]);
    yield all([takeLatest(ADD_EJERCICIO, newEjercicio)]);
  } catch (error) {
    console.log("error en el watcher!");
  }
}

export default [fork(watcher)];
