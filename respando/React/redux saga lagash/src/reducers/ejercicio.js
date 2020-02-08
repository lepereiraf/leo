import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { SET_EJERCICIO } from '../actions/ejercicios';

const INITIAL_STATE = {
  ejercicio: []
};

const setEjercicio = produce((draft, { data }) => {
  draft.ejercicio = data.map(e => e);
});

const reducer = createReducer(INITIAL_STATE, {
  [SET_EJERCICIO]: setEjercicio
});

export default reducer;
