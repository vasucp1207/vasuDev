import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAqC4N5QHB5EuWabsAC5pnOIVO8bvn4nMs",
  authDomain: "vasu-io.firebaseapp.com",
  projectId: "vasu-io",
  storageBucket: "vasu-io.appspot.com",
  messagingSenderId: "427579462419",
  appId: "1:427579462419:web:cf8fd563f8faaa522700e6",
  measurementId: "G-KFQBFG5WKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
          <Link to='home' smooth={true} duration={500} ><p className='hover:text-fuchsia-500 cursor-pointer h-20 flex items-center justify-center'>Home</p></Link>
          <Link to='about' smooth={true} duration={500}><p className='hover:text-fuchsia-500 cursor-pointer h-20 flex items-center justify-center'>About</p></Link>
          <Link to='project' smooth={true} duration={500} ><p className='hover:text-fuchsia-500 cursor-pointer h-20 flex items-center justify-center'>Projects</p></Link>
          {/* <p className='hover:text-fuchsia-500 cursor-pointer h-20 flex items-center justify-center'>SignIn</p> */}
          <button className='z-30 hover:outline-none transition-all duration-300 bg-transparent
            hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 w-32 h-12 
            outline rounded-full text-xl'>SignIn</button>
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