import React from 'react'

function Navbar() {
  return (
    <div className='h-20 w-screen absolute bg-transparent flex justify-end items-center'>
        <div className='flex space-x-5 text-xl font-normal mr-5 '>
            <p className=''>Home</p>
            <p className='group-hover:bg-gray-50'>About</p>
            <p className='group-hover:bg-gray-50'>Projects</p>
            <p className='group-hover:bg-gray-50'>SignIn</p>
        </div>
    </div>
  )
}

export default Navbar