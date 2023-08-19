import { createContext, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.util";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }

    return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const clearCartItem = (cartItems, productToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartCount: 0,
    total: 0
});

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: "SET_CART_ITEMS",
    TOGGLE_CART_OPEN: "TOGGLE_CART_OPEN"
};


const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    total: 0
};

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            };
        case CART_ACTION_TYPES.TOGGLE_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            };
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
};


export const CartProvider = ({ children }) => {
    const [{ cartItems, isCartOpen, cartCount, total }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (cartItems) => {
        const newCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
        const newTotal = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
                cartItems: cartItems,
                cartCount: newCartCount,
                total: newTotal,
            })
        );
    };

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    };

    const removeItemFromCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove);
        updateCartItemsReducer(newCartItems);
    };

    const clearItemFromCart = (productToRemove) => {
        const newCartItems = clearCartItem(cartItems, productToRemove);
        updateCartItemsReducer(newCartItems);
    };

    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.TOGGLE_CART_OPEN, bool));
    };


    const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart, cartItems, cartCount, total };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
};
