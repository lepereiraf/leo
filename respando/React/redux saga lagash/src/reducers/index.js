import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// import example from './example';
import ejercicio from './ejercicio';

function createRootReducer(history) {
  const router = connectRouter(history);
  const rootReducer = combineReducers({ ejercicio, router });

  return rootReducer;
}

export default createRootReducer;
