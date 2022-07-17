import React from 'react'

function Hero() {
  return (
    <div className='home h-screen bg-darkB relative'>
        <div className='mt-10 text-white flex flex-col justify-center items-center h-screen'>
            <p className='text-2xl z-10'>Hi, I am</p>
            <h1 className='mt-5 text-7xl z-10'>Vasu Singh</h1>
            <h3 className='mt-5 text-4xl z-10'>I am a Full-Stack Developer</h3>
            <h4 className='text-3xl z-10'>I love making website and apps</h4>
            <button className='mt-10 z-30 hover:outline-none transition-all 200 bg-transparent
            hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 h-10 w-40 
            outline rounded-full text-xl'
            onClick={() => window.location = 'mailto:vasucp1207@gmail.com'}>Contact Me</button>
        </div>

        <img src='top.png' className='absolute -top-4 -left-4 z-0 animate-bounce-slow' />
        <img src='bottom.png' className='absolute z-0 right-0 -top-10 animate-pulse transition delay-200' />
        
    </div>
  )
}

export default Hero