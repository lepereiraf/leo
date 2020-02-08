import { all } from 'redux-saga/effects';

function* root() {
  try {
    yield all([]);
  } catch (error) {
    console.log(error);
  }
}

export default root;
