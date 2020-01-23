import { createReducer } from "reduxsauce";

import produce from "immer";

import { SET_PERSON, SET_ONE_PERSON } from "../actions/personActions";

const INITIAL_STATE = {
  personas: [],
  persona: []
};

const setPersonas = produce((draft, { data }) => {
  console.log("reducer setperson");
  console.log(data);
  draft.personas = data.map(e => e);
});

const setOnePersona = produce((draft, { data }) => {
  console.log(data);
  draft.persona = data.map(e => e);
});

const reducer = createReducer(INITIAL_STATE, {
  [SET_PERSON]: setPersonas,
  [SET_ONE_PERSON]: setOnePersona
});

export default reducer;
