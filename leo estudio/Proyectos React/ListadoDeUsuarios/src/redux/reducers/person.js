import {
  GET_PERSON_START,
  GET_PERSON_START_ERROR,
  GET_PERSON_START_COMPLETE,
  DEL_PERSON
} from "../../const/actionTypes";

const initalState = {};

export default function(state = initalState, action) {
  switch (action.type) {
    case GET_PERSON_START:
      return { ...state };
    case GET_PERSON_START_ERROR:
      return { ...state };
    case GET_PERSON_START_COMPLETE:
      return { ...state, personResults: action.results.data };
    case DEL_PERSON:
      return { ...state, personResults: [] };

    default:
      return { ...state };
  }
}
