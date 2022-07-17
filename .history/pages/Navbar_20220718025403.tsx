import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {
  return (
    <div className='z-10 h-20 w-screen absolute bg-transparent flex justify-center items-center'>
        <div className='flex space-x-9 text-xl font-normal mr-5 items-center'>
            <p className='hover:text-fuchsia-500 cursor-pointer'>Home</p>
            <p className='hover:text-fuchsia-500 cursor-pointer'>About</p>
            <p className='hover:text-fuchsia-500 cursor-pointer'>Projects</p>
            <p className='hover:text-fuchsia-500 cursor-pointer'>SignIn</p>
            <Link to='-js' smooth={true} duration={500} offset={-130}><li><a href="#">Home</a></li></Link>
        </div>
    </div>
  )
}

export default Navbar