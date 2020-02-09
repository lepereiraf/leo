import { all, call, fork, takeLatest, putResolve } from 'redux-saga/effects';

//import { ejercicios } from '../services';
import { setPrueba, SET_PRUEBA } from '../actions/prueba';

console.log('entro ala saga!');

// import  from '../config/messages'

const {
  prueba: { setPrueba }
} = prueba;

function* setPruebaSaga() {
  try {
    console.log('entro a la saga de prueba!!');
  } catch (error) {
    console.log(error);
    console.log('no entro');
  }
}

function* watcher() {
  try {
    yield all([takeLatest(SET_PRUEBA, setPruebaSaga)]);
  } catch (error) {
    throw error;
  }
}

export default [fork(watcher)];
