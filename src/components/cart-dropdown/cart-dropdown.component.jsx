import Button from '../button/button.component'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" />
            <Button buttonType="inverted" children="Checkout" />
        </div>
    )
}

export default CartDropdown