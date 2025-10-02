import React from 'react'
import product1 from '../assets/HHp1.jpeg'
import product2 from '../assets/HHp2.jpeg'
import product3 from '../assets/HHp3.jpeg'
import product4 from '../assets/HHp4.jpeg'
import product5 from '../assets/HHp5.jpeg'
import product6 from '../assets/HHp6.jpeg'
function NewArrival() {
  return (
    <div className=' bg-gray-100 justify-center items-center md:p-12 p-4'>
    <div id='arrivaltext'> <h1  className='text-center pb-10 text-4xl'>New Arrival</h1></div>
      <div  className='lg:px-10 '>
          <div className='grid lg:grid-cols-4 lg:gap-6 md:grid-cols-3 md:gap-4 grid-cols-2 gap-4 place-content-center '>
            <div id='newarive' className='md:p-6 p-4  text-center rounded-lg'>
              <img src={product1} alt="this is my img" className='w-full hover:scale-105 duration-300 h-45 md:h-70 rounded-lg' />
              <p className='my-2'>price</p>
              <button className='bg-white text-black py-2 px-4 rounded-lg hover:bg-pink-400 hover:text-white hover:shadow-pink-500/50 hover:shadow-lg hover:ease-in-out duration-200 cursor-pointer'>Shop Now</button>
            </div>
            <div id='newarive' className=' md:p-6 p-4 text-center rounded-lg'>
              <img src={product2} alt="this is my img" className='w-full hover:scale-105 duration-300 h-45 md:h-70 rounded-lg' />
              <p className='my-2'>price</p>
              <button className='bg-white text-black py-2 px-4 rounded-lg hover:bg-pink-400 hover:text-white hover:shadow-pink-500/50 hover:shadow-lg hover:ease-in-out duration-200 cursor-pointer'>Shop Now</button>
            </div>
            <div id='newarive' className='md:p-6 p-4 text-center rounded-lg'>
              <img src={product3} alt="this is my img" className='w-full hover:scale-105 duration-300 h-45 md:h-70 rounded-lg' />
              <p className='my-2'>price</p>
              <button className='bg-white text-black py-2 px-4 rounded-lg hover:bg-pink-400 hover:text-white hover:shadow-pink-500/50 hover:shadow-lg hover:ease-in-out duration-200 cursor-pointer'>Shop Now</button>
            </div>
            <div id='newarive' className='md:p-6 p-4 text-center rounded-lg'>
              <img src={product4} alt="this is my img" className='w-full hover:scale-105 duration-300 h-45 md:h-70 rounded-lg' />
              <p className='my-2'>price</p>
              <button className='bg-white text-black py-2 px-4 rounded-lg hover:bg-pink-400 hover:text-white hover:shadow-pink-500/50 hover:shadow-lg hover:ease-in-out duration-200 cursor-pointer'>Shop Now</button>
            </div>
            <div id='newarive' className='md:p-6 p-4 text-center rounded-lg'>
              <img src={product5} alt="this is my img" className='w-full hover:scale-105 duration-300 h-45 md:h-70 rounded-lg' />
              <p className='my-2'>price</p>
              <button className='bg-white text-black py-2 px-4 rounded-lg hover:bg-pink-400 hover:text-white hover:shadow-pink-500/50 hover:shadow-lg hover:ease-in-out duration-200 cursor-pointer'>Shop Now</button>
            </div>
            <div id='newarive' className='md:p-6 p-4 text-center rounded-lg'>
              <img src={product6} alt="this is my img" className='w-full hover:scale-105 duration-300 h-45 md:h-70 rounded-lg' />
              <p className='my-2'>price</p>
              <button className='bg-white text-black py-2 px-4 rounded-lg hover:bg-pink-400 hover:text-white hover:shadow-pink-500/50 hover:shadow-lg hover:ease-in-out duration-200 cursor-pointer'>Shop Now</button>
            </div>
          </div>
      </div>  
    </div>
  )
}

export default NewArrival