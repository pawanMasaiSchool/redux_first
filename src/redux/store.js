import { reducer } from "./reducer";
import { createStore } from "redux";
import { increamentCounter } from "./action";

const initState = {
  count: 1
};

export const store = createStore(reducer, initState);

console.log(store.getState());

store.subscribe(() => {
  console.log(`something has changed`, store.getState());
});

const action = increamentCounter(1);

store.dispatch(action);

store.dispatch(action);

store.dispatch(action);
