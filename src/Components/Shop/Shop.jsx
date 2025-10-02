import React from 'react'
import { Search } from 'lucide-react';
import product1 from '../assets/HHp1.jpeg'
import product2 from '../assets/HHp2.jpeg'
import product3 from '../assets/HHp3.jpeg'
import product4 from '../assets/HHp4.jpeg'
import product5 from '../assets/HHp5.jpeg'
import product6 from '../assets/HHp6.jpeg'
import Herosection from '../Home/Herosection'

function Shop() {
  return (
    <>
    {/* <Herosection /> */}
    <div className='bg-gray-100 pb-8 pt-18'>
        <div id='shop' className=' pt-2  mb-10'>
            <div id='shop' className='pt-10 pb-1 text-center'>
                <h1 id='shop-header' className='md:text-5xl text-4xl text-white'>Handmade Just For You</h1><br />
                <form action="">
                    <div className='flex relative justify-center '>
                        <input type="text" 
                        placeholder='Search handmade treasures...' 
                        className='rounded-l-full py-2 px-3 md:w-80 w-60 border-none focus:outline-none ' id='shop-btn'/>
                        <button className='text-gray-600 bg-white pr-4 rounded-r-full'>
                            <Search />
                        </button>
                    </div>                
                </form>           
            </div>
            <ul className='md:flex hidden pt-6 mt-8 gap-2 lg:pl-10 md:w-150 lg:justify-start md:justify-around md:px-15'>
                <li className='bg-gray-100 text-slate-700 text-center py-2 px-4 rounded-tr-lg rounded-tl-lg cursor-pointer hover:bg-pink-600 hover:shadow-pink-500/50 hover:shadow-lg hover:text-white'>All Products</li>
                <li className='bg-gray-100 text-slate-700 text-center py-2 px-4 rounded-tr-lg rounded-tl-lg cursor-pointer hover:bg-pink-600 hover:shadow-pink-500/50 hover:shadow-lg hover:text-white'>Plushies</li>
                <li className='bg-gray-100 text-slate-700 text-center py-2 px-4 rounded-tr-lg rounded-tl-lg cursor-pointer hover:bg-pink-600 hover:shadow-pink-500/50 hover:shadow-lg hover:text-white'>Home Decor</li>  
                <li className='bg-gray-100 text-slate-700 text-center py-2 px-4 rounded-tr-lg rounded-tl-lg cursor-pointer hover:bg-pink-600 hover:shadow-pink-500/50 hover:shadow-lg hover:text-white'>Accessories</li>
            </ul>
        </div>

        <div  className='lg:px-10 md:px-6 px-4 '>
            <div className='grid lg:grid-cols-4 lg:gap-6 md:grid-cols-3 md:gap-4 grid-cols-2 gap-3 place-content-center '>
                <div id='newarive' className=' md:p-6 p-4 text-center rounded-lg'>
                    <img src={product1} alt="this is my img" className='hover:scale-105 duration-300 h-45 md:h-70 w-full rounded-lg' />
                    <p className='my-2'>price</p>
                    <button className='bg-white text-black py-2 px-4 rounded-lg hover:bg-pink-400 hover:text-white hover:shadow-pink-500/50 hover:shadow-lg hover:ease-in-out duration-200 cursor-pointer'>Shop Now</button>
                </div>
                <div id='newarive' className=' md:p-6 p-4 text-center rounded-lg'>
                    <img src={product2} alt="this is my img" className='hover:scale-105 duration-300 h-45 md:h-70 w-full rounded-lg' />
                    <p className='my-2'>price</p>
                    <button className='bg-white text-black py-2 px-4 rounded-lg hover:bg-pink-400 hover:text-white hover:shadow-pink-500/50 hover:shadow-lg hover:ease-in-out duration-200 cursor-pointer'>Shop Now</button>
                </div>
                <div id='newarive' className='md:p-6 p-4 text-center rounded-lg'>
                    <img src={product3} alt="this is my img" className='hover:scale-105 duration-300 h-45 md:h-70 w-full rounded-lg' />
                    <p className='my-2'>price</p>
                    <button className='bg-white text-black py-2 px-4 rounded-lg hover:bg-pink-400 hover:text-white hover:shadow-pink-500/50 hover:shadow-lg hover:ease-in-out duration-200 cursor-pointer'>Shop Now</button>
                </div>
                <div id='newarive' className='md:p-6 p-4 text-center rounded-lg'>
                    <img src={product4} alt="this is my img" className='hover:scale-105 duration-300 h-45 md:h-70 w-full rounded-lg' />
                    <p className='my-2'>price</p>
                    <button className='bg-white text-black py-2 px-4 rounded-lg hover:bg-pink-400 hover:text-white hover:shadow-pink-500/50 hover:shadow-lg hover:ease-in-out duration-200 cursor-pointer'>Shop Now</button>
                </div>
                <div id='newarive' className='md:p-6 p-4 text-center rounded-lg'>
                    <img src={product5} alt="this is my img" className='hover:scale-105 duration-300 h-45 md:h-70 w-full rounded-lg' />
                    <p className='my-2'>price</p>
                    <button className='bg-white text-black py-2 px-4 rounded-lg hover:bg-pink-400 hover:text-white hover:shadow-pink-500/50 hover:shadow-lg hover:ease-in-out duration-200 cursor-pointer'>Shop Now</button>
                </div>
                <div id='newarive' className='md:p-6 p-4 text-center rounded-lg'>
                    <img src={product6} alt="this is my img" className='hover:scale-105 duration-300 h-45 md:h-70 w-full rounded-lg' />
                    <p className='my-2'>price</p>
                    <button className='bg-white text-black py-2 px-4 rounded-lg hover:bg-pink-400 hover:text-white hover:shadow-pink-500/50 hover:shadow-lg hover:ease-in-out duration-200 cursor-pointer'>Shop Now</button>
                </div>
                <div id='newarive' className='md:p-6 p-4 text-center rounded-lg'>
                    <img src={product6} alt="this is my img" className='hover:scale-105 duration-300 h-45 md:h-70 w-full rounded-lg' />
                    <p className='my-2'>price</p>
                    <button className='bg-white text-black py-2 px-4 rounded-lg hover:bg-pink-400 hover:text-white hover:shadow-pink-500/50 hover:shadow-lg hover:ease-in-out duration-200 cursor-pointer'>Shop Now</button>
                </div>
                <div id='newarive' className='md:p-6 p-4 text-center rounded-lg'>
                    <img src={product6} alt="this is my img" className='hover:scale-105 duration-300 h-45 md:h-70 w-full rounded-lg' />
                    <p className='my-2'>price</p>
                    <button className='bg-white text-black py-2 px-4 rounded-lg hover:bg-pink-400 hover:text-white hover:shadow-pink-500/50 hover:shadow-lg hover:ease-in-out duration-200 cursor-pointer'>Shop Now</button>
                </div>
            </div>
        </div> 
    </div>
    </>
  )
}

export default Shop