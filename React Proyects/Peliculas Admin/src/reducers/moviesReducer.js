import { createReducer } from "reduxsauce";

import produce from "immer";

import { SET_MOVIE } from "../actions/moviesAction";

const INITIAL_STATE = {
  movies: []
};

const setMovies = produce((draft, { data }) => {
  draft.movies = data.map(e => e);
});

const reducer = createReducer(INITIAL_STATE, {
  [SET_MOVIE]: setMovies
});

export default reducer;
