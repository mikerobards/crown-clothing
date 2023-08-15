import { CartItemContainer, CartItemImage, ItemDetailsContainer, ItemName, ItemPrice } from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={`${name}`} />
            <ItemDetailsContainer>
                <ItemName>{name}</ItemName>
                <ItemPrice>{quantity} X ${price}</ItemPrice>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
};

export default CartItem;