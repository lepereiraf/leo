import { createActions } from "reduxsauce";

const { Types, Creators } = createActions(
  {
    getMovie: null,
    setMovie: ["data"],
    addMovie: ["data"]
  },
  {
    prefix: "MOVIE/"
  }
);

const { getMovie, setMovie, addMovie } = Creators;

const { GET_MOVIE, SET_MOVIE, ADD_MOVIE } = Types;

export { getMovie, setMovie, addMovie, GET_MOVIE, SET_MOVIE, ADD_MOVIE };
