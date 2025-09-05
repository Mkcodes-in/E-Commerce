import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    // add to cart logic
    const addToCart = (item) => {
        const addItem = [...cartItems, item];
        setCartItems(addItem);
    }

    // remove item from cart
    const removeCartItem = (itemId) => {
        const updateCart = cartItems.filter(itm => itm.id !== itemId);
        setCartItems(updateCart);
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeCartItem }}>
            {children}
        </CartContext.Provider>
    )
}
