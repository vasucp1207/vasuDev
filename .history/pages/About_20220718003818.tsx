import React from 'react'

function About() {
  return (
    <div className='bg-darkB'>
        <div>
            <h1>About Me</h1>
            <p className='name'>Hello👋, my name is Vasu Singh</p>
            <p className='exp'>I'm am an undergrad student interested in Machine Learining, Web Developmet and Comptetive Programming. Currently I'm mainly working on OpenSource also play with Neural Networks on weekends.</p>
            <h3>Skills</h3>
            <List>
            {/* {skills.map((skill) => (<li>{skill}</li>))} */}
            <img src='../assets/html-5.png'/>
            <img src='../assets/css-3.png'/>
            <img src='../assets/c-.png'/>
            <img src='../assets/js.png'/>
            <img src='../assets/physics.png'/>
            <img src='../assets/redux.png'/>
            <img src='../assets/3js.png'/>
            <img src='../assets/node.jpg'/>
            <img src='../assets/firebase.png'/>
            <img src='../assets/python.png'/>
            </List>
        </div>
        {/* <img src='Frame.png' className='absolute z-0'/> */}
    </div>
  )
}

export default About