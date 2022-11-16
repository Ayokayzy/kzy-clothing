import { CART_ACTION_TYPE } from "./cart.types";

// define initial state
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

// define reducer
export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    case CART_ACTION_TYPE.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: payload,
      };

    default:
      return state;
  }
};
