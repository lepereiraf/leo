import { createReducer } from "reduxsauce";

import produce from "immer";

import { SET_PERSON } from "../actions/personActions";

const INITIAL_STATE = {
  personas: []
};

const setPersonas = produce((draft, { data }) => {
  draft.personas = data.map(e => e);
});

const reducer = createReducer(INITIAL_STATE, {
  [SET_PERSON]: setPersonas
});

export default reducer;
