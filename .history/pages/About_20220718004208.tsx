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
            <img className='w-' src='html-5.png'/>
            <img className='w-' src='css-3.png'/>
            <img className='w-' src='c-.png'/>
            <img className='w-' src='js.png'/>
            <img className='w-' src='physics.png'/>
            <img className='w-' src='redux.png'/>
            <img className='w-' src='3js.png'/>
            <img className='w-' src='node.jpg'/>
            <img className='w-' src='firebase.png'/>
            <img className='w-' src='python.png'/>
            </li>
        </div>
        {/* <img src='Frame.png' className='absolute z-0'/> */}
    </div>
  )
}

export default About