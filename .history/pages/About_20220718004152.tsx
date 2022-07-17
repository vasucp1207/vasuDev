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
            <img src='html-5.png'/>
            <img src='css-3.png'/>
            <img src='c-.png'/>
            <img src='js.png'/>
            <img src='physics.png'/>
            <img src='redux.png'/>
            <img src='3js.png'/>
            <img src='node.jpg'/>
            <img src='firebase.png'/>
            <img src='python.png'/>
            </li>
        </div>
        {/* <img src='Frame.png' className='absolute z-0'/> */}
    </div>
  )
}

export default About