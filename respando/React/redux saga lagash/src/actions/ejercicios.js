import { createActions } from 'reduxsauce';

console.log('action disparada');
debugger;
const { Types, Creators } = createActions(
  {
    fetchEjercicio: null,
    setEjercicio: ['data']
  },
  {
    prefix: 'EJERCICIOS/'
  }
);

const { fetchEjercicio, setEjercicio } = Creators;

const { FETCH_EJERCICIO, SET_EJERCICIO } = Types;

export { fetchEjercicio, setEjercicio, FETCH_EJERCICIO, SET_EJERCICIO };
