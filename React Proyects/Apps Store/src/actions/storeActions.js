import { createActions } from "reduxsauce";

const { Types, Creators } = createActions(
  {
    getApp: null,
    setApp: ["data"],
    addApp: ["data"],
    getOneApp: ["category"],
    setOneApp: ["data"],
    setCategory: ["data"],
    editApp: ["name", "data"],
    getName: ["name"],
    setName: ["data"]
  },
  {
    prefix: "APP/"
  }
);

const {
  getApp,
  setApp,
  addApp,
  getOneApp,
  setOneApp,
  setCategory,
  editApp,
  getName,
  setName
} = Creators;

const {
  GET_APP,
  SET_APP,
  ADD_APP,
  GET_ONE_APP,
  SET_ONE_APP,
  SET_CATEGORY,
  EDIT_APP,
  GET_NAME,
  SET_NAME
} = Types;

export {
  getApp,
  setApp,
  addApp,
  getOneApp,
  setOneApp,
  setCategory,
  editApp,
  getName,
  setName,
  GET_APP,
  SET_APP,
  ADD_APP,
  GET_ONE_APP,
  SET_ONE_APP,
  SET_CATEGORY,
  EDIT_APP,
  GET_NAME,
  SET_NAME
};
