import { createReducer } from "reduxsauce";

import produce from "immer";

import { SET_EJERCICIO } from "../actions/ejercicio";

const INITIAL_STATE = {
  ejercicios: []
};

const setEjercicios = produce((draft, { data }) => {
  draft.ejercicios = data.map(e => e);
});

const reducer = createReducer(INITIAL_STATE, {
  [SET_EJERCICIO]: setEjercicios
});

export default reducer;
