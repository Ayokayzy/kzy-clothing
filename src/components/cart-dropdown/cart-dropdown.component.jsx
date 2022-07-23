import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {CartDropdownComponent, EmptyMessage, CartItems} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownComponent>
      <EmptyMessage>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <CartItems>Your cart is empty</CartItems>
        )}
      </EmptyMessage>
      <Button children="Checkout" onClick={goToCheckoutHandler} />
    </CartDropdownComponent>
  );
};

export default CartDropdown;
