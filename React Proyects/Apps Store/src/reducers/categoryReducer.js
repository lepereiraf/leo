import { createReducer } from "reduxsauce";

import produce from "immer";

import { SET_ONE_APP, SET_CATEGORY } from "../actions/storeActions";

const INITIAL_STATE = {
  apps: [],
  cat: []
};

const setOneApps = produce((draft, { data }) => {
  draft.apps = data.map(e => e);
});
const setCat = produce((draft, { data }) => {
  draft.cat = data.map(e => e);
});

const reducer = createReducer(INITIAL_STATE, {
  [SET_ONE_APP]: setOneApps,
  [SET_CATEGORY]: setCat
});

export default reducer;
