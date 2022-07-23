import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../context/cart.context";

import {
  CheckoutContaner,
  CheckoutHeader,
  HeaderBlock,
  Total
} from "./checkout.styles.jsx";

const Checkout = () => {
  const { cartItems, cartItemsTotal } = useContext(CartContext);

  return (
    <CheckoutContaner>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Discription</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((items) => (
        <CheckoutItem key={items.id} cartItem={items} />
      ))}
      <Total>Total: ${cartItemsTotal}</Total>
    </CheckoutContaner>
  );
};

export default Checkout;
