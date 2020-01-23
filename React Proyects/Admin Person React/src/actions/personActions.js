import { createActions } from "reduxsauce";

const { Types, Creators } = createActions(
  {
    getPerson: null,
    getOnePerson: null,
    setPerson: ["data"],
    addPerson: ["data"],
    delPerson: ["id"],
    setOnePerson: ["data, id"],
    editPerson: ["data", "id"]
  },
  {
    prefix: "PERSON/"
  }
);

const {
  getPerson,
  setPerson,
  addPerson,
  delPerson,
  editPerson,
  setOnePerson,
  getOnePerson
} = Creators;

const {
  GET_PERSON,
  SET_PERSON,
  ADD_PERSON,
  DEL_PERSON,
  EDIT_PERSON,
  SET_ONE_PERSON,
  GET_ONE_PERSON
} = Types;

export {
  getOnePerson,
  editPerson,
  setOnePerson,
  delPerson,
  setPerson,
  getPerson,
  addPerson,
  GET_PERSON,
  SET_PERSON,
  ADD_PERSON,
  DEL_PERSON,
  SET_ONE_PERSON,
  EDIT_PERSON,
  GET_ONE_PERSON
};
