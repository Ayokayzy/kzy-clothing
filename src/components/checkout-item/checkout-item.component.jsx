import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { removeItemsFromCart, addItemsToCart, clearItemFromCart } =
    useContext(CartContext);

  function reduceCartQuantity() {
    removeItemsFromCart(cartItem);
  }

  function increaseCartQuantity() {
    addItemsToCart(cartItem);
  }

  function removeCartItem() {
    clearItemFromCart(cartItem);
  }

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={reduceCartQuantity}>
          {" "}
          &#10094;{" "}
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={increaseCartQuantity}>
          {" "}
          &#10095;{" "}
        </span>
      </span>
      <span className="price">{price * quantity}</span>
      <span className="remove-button" onClick={removeCartItem}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
