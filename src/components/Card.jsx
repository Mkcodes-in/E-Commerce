import React, { useContext, useState } from 'react';
import { BsEyeFill, BsHeart, BsHeartFill } from 'react-icons/bs';
import { TbLoader2 } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import UseWishlist from '../context/UseWishlist';

export default function Card({ products, loader }) {
    const { activeHeart, handleHeart } = UseWishlist();
    const navigate = useNavigate();

    return (
        <section className='z-30 max-w-7xl mx-auto px-8 sm:px-6 md:px-4'>
            {loader ? (<div className='grid h-screen place-content-center items-center'>
                <div className='flex flex-col items-center'>
                    <TbLoader2 className='animate-spin' size={28} stroke='green' />
                    <p className='text-gray-600 mt-2'>Loading Products...</p>
                </div>
            </div>)
                :
                (<div className="z-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-26">
                    {products.map((item) => (
                        <div
                            key={item.id}
                            className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                        >
                            {/* Favorite Button */}
                            <button
                                onClick={() => handleHeart(item)}
                                className={`absolute top-2 right-2 z-30 rounded-full backdrop-blur-sm transition-all duration-300 cursor-pointer p-2 ${activeHeart.find((i) => i.id === item.id)
                                    ? 'bg-red-500/20 text-red-600'
                                    : 'bg-white/70 text-gray-500 hover:bg-white'
                                    }`}>
                                {activeHeart.find(i => i.id === item.id) ? (
                                    <BsHeartFill size={18} className="text-red-500" />
                                ) : (
                                    <BsHeart size={18} />
                                )}
                            </button>
                            {/* Product Image */}
                            <div className='relative overflow-hidden h-56 bg-gray-100'>
                                <img
                                    src={item.thumbnail || item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform ease-in duration-500 group-hover:scale-105 cursor-pointer"
                                />
                                {/* Product Discount */}
                                {item.discountPercentage && (
                                    <span className='absolute top-2 left-2 text-sm bg-green-600 text-white py-1 px-2 rounded-full font-bold'>
                                        {item.discountPercentage} %OFF
                                    </span>
                                )}
                            </div>
                            {/* Product Info */}
                            <div className="p-4">
                                <h3
                                    onClick={() => navigate(`/product/${item.id}`)}
                                    className="text-lg font-semibold cursor-pointer line-clamp-1 hover:text-blue-600 transition-colors">{item.title}</h3>
                                <p className="text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-green-600 font-bold text-xl">₹{item.price}</span>
                                    <span className="text-yellow-500 font-semibold text-sm">
                                        ⭐ {item.rating}
                                    </span>
                                </div>
                                {/* Product Stock */}
                                {item.stock && (<div className='bg-gray-600/20 text-xs text-gray-600 inline-block py-1 px-2 rounded-full mb-3'>
                                    {item.stock} in stock
                                </div>)}
                                {/* Cart Button */}
                                <button
                                    onClick={() => navigate(`/product/${item.id}`)}
                                    className="w-full py-2.5 bg-blue-600 text-white rounded cursor-pointer transition-colors duration-500 px-4 hover:bg-blue-700 font-medium flex items-center justify-center gap-4">
                                    <BsEyeFill size={18} />
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>)}
        </section>
    )
}
