import { GET_MOVIE, setMovie, ADD_MOVIE } from "../actions/movies";
import { movieApi } from "../services";

import { call, fork, takeLatest, all, putResolve } from "redux-saga/effects";

const {
  movieService: { getMovies, postMovies }
} = movieApi;

function* fetchMovie() {
  try {
    console.log("entro a la saga");
    const { ok, data } = yield call(getMovies);
    if (!ok) {
      console.log("error!");
      return;
    }

    yield putResolve(setMovie(data));
  } catch (error) {
    console.log(error);
  }
}

function* newMovie({ data }) {
  console.log(data);
  try {
    const { ok } = yield call(postMovies, data);
    if (!ok) {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
}

function* watcher() {
  try {
    yield all([takeLatest(GET_MOVIE, fetchMovie)]);
    yield all([takeLatest(ADD_MOVIE, newMovie)]);
  } catch (error) {
    console.log("error en el watcher");
  }
}

export default [fork(watcher)];
