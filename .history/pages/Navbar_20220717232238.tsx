import React from 'react'

function Navbar() {
  return (
    <div className='h-20 w-screen absolute bg-transparent flex justify-end items-center'>
        <div className='flex space-x-5 text-xl font-normal mr-5 group'>
            <p className='group-hover:bg-g'>Home</p>
            <p className='group-hover:bg-g'>About</p>
            <p className='group-hover:bg-g'>Projects</p>
            <p className='group-hover:bg-g'>SignIn</p>
        </div>
    </div>
  )
}

export default Navbar