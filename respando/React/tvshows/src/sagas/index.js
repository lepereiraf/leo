import { all } from 'redux-saga/effects';

import tvShow from './tv-show';

function* root() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([...tvShow]);
  } catch (err) {
    throw err;
  }
}

export default root;
