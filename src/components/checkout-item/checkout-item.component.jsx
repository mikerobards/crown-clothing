import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import {
    CheckoutItemContainer,
    ImageContainer,
    ItemImage,
    ItemName,
    ItemQuantity,
    ItemPrice,
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
                <ItemImage src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <ItemName className='name'>{name}</ItemName>
            <ItemQuantity className='quantity'>
                <Arrow className='arrow' onClick={removeItemHandler}>&#10094;</Arrow>
                <Value className='value'>{quantity}</Value>
                <Arrow className='arrow' onClick={addItemHandler}>&#10095;</Arrow>
            </ItemQuantity>
            <ItemPrice className='price'>{price}</ItemPrice>
            <RemoveButton className='remove-button' onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>

    )
};

export default CheckoutItem;