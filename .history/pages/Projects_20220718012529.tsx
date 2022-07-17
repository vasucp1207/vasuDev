import React from 'react'
import Cards from '../components/Cards'

function Projects() {
  return (
    <div>
        <Cards 
            title='Covid-19 Dashboard'
            description='Real time Covid-19 app using disease.sh api showing no of Cases, Deaths and Recoveries on the world map.'
            image='covid.png'
            link='https://github.com/vasucp1207/covid-19-tracker'
        />
        <Cards
        
        />
        <Cards />
    </div>
  )
}

export default Projects