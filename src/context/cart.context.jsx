import { useReducer } from "react";
import { createContext } from "react";
import { createAction } from "../utils/firebase/reducer.utils";

const addCartItems = (cartItems, productToAdd) => {
  const cartItemExists = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (cartItemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  if (productToRemove.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.quantity > 1);
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const clearCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  cartItemsQuantity: 0,
  cartItemsTotal: 0,
});

// define action types
const CART_ACTION_TYPE = {
  TOGGLE_IS_CART_OPEN: "TOGGLE_IS_CART_OPEN",
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
};

// define initial state
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartItemsQuantity: 0,
  cartItemsTotal: 0,
};

// define reducer
const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.TOGGLE_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    case CART_ACTION_TYPE.ADD_ITEM_TO_CART:
      return {
        ...state,
        ...payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export const CartProvider = ({ children }) => {
  const [
    { isCartOpen, cartItems, cartItemsQuantity, cartItemsTotal },
    dispatch,
  ] = useReducer(cartReducer, INITIAL_STATE);

  const setIsCartOpen = (boolean) =>
    dispatch(createAction(CART_ACTION_TYPE.TOGGLE_IS_CART_OPEN, boolean));

  const updateCartItemReducer = (newCartItems) => {
    const newCartItemsQuantity = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartItemsTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch({
      type: CART_ACTION_TYPE.ADD_ITEM_TO_CART,
      payload: {
        cartItems: newCartItems,
        cartItemsQuantity: newCartItemsQuantity,
        cartItemsTotal: newCartItemsTotal,
      },
    });
  };

  const addItemsToCart = (productToAdd) => {
    const newCartItems = addCartItems(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };

  const removeItemsFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemReducer(newCartItems);
  };

  const clearItemFromCart = (productToRemove) => {
    const newCartItems = clearCartItem(cartItems, productToRemove);
    updateCartItemReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemsToCart,
    cartItemsQuantity,
    cartItemsTotal,
    removeItemsFromCart,
    clearItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
