import { GET_PERSON_START, DEL_PERSON } from "../../const/actionTypes";

export const getPerson = payload => ({
  type: GET_PERSON_START,
  payload
});

export const delPerson = payload => ({
  type: DEL_PERSON,
  payload
});
