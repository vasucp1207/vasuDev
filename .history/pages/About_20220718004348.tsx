import React from 'react'

function About() {
  return (
    <div className='bg-darkB'>
        <div>
            <h1 className='text-7xl'>About Me</h1>
            <p className=''>Hello👋, my name is Vasu Singh</p>
            <p className='exp'>I'm am an undergrad student interested in Machine Learining, Web Developmet and Comptetive Programming. Currently I'm mainly working on OpenSource also play with Neural Networks on weekends.</p>
            <h3>Skills</h3>
            <li>
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
            </li>
        </div>
        {/* <img src='Frame.png' className='absolute z-0'/> */}
    </div>
  )
}

export default About