import React from 'react'

function About() {
  return (
    <div className='h-screen relative about'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-7xl z-20'>About Me</h1>
            <p className='text-4xl mt-8 z-20'>Hello👋, my name is Vasu Singh</p>
            <p className='text-xl mt-5 z-20'>I'm am an undergrad student interested in Machine Learining, Web Developmet </p>
            <p className='text-xl z-20'>and Comptetive Programming. Currently I'm mainly working on OpenSource also play with </p>
            <p className='text-xl z-20'>Neural Networks on weekends.</p>
            <h3 className='text-5xl mt-5 z-10'>Skills</h3>
            <span className='flex gap-4 mt-5 z-10'>
                {/* <img className='w-10' src='html-5.png'/>
                <img className='w-10' src='css-3.png'/>
                <img className='w-10' src='c-.png'/>
                <img className='w-10' src='js.png'/>
                <img className='w-10' src='physics.png'/>
                <img className='w-10' src='redux.png'/>
                <img className='w-10' src='3js.png'/>
                <img className='w-10' src='node.jpg'/>
                <img className='w-10' src='firebase.png'/>
                <img className='w-10' src='python.png'/> */}
                <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=vasucp1207&layout=compact&theme=tokyonight" alt="languages" height="165" width='400px' style={'color:transparent}></img>
            </span>
            <img src='Frame.png' className='absolute z-10 right-0 top-50' />
            <img src='Light.png' className='absolute z-0 right-0 top-50' />
        </div>
    </div>
  )
}

export default About