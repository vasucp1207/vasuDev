import React from 'react'

function About() {
  return (
    <div className='h-screen relative about'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='md:text-7xl z-20 mt-10 text-5xl'>About Me</h1>
            <p className='md:text-4xl mt-8 z-20 text-2xl'>Hello👋, my name is Vasu Singh</p>
            {/* <p className='md:text-xl mt-5 z-20 text-xl'>I'm am an undergrad student interested in Machine Learining, Web Developmet </p>
            <p className='md:text-xl z-20 text-xl'>and Comptetive Programming. Currently I'm mainly working on OpenSource also play with </p>
            <p className='md:text-xl z-20 text-xl'>Neural Networks on weekends.</p> */}
            <p className='z-20 w-1/2 md:text-xl lg:text-2xl mt-8 flex items-center justify-center'>I'm am an undergrad student interested in Machine Learining, Web Developmet and Comptetive Programming. Currently I'm mainly working on OpenSource also play with Neural Networks on weekends.</p>
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