import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCardContainer,
  Image,
  Footer,
  Name,
  Price,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const { name, price, imageUrl } = product;

  const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => {
    dispatch(addItemsToCart(product, cartItems));
  };

  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        children="add to cart"
        onClick={addProductToCart}
      />
    </ProductCardContainer>
  );
};

export default ProductCard;
