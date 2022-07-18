import React from 'react'

function About() {
  return (
    <div className='h-screen relative about flex justify-center'>
        <div className='flex flex-col justify-center items-center bg-blue-300 bg-opacity-5 w-fit rou'>
            <h1 className='md:text-7xl z-20 mt-10 text-5xl'>About Me</h1>
            <p className='md:text-4xl mt-8 z-20 text-2xl'>Hello👋, my name is Vasu Singh</p>
            <p className='z-20 max-w-lg text-xl lg:text-2xl mt-8 text-center lg:max-w-2xl'>I'm am an undergrad student interested in Machine Learining, Web Developmet and Comptetive Programming. Currently I'm mainly working on OpenSource also play with Neural Networks on weekends.</p>
            <h3 className='md:text-5xl mt-5 z-10 text-2xl'>Skills</h3>
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
                <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=vasucp1207&layout=compact&theme=tokyonight&bg_color=00000000" alt="languages" height="165" width='400px'></img>
            </span>
            <img src='Frame.png' className='absolute z-10 right-0 top-50' />
            <img src='Light.png' className='absolute z-0 right-0 top-50' />
        </div>
    </div>
  )
}

export default About