import { useContext } from 'react';
import { useNavigate } from 'react-router';

import { CartContext } from '../../context/cart.context';

import Button from '../button/button.component';

import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate('/checkout');
    };

    return (
        <CartDropdownContainer>
            <CartItems></CartItems>
            {cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
            <Button onClick={goToCheckout}>CHECKOUT</Button>
        </CartDropdownContainer>
    )
};

export default CartDropdown;