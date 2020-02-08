import { all } from "redux-saga/effects";
import search from "./search";

export default function* rootSaga() {
  //Aca son llamadas todas las sagas
  yield all([search()]); //search se debe pasar con (), ya que esta es una funcion xD
}
