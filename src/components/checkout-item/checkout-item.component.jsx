import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import {
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    ItemQuantity,
    Arrow,
    Value,
    RemoveButton
} from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {
    const { name, quantity, price, imageUrl } = cartItem;
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    const clearItemHandler = () => { clearItemFromCart(cartItem) };
    const addItemHandler = () => { addItemToCart(cartItem) };
    const removeItemHandler = () => { removeItemFromCart(cartItem) };

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <ItemQuantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </ItemQuantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>

    )
};

export default CheckoutItem;