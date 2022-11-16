import { createAction } from "../../utils/firebase/reducer.utils";
import { CART_ACTION_TYPE } from "./cart.types";

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

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, boolean);

export const addItemsToCart = (productToAdd, cartItems) => {
  const newCartItems = addCartItems(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPE.ADD_ITEM_TO_CART, newCartItems);
};

export const removeItemsFromCart = (productToRemove, cartItems) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPE.ADD_ITEM_TO_CART, newCartItems);
};

export const clearItemFromCart = (productToRemove, cartItems) => {
  const newCartItems = clearCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPE.ADD_ITEM_TO_CART, newCartItems);
};
