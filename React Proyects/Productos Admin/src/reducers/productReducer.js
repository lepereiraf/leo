import { createReducer } from "reduxsauce";

import produce from "immer";

import { SET_PRODUCT } from "../actions/productsActions";

const INITIAL_STATE = {
  productos: []
};

const setProductos = produce((draft, { data }) => {
  draft.productos = data.map(e => e);
});

const reducer = createReducer(INITIAL_STATE, {
  [SET_PRODUCT]: setProductos
});

export default reducer;
