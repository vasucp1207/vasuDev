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
        <div className='flex text-xl font-normal mr-5 items-center justify-cente'>
          <Link to='home' smooth={true} duration={500} ><p className='hover:bg-fuchsia-500 cursor-pointer h-20 flex items-center justify-center'>Home</p></Link>
          <Link to='about' smooth={true} duration={500}><p className='hover:bg-fuchsia-500 cursor-pointer h-20 flex items-center justify-center'>About</p></Link>
          <Link to='project' smooth={true} duration={500} ><p className='hover:bg-fuchsia-500 cursor-pointer h-20 flex items-center justify-center'>Projects</p></Link>
          <p className='hover:bg-fuchsia-500 cursor-pointer h-20 flex items-center justify-center'>SignIn</p>
        </div>
      </div>}

      {active && <div className='backdrop-blur-lg z-10 h-20 w-screen fixed z-40 bg-transparent flex justify-center items-center'>
        <div className='flex space-x-9 text-xl font-normal mr-5 items-center'>
          <Link to='home' smooth={true} duration={500} ><p className='hover:text-fuchsia-500 cursor-pointer'>Home</p></Link>
          <Link to='about' smooth={true} duration={500}><p className='hover:text-fuchsia-500 cursor-pointer'>About</p></Link>
          <Link to='project' smooth={true} duration={500} ><p className='hover:text-fuchsia-500 cursor-pointer'>Projects</p></Link>
          <p className='hover:text-fuchsia-500 cursor-pointer'>SignIn</p>
        </div>
      </div>}
    </div>
  )
}

export default Navbar