import React, { createContext, useState } from 'react'

export const WishlistContext = createContext();

export default function WishlistProvider({ children }) {
    const [activeHeart, setActiveHeart] = useState([]);
    console.log(activeHeart)
    function handleHeart(item) {
        const existItem = activeHeart.find(itm => itm.id === item.id);

        // remove wishlist 
        if (existItem) {
            const removeItem = activeHeart.filter(itm => itm.id !== item.id);
            setActiveHeart(removeItem);
        }
        // add wishlist
        else {
            setActiveHeart([...activeHeart, item]);
        }
    }

    return (
        <WishlistContext.Provider value={{ handleHeart, activeHeart }}>
            {children}
        </WishlistContext.Provider>
    )
}
