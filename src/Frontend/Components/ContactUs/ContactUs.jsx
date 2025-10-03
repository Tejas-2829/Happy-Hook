import React from 'react'
import Herosection from '../Home/Herosection'

function ContactUs() {
  return (
    <>
    {/* <Herosection /> */}
      <div className='bg-gray-100 pt-35 py-25 flex justify-center items-center'>
        <div id='contact' className='flex p-8 rounded-lg shadow-lg'>
          <div className='bg-gray-100 p-8 rounded-lg'>
            <div className='pb-6'>
              <h1 className='text-3xl'>Get in touch :</h1>
              <p>Fill in the form to start a conversation</p>
            </div>
            <ul>
              <li>Address</li>
              <li>Phone No</li>
              <li>Email Id</li>
            </ul>
          </div>
          <div className='flex p-8'>
            <form action="">
              <input type="text" 
              placeholder='Full Name'
              className='bg-white rounded-lg py-2 px-3 w-65 focus:outline-none'/><br />
              <input type="email" 
              placeholder='Email'
              className='bg-white my-5 rounded-lg py-2 px-3 w-65 focus:outline-none'/><br />
              <input type="number" 
              placeholder='Contact Number'
              className='bg-white rounded-lg py-2 px-3 w-65 focus:outline-none'/><br />
              <button id='footerbtn' className='px-4 mt-4 py-1 bg-white font-inter rounded-lg hover:bg-pink-600 hover:shadow-pink-500/50 hover:shadow-lg duration-300'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs