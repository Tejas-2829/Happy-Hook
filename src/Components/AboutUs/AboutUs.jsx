import React from 'react'
import Herosection from '../Home/Herosection'
import Logo from '../assets/HH_Logo.jpg'

function AboutUs() {
  return (
    <>
      {/* <Herosection /> */}
      <div className='flex justify-center pt-30 p-10 items-center bg-gray-100'>
        <div id='about' className='flex justify-between w-full p-8 rounded-lg shadow-lg'>
          <div className='w-1/2 p-4'>
            <img src={Logo} alt="Logo" className='w-full h-auto items-center'/>
          </div>
          <div>
            <p className='text-white text-lg p-4 flex justify-center items-center h-full'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate temporibus quod suscipit magni? Animi sunt voluptas minus dicta tempore, quaerat rerum non, expedita placeat consequatur qui reprehenderit quae corporis aliquam.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs