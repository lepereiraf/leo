import { createReducer } from "reduxsauce";

import produce from "immer";

import { SET_MOVIE } from "../actions/movies";

const INITIAL_STATE = {
  peliculas: []
};

const setMovies = produce((draft, { data }) => {
  draft.peliculas = data.map(e => e);
});

const reducer = createReducer(INITIAL_STATE, {
  [SET_MOVIE]: setMovies
});

export default reducer;
