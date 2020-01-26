import { all, call, fork, putResolve, takeLatest } from "redux-saga/effects";

import { productAPI } from "../services";

import {
  GET_PRODUCT,
  ADD_PRODUCT,
  DEL_PRODUCT,
  setProduct,
  EDIT_PRODUCT
} from "../actions/productsActions";

const {
  productService: { getProducts, delProducts, postProducts, putProducts }
} = productAPI;

function* fetchProduct() {
  try {
    const { ok, data } = yield call(getProducts);

    if (!ok) {
      console.log("error!");
      return;
    }

    yield putResolve(setProduct(data));
  } catch (error) {
    console.log(error);
  }
}

function* newProduct({ data }) {
  try {
    const { ok } = yield call(postProducts, data);
    if (!ok) {
      console.log("error en el post");
    }
  } catch (error) {
    console.log(error);
  }
}

function* deleteProduct({ id }) {
  try {
    const { ok } = yield call(delProducts, id);
    if (!ok) {
      console.log("error en el delete");
    }
  } catch (error) {
    console.log(error);
  }
}

function* updateProduct({ data, id }) {
  try {
    const { ok } = yield call(putProducts, id, data);
    if (!ok) {
      console.log("error en el put");
    }
  } catch (error) {
    console.log(error);
  }
}

function* watcher() {
  try {
    yield all([takeLatest(GET_PRODUCT, fetchProduct)]);
    yield all([takeLatest(ADD_PRODUCT, newProduct)]);
    yield all([takeLatest(DEL_PRODUCT, deleteProduct)]);
    yield all([takeLatest(EDIT_PRODUCT, updateProduct)]);
  } catch (error) {
    console.log("error en el watcher");
  }
}

export default [fork(watcher)];
