import React, { useEffect, useRef, useState } from 'react'
import '../App.css'
import Logo from '../assets/Logo.png'
import NavItem from '../Data/NavItem'
import { NavLink, useNavigate } from 'react-router-dom'
import { BiHeart, BiSearch } from 'react-icons/bi'
import { CgShoppingCart } from 'react-icons/cg'
import { UseCart } from '../context/UseCart'

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const { cartItems } = UseCart();

  function handleRef() {
    searchRef.current.focus();
  }

  useEffect(() => {
    function hanldeScroll() {
      if (window.scrollY > 10) {
        setScroll(true);
      }
      else {
        setScroll(false)
      }
    }
    window.addEventListener("scroll", hanldeScroll)
    return () => { window.removeEventListener("scroll", hanldeScroll) }
  }, []);

  return (
    <nav className={`z-40 fixed top-0 w-full ${scroll ? "bg-gray-50 shadow-lg" : "bg-transparent"} px-12 transition-all ease-in duration-300`}>
      <div className='relative max-w-7xl mx-auto py-2 flex items-center justify-between'>

        {/* logo */}
        <div className='size-20 flex items-center'>
          <img className='' src={Logo} alt="logo" />
        </div>

        {/* navlinks */}
        <div className='flex items-center gap-4'>
          {NavItem.map((item) => (
            <div key={item}>
              <NavLink
                className={({ isActive }) => isActive ? "text-green-700 font-bold" : ""}
                to={`/${item}`}>{item}</NavLink>
            </div>
          ))}
        </div>

        {/* utilites */}
        <div className='relative flex items-center gap-4'>
          <div>
            <span onClick={handleRef} className='absolute cursor-pointer left-1 top-[3px] p-2 bg-green-900/80 rounded-full'><BiSearch size={18} color='white' /></span>
            <input ref={searchRef} className='bg-gray-400/20 rounded-full outline-none pl-12 px-2 py-2 focus:ring-3 focus:bg-transparent ring-gray-500/20 transition-all ease-in duration-300'
              placeholder='Search products...'
              type="text" />
          </div>

          {/* Heart Icon */}
          <button 
          onClick={() => navigate(`/favorite`)}
          className="relative inline-block cursor-pointer">
            <BiHeart size={24} />
            <span className="absolute -top-2 -right-2 bg-green-900/80 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">1
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

    </nav>
  )
}
