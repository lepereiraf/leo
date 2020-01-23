import { createActions } from "reduxsauce";

const { Types, Creators } = createActions(
  {
    getPerson: null,
    setPerson: ["data"],
    addPerson: ["data"],
    delPerson: ["id"],
    editPerson: ["data", "id"]
  },
  {
    prefix: "PERSON/"
  }
);

const { getPerson, setPerson, addPerson, delPerson, editPerson } = Creators;

const { GET_PERSON, SET_PERSON, ADD_PERSON, DEL_PERSON, EDIT_PERSON } = Types;

export {
  editPerson,
  delPerson,
  setPerson,
  getPerson,
  addPerson,
  GET_PERSON,
  SET_PERSON,
  ADD_PERSON,
  DEL_PERSON,
  EDIT_PERSON
};
