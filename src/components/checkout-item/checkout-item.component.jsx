import { useDispatch, useSelector } from "react-redux";
import {
  removeItemsFromCart,
  addItemsToCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

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

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  function reduceCartQuantity() {
    dispatch(removeItemsFromCart(cartItem, cartItems));
  }

  function increaseCartQuantity() {
    dispatch(addItemsToCart(cartItem, cartItems));
  }

  function removeCartItem() {
    dispatch(clearItemFromCart(cartItem, cartItems));
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
