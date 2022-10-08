import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  RemoveButton,
  NamePrice,
  Quantity,
  Value,
  Arrow,
} from "./checkout-item.styles";

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
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <NamePrice>{name}</NamePrice>
      <Quantity>
        <Arrow onClick={reduceCartQuantity}> &#10094; </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increaseCartQuantity}> &#10095; </Arrow>
      </Quantity>
      <NamePrice>{price * quantity}</NamePrice>
      <RemoveButton onClick={removeCartItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
