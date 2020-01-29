import {
  setMovie,
  GET_MOVIE,
  ADD_MOVIE,
  DELETE_MOVIE,
  UPDATE_MOVIE
} from "../actions/moviesAction";

import { movieAPI } from "../services";

import { takeLatest, all, call, fork, putResolve } from "redux-saga/effects";

const {
  moviesService: { getMovies, postMovies, delMovies, putMovies }
} = movieAPI;

function* fetchMovie() {
  try {
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
  try {
    const { ok } = yield call(postMovies, data);
    if (!ok) {
      console.log("error");
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

function* deleteMovie({ id }) {
  try {
    const { ok } = yield call(delMovies, id);
    if (!ok) {
      console.log("error");
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

function* edMovie({ id, data }) {
  try {
    const { ok } = yield call(putMovies, id, data);

    console.log(id);

    console.log(data);
    if (!ok) {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
}

function* watcher() {
  yield all([takeLatest(GET_MOVIE, fetchMovie)]);
  yield all([takeLatest(ADD_MOVIE, newMovie)]);
  yield all([takeLatest(DELETE_MOVIE, deleteMovie)]);
  yield all([takeLatest(UPDATE_MOVIE, edMovie)]);
}

export default [fork(watcher)];
