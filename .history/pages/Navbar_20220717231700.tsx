import React from 'react'

function Navbar() {
  return (
    <div className='h-20 absolute bg-transparent flex'>
        <div className='flex space-x-5 text-xl font-normal'>
            <p>Home</p>
            <p>About</p>
            <p>Projects</p>
            <p>SignIn</p>
        </div>
    </div>
  )
}

export default Navbar