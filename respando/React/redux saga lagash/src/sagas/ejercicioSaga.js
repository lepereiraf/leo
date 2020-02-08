import { all, call, fork, takeLatest, putResolve } from 'redux-saga/effects';

import { ejercicios } from '../services';
import {
  FETCH_EJERCICIO,
  SET_EJERCICIO,
  fetchEjercicio,
  setEjercicio
} from '../actions/ejercicios';

console.log('entro ala saga!');

// import  from '../config/messages'

const {
  ejercicio: { getEjercicio }
} = ejercicios;

function* fetchEjercicios() {
  // debugger;

  try {
    console.log('entro! ala saga');
    const { ok, data } = yield call(getEjercicio);

    if (!ok) {
      console.log('error al traer la data :C');

      return;
    }

    yield putResolve(setEjercicio(data));
  } catch (error) {
    console.log(error);
  }
}

function* watcher() {
  try {
    yield all([takeLatest(FETCH_EJERCICIO, fetchEjercicios)]);
  } catch (error) {
    throw error;
  }
}

export default [fork(watcher)];
