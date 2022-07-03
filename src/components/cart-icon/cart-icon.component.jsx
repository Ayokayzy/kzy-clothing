import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/cart.context'

import './cart-icon.styles.scss'

const CartIcon = ({toggle}) => {

    const {cartItemsQuantity} = useContext(CartContext)

    return (
        <div className='cart-icon-container' onClick={toggle}>
            <ShoppingIcon className='shoppiing-icon' />
            <span className='item-count'>{cartItemsQuantity}</span>
        </div>
    )
}

export default CartIcon