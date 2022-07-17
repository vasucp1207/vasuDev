import React from 'react'

function Navbar() {
  return (
    <div className='h-20 w-screen absolute bg-transparent flex justify-end items-center'>
        <div className='h-full flex space-x-5 text-xl font-normal mr-5 items-center texspa'>
            <p className='flex items-center h-full hover:bg-green-400 cursor-pointer'>Home</p>
            <p className='flex items-center h-full hover:bg-green-400 cursor-pointer'>About</p>
            <p className='flex items-center h-full hover:bg-green-400 cursor-pointer'>Projects</p>
            <p className='flex items-center h-full hover:bg-green-400 cursor-pointer'>SignIn</p>
        </div>
    </div>
  )
}

export default Navbar