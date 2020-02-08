import { createActions } from "reduxsauce";

const { Types, Creators } = createActions(
  {
    getEjercicio: null,
    setEjercicio: ["data"],
    addEjercicio: ["data"]
  },
  {
    prefix: "EJERCICIOS/"
  }
);

const { getEjercicio, setEjercicio, addEjercicio } = Creators;

const { GET_EJERCICIO, SET_EJERCICIO, ADD_EJERCICIO } = Types;

export {
  setEjercicio,
  getEjercicio,
  addEjercicio,
  ADD_EJERCICIO,
  GET_EJERCICIO,
  SET_EJERCICIO
};
