import React, { useState } from 'react'
import { UseCart } from '../context/UseCart'
import { BiMinus, BiPlus } from 'react-icons/bi';
import OrderSummary from './OrderSummary';

export default function CartPage() {
    const { cartItems, decreaseQuantity, addToCart } = UseCart();

    return (
        <section className='max-w-7xl mx-auto py-8 md:px-4'>
            <h1 className='text-3xl font-bold text-gray-900 mb-8'>Shopping Cart</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='lg:col-span-2'>
                    {/* Cart Header */}
                    <div className='hidden md:grid grid-cols-12 py-3 px-4 font-medium bg-gray-50 rounded-lg shadow-md mb-4'>
                        <div className='col-span-5'>Product</div>
                        <div className='col-span-2 text-center'>Price</div>
                        <div className='col-span-3 text-center'>Quantity</div>
                        <div className='col-span-2 text-center'>Total</div>
                    </div>
                    {/* Cart Items */}
                    <div className='space-y-4'>
                        {cartItems.map(item => (
                            <div
                                className='grid grid-cols-12 gap-4 items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100'
                                key={item.title}>
                                {/* Image with title and category */}
                                <div className='col-span-12 md:col-span-5 flex items-center'>
                                    <img
                                        className='p-2 h-16 w-16 object-contain bg-gray-100 rounded-lg'
                                        src={item.thumbnail}
                                        alt={item.title} />
                                    <div className='ml-4'>
                                        <h3 className='font-medium text-gray-900'>{item.title}</h3>
                                        <p className='text-sm text-gray-500 capitalize'>{item.category}</p>
                                    </div>
                                </div>
                                {/* Price */}
                                <div className='col-span-4 md:col-span-2 flex items-center justify-center md:justify-center'>
                                    {/* <span className='md:hidden text-gray-600 font-medium'>Price:</span> */}
                                    <span className='text-lg font-semibold text-green-600'>₹{item.price}</span>
                                </div>
                                {/* Quantity */}
                                <div className='col-span-4 md:col-span-3 flex items-center justify-center md:justify-center'>
                                    <div className='flex items-center gap-2'>
                                        {/* <span className='md:hidden text-gray-600 font-medium'>Qty:</span> */}
                                        <button
                                            onClick={() => decreaseQuantity(item.id)}
                                            className=' rounded-md  hover:text-gray-100 cursor-pointer'>
                                            <BiMinus className='h-4 w-4' />
                                        </button>
                                        <span className='px-2 font-medium'>
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => addToCart(item)}
                                            className=' rounded-md  hover:text-gray-100 cursor-pointer'>
                                            <BiPlus className='h-4 w-4' />
                                        </button>
                                    </div>
                                </div>
                                {/* Total */}
                                <div className='col-span-4 md:col-span-2 flex items-center justify-center md:justify-center'>
                                    {/* <span className='font-medium text-shadow-gray-400 md:hidden'>Total:</span> */}
                                    <span className='text-lg font-medium text-blue-600'>₹{(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Order Summary */}
                <OrderSummary
                cartItems={cartItems}
                />
            </div>
        </section>
    )
}

