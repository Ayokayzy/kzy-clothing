import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({toggle}) => {

    return (
        <div className='cart-icon-container' onClick={toggle}>
            <ShoppingIcon className='shoppiing-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon