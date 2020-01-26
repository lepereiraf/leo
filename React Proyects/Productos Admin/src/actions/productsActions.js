import { createActions } from "reduxsauce";

const { Types, Creators } = createActions(
  {
    getProduct: null,
    setProduct: ["data"],
    addProduct: ["data"],
    delProduct: ["id"],
    editProduct: ["data", "id"]
  },
  {
    prefix: "PRODUCT/"
  }
);

const {
  getProduct,
  setProduct,
  addProduct,
  delProduct,
  editProduct
} = Creators;

const {
  GET_PRODUCT,
  SET_PRODUCT,
  ADD_PRODUCT,
  DEL_PRODUCT,
  EDIT_PRODUCT
} = Types;

export {
  getProduct,
  setProduct,
  addProduct,
  delProduct,
  editProduct,
  GET_PRODUCT,
  SET_PRODUCT,
  ADD_PRODUCT,
  DEL_PRODUCT,
  EDIT_PRODUCT
};
