import { createActions } from 'reduxsauce';

console.log('accion  de prueba llamada');

const { Types, Creators } = createActions(
  {
    setPrueba: ['data']
  },
  {
    prefix: 'PRUEBA/'
  }
);

const { setPrueba } = Creators;
const { SET_PRUEBA } = Types;

export { setPrueba, SET_PRUEBA };
