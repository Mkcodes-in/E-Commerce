import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();
export default function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const Base_Url = "https://dummyjson.com/products";
        async function fetchData() {
            setLoader(true);
            try {
                const { data } = await axios.get(Base_Url);
                setProducts(data.products);
            } catch (error) {
                console.error("Error: ", error);
            } finally {
                setLoader(false);
            }
        }
        fetchData();
    }, []);

    return (
        <ProductContext.Provider value={{ products, loader }}>
            {children}
        </ProductContext.Provider>
    )
}
