import { createStore } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialState = 0;
//reducer es una funcion que retorna el estado actual
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }

  return state;
};

//store es el 'almacenamiento del estado'
const store = createStore(counter);

store.subscribe(() => {
  console.log(store.getState());
});

//aciones

const increment = () => {
  return {
    type: INCREMENT
  };
};

const decrement = () => {
  return {
    type: DECREMENT
  };
};

//disparando acciones
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

store.dispatch(decrement());
store.dispatch(decrement());

export default store;
