import React, { useEffect, useRef, useState } from 'react'
import '../App.css'
import Logo from '../assets/Logo.png'
import NavItem from '../Data/NavItem'
import { NavLink, useNavigate } from 'react-router-dom'
import { BiHeart, BiSearch } from 'react-icons/bi'
import { CgClose, CgShoppingCart } from 'react-icons/cg'
import { UseCart } from '../context/UseCart'
import MobileBar from './MobileBar'
import UseWishlist from '../context/UseWishlist'
import SearchProduct from './SearchProduct'

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const { activeHeart } = UseWishlist();
  const { cartItems } = UseCart();

  function handleSearch() {
    setShowSearch(!showSearch);
  }
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10) {
        setScroll(true);
      }
      else {
        setScroll(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => { window.removeEventListener("scroll", handleScroll) }
  }, []);

  return (
    <nav className={`z-40 fixed top-0 w-full ${scroll ? "bg-gray-50 shadow-lg" : "bg-transparent"} px-4 md:px-10 lg:12 transition-all ease-in duration-300`}>
      <div className='relative max-w-7xl mx-auto py-2 flex items-center justify-between'>

        {/* logo */}
        <div className='z-99 sm:z-[999] size-20 flex items-center'>
          <img className='' src={Logo} alt="logo" />
        </div>

        {/* navlinks */}
        <div className='hidden sm:flex items-center gap-4'>
          {NavItem.map((item) => (
            <div key={item.name}>
              <NavLink
                className={({ isActive }) => isActive ? "text-green-700 font-bold" : ""}
                to={`/${item.name}`}>{item.name}</NavLink>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className='relative flex items-center gap-4'>

          <div className='hidden lg:block'>
            <SearchProduct
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>

          {/* Search Icon */}
          <button
            onClick={handleSearch}
            className='flex lg:hidden cursor-pointer'>
            <BiSearch size={24} />
          </button>

          {showSearch && (
            <div className='fixed inset-0 z-[99] bg-white h-[13vh] '>
              <div className='flex items-center gap-4 justify-center sm:justify-end p-7'>
                <SearchProduct
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
              <button 
              className='cursor-pointer'
              onClick={() => setShowSearch(false)}><CgClose size={18}/></button>
              </div>
            </div>
          )}


          {/* Wishlist Icon */}
          <button
            onClick={() => navigate(`/favorite`)}
            className="relative inline-block cursor-pointer">
            <BiHeart size={24} />
            <span className="absolute -top-2 -right-2 bg-green-900/80 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{activeHeart.length}
            </span>
          </button>

          {/* Cart Icon */}
          <button
            onClick={() => navigate(`/cart`)}
            className='relative inline-block cursor-pointer'
          >
            <CgShoppingCart size={24} />
            <span className='absolute h-5 w-5 bg-green-900/80 rounded-full text-white text-xs flex items-center justify-center -top-2 -right-2'>{cartItems.length}</span>
          </button>
        </div>
      </div>
      {/* Mobile Navbar */}
      <MobileBar NavItem={NavItem} />
    </nav>
  )
}
