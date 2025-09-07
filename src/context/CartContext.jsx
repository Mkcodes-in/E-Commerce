import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    console.log(cartItems)
    // add to cart logic
    const addToCart = (item) => {
        // check product already have in cart or not?

        const itemExists = cartItems.find(itm => itm.id === item.id);
        // if product have in cart do this 
        if (itemExists) {
            // return the new array who id equal to id and also include new property on it quantity. 

            const addItem = cartItems.map(itm => itm.id === item.id ? { ...itm, quantity: itm.quantity + 1 } : itm);
            setCartItems(addItem);
        }

        // else do this
        else {
            const newItem = [...cartItems, {...item, quantity: 1}];
            setCartItems(newItem);
        }
    }

    // remove item from cart
    const removeCartItem = (itemId) => {
        const updateCart = cartItems.filter(itm => itm.id !== itemId);
        setCartItems(updateCart);
    }

    const decreaseQuantity = (itemId) => {
        const updateItem = cartItems.map(itm => itm.id === itemId ? {...itm, quantity: itm.quantity - 1} : itm);
        const newUpdateItem = updateItem.filter(itm => itm.quantity > 0);
        setCartItems(newUpdateItem);
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeCartItem, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    )
}
