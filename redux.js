import { legacy_createStore } from "redux";

// reducer
const cardReducer = (
  state = {
    cart: [{ id: 1, qty: 20 }],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// store
const store = legacy_createStore(cardReducer);
console.log("oncreate store : ", store.getState());

// subscribe
store.subscribe(() => {
  console.log("STORE CHANGED : ", store.getState());
});

// dispatch
const action1 = {
  type: "ADD_TO_CART",
  payload: { id: 2, qty: 20 },
};
store.dispatch(action1);

const action2 = {
  type: "ADD_TO_CART",
  payload: { id: 3, qty: 30 },
};
store.dispatch(action2);
