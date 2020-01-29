import { createActions } from "reduxsauce";

const { Types, Creators } = createActions(
  {
    getMovie: null,
    setMovie: ["data"],
    addMovie: ["data"],
    deleteMovie: ["id"],
    updateMovie: ["id", "data"]
  },
  {
    prefix: "MOVIES/"
  }
);

const { getMovie, setMovie, addMovie, deleteMovie, updateMovie } = Creators;

const { GET_MOVIE, SET_MOVIE, ADD_MOVIE, DELETE_MOVIE, UPDATE_MOVIE } = Types;

export {
  getMovie,
  setMovie,
  addMovie,
  GET_MOVIE,
  SET_MOVIE,
  ADD_MOVIE,
  deleteMovie,
  updateMovie,
  DELETE_MOVIE,
  UPDATE_MOVIE
};
