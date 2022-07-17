import React from 'react'

function Navbar() {
  return (
    <div className='bg-transparent flex justify-end'>
        <div className='flex space-x-2'>
            <p>Home</p>
            <p>About</p>
            <p>Projects</p>
            <p>SignIn</p>
        </div>
    </div>
  )
}

export default Navbar