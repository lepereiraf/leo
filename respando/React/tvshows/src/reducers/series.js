import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { SET_SERIES, SET_SERIE_EDIT } from '../actions/series';

const INITIAL_STATE = {
  series: [],
  serieEdit: {
    index: -1,
    data: null
  }
};

const setSeries = produce((draft, { data }) => {
  draft.series = data.map(e => e);
});

const setSerieEdit = produce(({ serieEdit }, { index, data }) => {
  serieEdit.index = index;
  serieEdit.data = data;
});

const reducer = createReducer(INITIAL_STATE, {
  [SET_SERIES]: setSeries,
  [SET_SERIE_EDIT]: setSerieEdit
});

export default reducer;
