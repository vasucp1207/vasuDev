import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {

  const [active, setAct] = React.useState(false)

  function changeNav() {
    if (window.scrollY >= 160) { setAct(true) }
    else if (window.scrollY < 160) { setAct(false) }
  }

  React.useEffect(() => {
    changeNav()
    window.addEventListener('scroll', changeNav)
  })


  return (
    <div>
      {!active && <div className='z-10 h-20 w-screen fixed z-40 bg-transparent flex justify-center items-center'>
        <div className='flex gap-8 text-xl font-normal mr-5 items-center justify-center'>
          <Link to='home' smooth={true} duration={500} ><a className='hover:text-fuchsia-500 cursor-pointer h-20 flex items-center justify-center'>Home</a></Link>
          <Link to='about' smooth={true} duration={500}><a className='hover:text-fuchsia-500 cursor-pointer h-20 flex items-center justify-center'>About</a></Link>
          <Link to='project' smooth={true} duration={500} ><a className='hover:text-fuchsia-500 cursor-pointer h-20 flex items-center justify-center'>Projects</a></Link>
          {/* <a className='hover:text-fuchsia-500 cursor-pointer h-20 flex items-center justify-center'>SignIn</a> */}
          <button className='z-30 hover:outline-none transition-all duration-300 bg-transparent
            hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 w-32 h-12 
            outline rounded-full text-xl'>SignIn</button>
        </div>
      </div>}

      {active && <div className='backdrop-blur-lg z-10 h-20 w-screen fixed z-40 bg-transparent flex justify-center items-center'>
        <div className='flex space-x-9 text-xl font-normal mr-5 items-center'>
          <Link to='home' smooth={true} duration={500} ><a className='hover:text-fuchsia-500 cursor-pointer'>Home</a></Link>
          <Link to='about' smooth={true} duration={500}><a className='hover:text-fuchsia-500 cursor-pointer'>About</a></Link>
          <Link to='project' smooth={true} duration={500} ><a className='hover:text-fuchsia-500 cursor-pointer'>Projects</a></Link>
          <a className='hover:text-fuchsia-500 cursor-pointer'>SignIn</a>
        </div>
      </div>}
    </div>
  )
}

export default Navbar