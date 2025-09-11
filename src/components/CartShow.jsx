import React from 'react'
import { UseCart } from '../context/UseCart';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import CartPage from './CartPage';

export default function CartShow() {
  const { cartItems } = UseCart();
  const navigate = useNavigate();
  return (
    <div className='z-30 max-w-7xl mx-auto px-8 sm:px-6 md:px-4'>
      <div className="z-20 gap-6 py-26">
        <button
          className='flex items-center justify-center gap-3 mb-2 cursor-pointer'
          onClick={() => navigate(-1)}><BsArrowLeft /> Continue Shopping</button>
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
            <button 
            onClick={() => navigate(`/products`)}
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium cursor-pointer">
              Start Shopping
            </button>
          </div>
        ) :
          (
           <CartPage />
          )}
      </div>
    </div>

  )
}