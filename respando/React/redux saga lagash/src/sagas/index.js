import { all } from 'redux-saga/effects';

import ejercicio from './ejercicioSaga';
// import setPrueba from './sagaPrueba';
console.log(' entro al index saga');

function* root() {
  try {
    yield all([ejercicio]);
  } catch (error) {
    console.log(error);
  }
}

export default root;
