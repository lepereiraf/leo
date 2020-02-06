import { createReducer } from "reduxsauce";

import produce from "immer";

import { SET_NAME } from "../actions/storeActions";

const INITIAL_STATE = {
  apps: []
};

const setOneApps = produce((draft, { data }) => {
  draft.apps = data.map(e => e);
});

const reducer = createReducer(INITIAL_STATE, {
  [SET_NAME]: setOneApps
});

export default reducer;
