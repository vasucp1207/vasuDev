import React from 'react'

function Hero() {
  return (
    <div className='h-screen bg-darkB'>
        <div className='text-white flex flex-col justify-center items-center h-screen'>
            <p className='text-2xl'>Hi, I am</p>
            <h1 className='mt-5 text-7xl'>Vasu Singh</h1>
            <h3 className='mt-5 text-4xl'>I am a Full-Stack Developer</h3>
            <h4 className='text-3xl'>I love making website and apps</h4>
            <button className=' mt-10 bg-white text-black h-10 w-40 outline-none rounded-full text-xl'>Contact Me</button>
        </div>
    </div>
  )
}

export default Hero