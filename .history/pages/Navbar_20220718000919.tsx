import React from 'react'

function Navbar() {
  return (
    <div className='z-10 h-20 w-screen absolute bg-transparent flex justify-end items-center'>
        <div className='flex space-x-9 text-xl font-normal mr-5 items-center'>
            <p className='hover:text-fuchsia-500 cursor-pointer'>Home</p>
            <p className='hover:text-fuchsia-500 cursor-pointer'>About</p>
            <p className='hover:text-green-400 cursor-pointer'>Projects</p>
            <p className='hover:text-green-400 cursor-pointer'>SignIn</p>
        </div>
    </div>
  )
}

export default Navbar