import React from 'react'
import {NavLink} from "react-router-dom"
import SearchNav from './SearchNav'

const Navbar = () => {
  return (
    <>
    <div className='flex gap-5 w-full mx-auto p-5 bg-blackp items-center justify-between text-white  text-base font-medium sm:py-1 sm:ml-0'>
      <div className='border-gray-400 border-b flex gap-5 w-full  p-5 items-center justify-between mx-10 sm:mx-0'>
      <div className='flex gap-5 items-center '>
        <NavLink className="text-xl tracking-widest font-extrabold text-white sm:text-sm " to="/" >ECOMMERCE</NavLink>
        <SearchNav />
        
      </div>
      <div className='flex gap-5'>
        <NavLink className="hover:text-orange-400 font-normal relative nav_menu_option sm:hidden" to="/register">REGISTER</NavLink>
        <NavLink className="hover:text-orange-400 font-normal relative nav_menu_option sm:hidden" to="login">LOGIN</NavLink>
        <NavLink to="/cart">
        <svg
          className='ml-2 hover:fill-orange-400 cursor-pointer duration-300'
          fill="#fafafa"
          width={32}
          height={32}
          version="1.1"
          id="lni_lni-cart"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 64 64"
          style={{ enableBackground: "new 0 0 64 64" }}
          xmlSpace="preserve"
        >
          <g>
            <path
              d="M40.9,48.2c-3.9,0-7.1,3.3-7.1,7.3c0,4,3.2,7.3,7.1,7.3s7.1-3.3,7.1-7.3C48.1,51.5,44.9,48.2,40.9,48.2z M40.9,59.3
          c-2,0-3.6-1.7-3.6-3.8c0-2.1,1.6-3.8,3.6-3.8s3.6,1.7,3.6,3.8C44.6,57.6,42.9,59.3,40.9,59.3z"
            />
            <path
              d="M18.2,48.2c-3.9,0-7.1,3.3-7.1,7.3c0,4,3.2,7.3,7.1,7.3s7.1-3.3,7.1-7.3C25.4,51.5,22.2,48.2,18.2,48.2z M18.2,59.3
          c-2,0-3.6-1.7-3.6-3.8c0-2.1,1.6-3.8,3.6-3.8s3.6,1.7,3.6,3.8C21.9,57.6,20.2,59.3,18.2,59.3z"
            />
            <path
              d="M57.8,1.3h-6.4c-1.5,0-2.8,1.1-3,2.6l-1.8,13.2H7.3c-0.9,0-1.7,0.4-2.2,1.1c-0.5,0.7-0.7,1.6-0.5,2.4c0,0,0,0.1,0,0.1
          l6.1,18.9c0.3,1.2,1.4,2.1,2.8,2.1h29.5c2.2,0,4-1.6,4.3-3.8l4.6-33.2h6c1,0,1.8-0.8,1.8-1.8S58.8,1.3,57.8,1.3z M43.7,37.4
          c-0.1,0.4-0.4,0.8-0.9,0.8h-29L8.1,20.6h37.9L43.7,37.4z"
            />
          </g>
        </svg>
        </NavLink>

      </div>

      </div>
      
    </div>
    </>
  )
}

export default Navbar
