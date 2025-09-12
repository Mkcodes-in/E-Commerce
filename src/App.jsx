import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductDetails from './components/ProductDetails'
import ErrorPage from './pages/ErrorPage'
import Category from './pages/Category'
import CategoryFetch from './components/CategoryFetch'
import CartShow from './components/CartShow'
import FavoriteItem from './components/WishlistCart'
import CategoryDetails from './components/CategoryDetails'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/Categories' element={<Category />}/>
        <Route path='/Categories/:category' element={<CategoryFetch />}/>
        <Route path='/Categories/:category/:id' element={<CategoryDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<CartShow />}/>
        <Route path='/favorite' element={<FavoriteItem />} />
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </div>
  ) 
}
