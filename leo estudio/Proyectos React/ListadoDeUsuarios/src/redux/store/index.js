//configuracion de la store

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware, { runSaga } from "redux-saga";

import rootReducer from "../reducers"; //importamos nuesros reducers
import rootSaga from "../sagas"; //importamortamos nuestras sagas

const configureStore = () => {
  const SagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(rootReducer, applyMiddleware(SagaMiddleware)),
    runSaga: SagaMiddleware.run(rootSaga)
  };
};

export default configureStore;
