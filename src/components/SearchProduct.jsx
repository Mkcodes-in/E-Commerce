import React, { useEffect, useRef, useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { UseProduct } from '../context/UseProducts';

export default function SearchProduct({ searchValue, setSearchValue }) {
    
    const { products } = UseProduct();
    const searchRef = useRef(null);
    const [findedProduct, setFindedProduct] = useState([]);

    function handleRef() {
        searchRef.current.focus();
    }

    function handleSumbit(e) {
        e.preventDefault();
    }

    useEffect(() => {
        const searchDebounce = setTimeout(() => {
            function SearchProduct(searchValue) {
                const realProduct = products.filter(itm => itm.title.toLowerCase().includes(searchValue.toLowerCase()));
                setFindedProduct(realProduct);
            }
            SearchProduct(searchValue);
        }, 1000);

        return () => clearTimeout(searchDebounce);
    }, [searchValue, products]);

    return (
        <form
            onSubmit={handleSumbit}
            className='hidden lg:block'>
            <span onClick={handleRef} className='absolute cursor-pointer left-1 top-[3px] p-2 bg-green-900/80 rounded-full'><BiSearch size={18} color='white' /></span>
            <input
                ref={searchRef}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className='bg-gray-400/20 rounded-full outline-none pl-12 px-2 py-2 focus:ring-3 focus:bg-transparent ring-gray-500/20 transition-all ease-in duration-300'
                placeholder='Search products...'
                type="text" />
        </form>
    )
}
