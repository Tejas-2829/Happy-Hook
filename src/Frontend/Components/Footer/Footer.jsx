import React from 'react'
import { Instagram } from 'lucide-react'
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';

function Footer() {
  return (
    <div id='footer' className='text-white'>
        <div className='p-6 lg:pl-16 md:pl-10 pl-20'>
            <h1 className='font-quicksand text-4xl font-bold'>Happy Hook</h1>
        </div>
        <div className='md:flex grid grid-cols-2 md:justify-around justify-center text-center gap-2 pb-4'>
            <div>
                <p className='text-lg font-bold'>Home</p>
                <p>Shop</p>
                <p>Blog</p>
            </div>
            <div>
                <p className='text-lg font-bold'>Explore</p>
                <p>Shop</p>
                <p>About</p>
            </div>
            <div>
                <p className='text-lg font-bold'>Support</p>
                <p>Contact Us</p>
                <p>Shipping</p>
            </div>
            <div>
                <p className='text-lg font-bold'>Support</p>
                <p>FAQ</p>
                <p>Returns</p>
            </div> 
            <div className='md:flex hidden gap-2 items-center'>
                <Instagram  className='cursor-pointer hover:scale-110'/>
                <Facebook  className='cursor-pointer hover:scale-110'/>
                <Twitter  className='cursor-pointer hover:scale-110'/>
            </div>         
        </div>
        <div className='md:hidden flex gap-2 justify-center items-center'>
                <Instagram  className='cursor-pointer hover:scale-110'/>
                <Facebook  className='cursor-pointer hover:scale-110'/>
                <Twitter  className='cursor-pointer hover:scale-110'/>
            </div>
        <div className='md:flex py-6'>
            <div className='flex gap-4 md:w-1/2 lg:pl-18 md:pl-10 md:justify-start justify-center '>
                <button id='footerbtn' className='px-4 py-1 bg-white font-inter rounded-full hover:bg-pink-600 hover:shadow-pink-500/50 hover:shadow-lg '>LOGIN</button><br />
                <button id='footerbtn' className='px-4 py-1 bg-white font-inter rounded-full hover:bg-pink-600 hover:shadow-pink-500/50 hover:shadow-lg '>SIGNUP</button>
            </div>
            <div className='md:items-center text-center mt-4 h-full md:w-1/2'>
                <p >@2025 Happy Hook. All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer