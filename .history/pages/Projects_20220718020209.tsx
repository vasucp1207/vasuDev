import React from 'react'
import Cards from '../components/Cards'

function Projects() {
    return (
        <div className='flex flex-col gap-4 justify-center items-center mt-20'>
            <h1 className='text-7xl mb-20 z-10'>Projects</h1>
            <div className='flex  md:flex sm:flex-col sm:gap-10 z-10'>
                <Cards
                    title='Covid-19 Dashboard'
                    description='Real time Covid-19 app using disease.sh api showing no of Cases, Deaths and Recoveries on the world map.'
                    image='https://www.familyres.org/wp-content/uploads/2020/12/covido.jpg'
                    link='https://github.com/vasucp1207/covid-19-tracker'
                />
                <Cards
                    title='Disney Clone'
                    description='Disney website clone it using disney api to show the moveis data and details made with ReactJs, Firebase and Material Ui.'
                    image='http://i.ytimg.com/vi/0KTpuNC8dEg/maxresdefault.jpg'
                    link='https://github.com/vasucp1207/disney-clone'
                />
                <Cards
                    title='Tesla Ui'
                    description='This website is the replica of offical Tesla website build with ReactJs and Material Ui.'
                    image='tesla.png'
                    link='https://www.slashgear.com/wp-content/uploads/2021/01/tesla-roadster-3.jpg'
                />
            </div>
            <img src='Background.png' className='absolute z-0' />
        </div>
    )
}

export default Projects