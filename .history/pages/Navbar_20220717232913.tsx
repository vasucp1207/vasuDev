import React from 'react'

function Navbar() {
  return (
    <div className='h-20 w-screen absolute bg-transparent flex justify-end items-center'>
        <div className='h-full flex space-x-5 text-xl font-normal mr-5'>
            <p className='hover:bg-gray-100 cursor-pointer'>Home</p>
            <p className='hover:bg-gray-100 cursor-pointer'>About</p>
            <p className='hover:bg-gray-100 cursor-pointer'>Projects</p>
            <p className='hover:bg-gray-100 cursor-pointer'>SignIn</p>
        </div>
    </div>
  )
}

export default Navbar