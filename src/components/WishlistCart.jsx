import React from 'react'
import UseWishlist from '../context/UseWishlist'
import Card from './Card';
import { BsArrowLeft, BsHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function WishlistCart() {
  const { activeHeart } = UseWishlist();
  const navigate = useNavigate();
  return (
<div className='z-30 max-w-7xl mx-auto sm:px-6 md:px-4'>
      <div className="z-20 gap-6 py-26">
        <button
           className='flex items-center justify-center gap-3 mb-2 cursor-pointer px-8'
          onClick={() => navigate(-1)}><BsArrowLeft /> Continue Shopping</button>
        {
          activeHeart.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-6xl mb-4 flex items-center justify-center"><BsHeart /></div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your Wishlist is empty</h2>
              <p className="text-gray-600 mb-6">Looks like you haven't added any items to your wishlist yet.</p>
              <button
                onClick={() => navigate(`/products`)}
                className="px-6 py-3 bg-gradient-to-l to-green-300 from-green-600 text-white rounded hover:bg-green-700 font-medium cursor-pointer shadow-lg">
                Start Shopping
              </button>
            </div>  
          ) :
            (<Card
              products={activeHeart}
            />)}
      </div>
    </div>
  )
}
