import React from 'react'

function Navbar() {
  return (
    <div className='h-20 w-screen absolute bg-transparent flex justify-end items-center'>
        <div className='flex space-x-5 text-xl font-normal mr-5'>
            <p className='hover:pointer'>Home</p>
            <p className='hover:pointer'>About</p>
            <p className='hover:pointer'>Projects</p>
            <p className='hover:pointer'>SignIn</p>
        </div>
    </div>
  )
}

export default Navbar