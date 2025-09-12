import React, { useContext } from 'react'
import { WishlistContext } from './WishlistContext'

export default function UseWishlist() {
  return useContext(WishlistContext)
}
