import { all, call, fork, putResolve, takeLatest } from "redux-saga/effects";
import { personAPI } from "../services";

import {
  GET_PERSON,
  EDIT_PERSON,
  ADD_PERSON,
  DEL_PERSON,
  setPerson
} from "../actions/personActions";

const {
  personService: { getPersons, postPersons, delPersons, putPersons }
} = personAPI;

function* fetchPerson() {
  try {
    const { ok, data } = yield call(getPersons);

    if (!ok) {
      console.log("error!");
      return;
    }

    yield putResolve(setPerson(data));
  } catch (error) {
    console.log(error);
  }
}

function* newPerson({ data }) {
  try {
    const { ok } = yield call(postPersons, data);

    if (!ok) {
      console.log("error en el post!");
    }
  } catch (error) {
    console.log(error);
  }
}

function* editPerson({ data, id }) {
  try {
    const { ok } = yield call(putPersons, data, id);

    if (!ok) {
      console.log("error en el put!");
    }
  } catch (error) {
    console.log(error);
  }
}

function* deletePerson({ id }) {
  try {
    const { ok } = yield call(delPersons, id);

    if (!ok) {
      console.log("error al eliminar");

      return;
    }
  } catch (error) {
    console.log(error);
  }
}

function* watcher() {
  try {
    yield all([takeLatest(GET_PERSON, fetchPerson)]);
    yield all([takeLatest(ADD_PERSON, newPerson)]);
    yield all([takeLatest(DEL_PERSON, deletePerson)]);

    yield all([takeLatest(EDIT_PERSON, editPerson)]);
  } catch (error) {
    console.log("error en el watcher!");
  }
}

export default [fork(watcher)];
