import React, { useEffect, useRef, useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { UseProduct } from '../context/UseProducts';
import { Link } from 'react-router-dom';

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
    console.log(findedProduct)

    return (
        <div className='relative'>
            {/* Search */}
            <form
                onSubmit={handleSumbit}
                className='hidden lg:block'>
                <span
                    onClick={handleRef}
                    className='absolute cursor-pointer left-1 top-[3px] p-2 bg-green-900/80 rounded-full'><BiSearch size={18} color='white' /></span>
                <input
                    ref={searchRef}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className='bg-gray-400/20 rounded-full outline-none pl-12 px-2 py-2 focus:ring-3 focus:bg-transparent ring-gray-500/20 transition-all ease-in duration-300'
                    placeholder='Search products...'
                    type="text" />
            </form>
            {/* Search Result Dropdown */}
            {searchValue && findedProduct.length > 0 && (
                <div className='absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md z-50 max-h-64 overflow-y-auto'>
                    {findedProduct.map((item) => (
                        <Link
                        to={`/product/${item.id}`}
                        key={item.id}
                        className='px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-start gap-2'>
                            <img
                            className='h-8 w-8 object-cover rounded' 
                            src={item.thumbnail} 
                            alt={item.title} />
                            <span>{item.title}</span>
                        </Link>
                    ))}
                </div>
            )}
            {/* Product not exist */}
            {searchValue && findedProduct.length === 0 && (
                <div className='absolute left-0 mt-2 z-50 rounded-md w-full px-4 py-2 bg-white shadow-lg text-gray-500'>
                    {findedProduct.length === 0 && (
                        <p>No Products Found ):</p>
                    )}
                </div>
            )}
        </div>
    )
}