import React from 'react'

function Navbar() {
  return (
    <div className='h-20 absolute bg-transparent flex justify-end items-center'>
        <div className='flex ml space-x-5 text-xl font-normal mr-5'>
            <p>Home</p>
            <p>About</p>
            <p>Projects</p>
            <p>SignIn</p>
        </div>
    </div>
  )
}

export default Navbar