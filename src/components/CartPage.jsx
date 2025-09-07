import React, { useState } from 'react'
import { UseCart } from '../context/UseCart'
import { BiMinus, BiPlus } from 'react-icons/bi';

export default function CartPage() {
    const { cartItems, decreaseQuantity, addToCart } = UseCart();

    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    {/* Header */}
                    <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-50 rounded-xl px-6 py-4 shadow-sm mb-4">
                        <div className="col-span-5 text-gray-600 font-medium">Product</div>
                        <div className="col-span-2 text-gray-600 font-medium text-center">Price</div>
                        <div className="col-span-3 text-gray-600 font-medium text-center">Quantity</div>
                        <div className="col-span-2 text-gray-600 font-medium text-center">Total</div>
                    </div>
                    {/* Cart Item */}
                    <div className=''>
                        {cartItems.map(item => (
                            <div key={item.id}>
                                <div className="md:col-span-5 flex items-center">
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="w-16 h-16 object-contain rounded-lg bg-gray-100 p-2"
                                    />
                                    <div className="ml-4">
                                        <h3 className="font-medium text-gray-900">{item.title}</h3>
                                        <p className="text-sm text-gray-500">{item.category}</p>
                                    </div>
                                
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                {/* total amount with discount btn  */}
            </div>
        </section>
    )
}

