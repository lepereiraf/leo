import { all, call, fork, putResolve, takeLatest } from "redux-saga/effects";
import { personAPI } from "../services";

import {
  GET_PERSON,
  GET_ONE_PERSON,
  EDIT_PERSON,
  getPerson,
  ADD_PERSON,
  DEL_PERSON,
  setOnePerson,
  setPerson
} from "../actions/personActions";

console.log("entro a la saga!");
const {
  personService: {
    getPersons,
    postPersons,
    delPersons,
    getOnePersons,
    putPersons
  }
} = personAPI;

function* fetchPerson() {
  console.log("estoy en fetchperson");
  try {
    const { ok, data } = yield call(getPersons);
    console.log(data);

    if (!ok) {
      console.log("error!");
      return;
    }
    //debugger;
    yield putResolve(setPerson(data));
  } catch (error) {
    console.log(error);
  }
}

function* fetchOnePerson() {
  try {
    const { ok, data } = yield call(getOnePersons);
    console.log(data);

    if (!ok) {
      console.log("error!");
      return;
    }
    //debugger;
    yield putResolve(setOnePerson(data));
  } catch (error) {
    console.log(error);
  }
}

function* newPerson({ data }) {
  try {
    const { ok, data: dataResult } = yield call(postPersons, data);

    if (!ok) {
      console.log("error en el post!");
    }
  } catch (error) {
    console.log(error);
  }
}

function* editPerson({ data, id }) {
  try {
    const { ok, data: dataResult } = yield call(putPersons, data, id);

    if (!ok) {
      console.log("error en el put!");
    }
  } catch (error) {
    console.log(error);
  }
}

function* deletePerson({ id }) {
  //debugger;
  try {
    const { ok, data } = yield call(delPersons, id);

    if (!ok) {
      console.log("error al eliminar");
      //yield call(alert, "error");
      return;
    }

    console.log(ok);
    console.log(data);

    //yield call(fetchPerson);
  } catch (error) {
    console.log(error);
  }
}

function* watcher() {
  try {
    yield all([takeLatest(GET_PERSON, fetchPerson)]);
    yield all([takeLatest(ADD_PERSON, newPerson)]);
    yield all([takeLatest(DEL_PERSON, deletePerson)]);
    yield all([takeLatest(GET_ONE_PERSON, fetchOnePerson)]);
    yield all([takeLatest(EDIT_PERSON, editPerson)]);
  } catch (error) {
    console.log("error en el watcher!");
  }
}

export default [fork(watcher)];
