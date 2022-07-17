import React from 'react'

function Navbar() {
  return (
    <div className='bg-transparent flex justify-end'>
        <div className='flex space-x-5 text-xl font-thin'>
            <p>Home</p>
            <p>About</p>
            <p>Projects</p>
            <p>SignIn</p>
        </div>
    </div>
  )
}

export default Navbar