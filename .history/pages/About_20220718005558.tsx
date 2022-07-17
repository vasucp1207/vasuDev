import React from 'react'

function About() {
  return (
    <div className='mt-20'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-7xl'>About Me</h1>
            <p className='text-4xl mt-8'>Hello👋, my name is Vasu Singh</p>
            <p className='text-xl w-1/2 mt-5'>I'm am an undergrad student interested in Machine Learining, Web Developmet and Comptetive Programming. Currently I'm mainly working on OpenSource also play with Neural Networks on weekends.</p>
            <h3 className='text-2xl'>Skills</h3>
            <span className='flex max-w-10'>
                <img className='w-10' src='html-5.png'/>
                <img className='w-10' src='css-3.png'/>
                <img className='w-10' src='c-.png'/>
                <img className='w-10' src='js.png'/>
                <img className='w-10' src='physics.png'/>
                <img className='w-10' src='redux.png'/>
                <img className='w-10' src='3js.png'/>
                <img className='w-10' src='node.jpg'/>
                <img className='w-10' src='firebase.png'/>
                <img className='w-10' src='python.png'/>
            </span>
        </div>
        {/* <img src='Frame.png' className='absolute z-0'/> */}
    </div>
  )
}

export default About