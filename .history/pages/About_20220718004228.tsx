import React from 'react'

function About() {
  return (
    <div className='bg-darkB'>
        <div>
            <h1>About Me</h1>
            <p className='name'>Hello👋, my name is Vasu Singh</p>
            <p className='exp'>I'm am an undergrad student interested in Machine Learining, Web Developmet and Comptetive Programming. Currently I'm mainly working on OpenSource also play with Neural Networks on weekends.</p>
            <h3>Skills</h3>
            <li>
            <img className='w-20' src='html-5.png'/>
            <img className='w-20' src='css-3.png'/>
            <img className='w-20' src='c-.png'/>
            <img className='w-20' src='js.png'/>
            <img className='w-20' src='physics.png'/>
            <img className='w-20' src='redux.png'/>
            <img className='w-20' src='3js.png'/>
            <img className='w-20' src='node.jpg'/>
            <img className='w-20' src='firebase.png'/>
            <img className='w-20' src='python.png'/>
            </li>
        </div>
        {/* <img src='Frame.png' className='absolute z-0'/> */}
    </div>
  )
}

export default About