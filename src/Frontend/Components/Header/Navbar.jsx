import React from 'react'
import logo from '../assets/HH_Logo.jpg'
import {Link , NavLink} from 'react-router-dom'
import { Menu, X } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { CircleUser } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    
        const toggleNavbar = () => {
            setMobileDrawerOpen(!mobileDrawerOpen)
        }

  return (
    <>
    <div>
       <div  className='flex shadow-lg z-50 justify-between bg-gray-100 md:p-2 text-center fixed w-full md:backdrop-blur-none backdrop-blur-5xl'>
            <div className='w-15 ml-4 '>
                <img src={logo} alt="" className='w-fit rounded-full' />
            </div>
            <div className='flex backdrop-blur-xl md:px-6 rounded-full '>
            
                <ul id='nav-items' className='hidden w-120 md:flex justify-between items-center text-white'>

                    <li>
                    <NavLink
                        to="/"
                        className={({isActive}) =>
                        `  duration-200 ${isActive ? "text-white text-lg bg-black px-4 py-1" : "text-black"} cursor-pointer hover:bg-black rounded-full px-4 py-1 hover:text-lg hover:text-white`
                        }>
                        Home
                        </NavLink>
                        </li>
                    <li>
                    <NavLink
                        to="/shop"
                        className={({isActive}) =>
                        `  duration-200 ${isActive ? "text-white text-lg bg-black px-4 py-1" : "text-black"} cursor-pointer hover:bg-black rounded-full px-4 py-1 hover:text-lg hover:text-white`
                        }>
                        Shop
                        </NavLink>
                        </li>
                    <li>
                    <NavLink
                        to="/about"
                        className={({isActive}) =>
                        `duration-200 ${isActive ? "text-white text-lg bg-black px-2 py-1 rounded-full" : "text-black"} cursor-pointer hover:bg-black rounded-full px-4 py-1 hover:text-lg hover:text-white`
                        }>
                        About Us
                        </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/contact"
                        className={({isActive}) =>
                        `  duration-200 ${isActive ? "text-white text-lg bg-black px-2 py-1 rounded-full" : "text-black"} cursor-pointer hover:bg-black rounded-full px-4 py-1 hover:text-lg hover:text-white`
                        }>
                        Contact Us
                        </NavLink>
                    </li>
                </ul>
               
            </div>
            <div className='hidden md:flex px-6 py-4'>
                    {/* <button id='navbtn' className='bg-white px-2 md:px-2 py-1 mx-2 rounded-lg cursor-pointer hover:bg-black hover:text-white'>
                    <ShoppingCart size={20} className='inline-block mr-2 mb-1' />
                    Cart
                    </button><br /> */}
                 <button id='navbtn' className='bg-white px-2 md:px-4 py-1 rounded-full cursor-pointer hover:bg-black hover:text-white'>
                    <CircleUser size={20} className='inline-block mr-2 mb-1' />
                    Sign In
                 </button>
                </div>
            {mobileDrawerOpen ? 
            <X className='md:hidden mr-4 mt-4 ease-in-out duration-500' size={30} color='white' onClick={toggleNavbar}/> : <Menu className='md:hidden mr-4 mt-4 ease-in-out duration-500' size={30} color='white' onClick={toggleNavbar}/>}
            {mobileDrawerOpen && (
                <div className='flex flex-col justify-center items-center text-black bg-gray-100 w-full fixed top-15  left-0'>
                    <ul className='flex flex-col justify-between items-center pt-4 gap-5 text-black '>
                        <li>
                    <NavLink
                        to="/"
                        className={({isActive}) =>
                        ` duration-200 ${isActive ? "text-white text-lg bg-black px-4 py-1" : "text-black"} cursor-pointer hover:bg-black rounded-full px-4 py-1 hover:text-lg hover:text-white`
                        }>
                        Home
                        </NavLink>
                        </li>
                        <li>
                    <NavLink
                        to="/shop"
                        className={({isActive}) =>
                        `  duration-200 ${isActive ? "text-white text-lg bg-black px-4 py-1" : "text-black"} cursor-pointer hover:bg-black rounded-full px-4 py-1 hover:text-lg hover:text-white`
                        }>
                        Shop
                        </NavLink>
                        </li>
                        <li>
                    <NavLink
                        to="/about"
                        className={({isActive}) =>
                        `duration-200 ${isActive ? "text-white text-lg bg-black px-2 py-1 rounded-full" : "text-black"} cursor-pointer hover:bg-black rounded-full px-4 py-1 hover:text-lg hover:text-white`
                        }>
                        About Us
                        </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/contact"
                        className={({isActive}) =>
                        `  duration-200 ${isActive ? "text-white text-lg bg-black px-2 py-1 rounded-full" : "text-black"} cursor-pointer hover:bg-black rounded-full px-4 py-1 hover:text-lg hover:text-white`
                        }>
                        Contact Us
                        </NavLink>
                    </li>
                    </ul>
                    <div className='px-6 py-4'>
                        {/* <button id='navbtn' className='bg-black text-white px-4 py-1 mx-2 rounded-lg cursor-pointer hover:bg-black hover:text-white my-2'>
                        <ShoppingCart size={20} className='inline-block mr-2 mb-1' />
                        Cart
                        </button><br /> */}
                    <button id='navbtn' className='bg-black text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-black hover:text-white my-2'>
                        <CircleUser size={20} className='inline-block mr-2 mb-1' />
                        Sign In
                    </button>
                    </div>
                </div>
            )}
       </div>
       </div>
    </>
  )
}

export default Navbar