import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from './Hero'
import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'
import Footer from './Footer'

const Home: NextPage = () => {
  return (
    <div className="p-0 m-0 box-border text-white bg-darkB flex flex-col select-none font-sans">
      <Head>
        <title>Vasu.dev</title>
          <style>
          @import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@200;400&family=Open+Sans:wght@300&family=Poppins:wght@600&family=Raleway:wght@300&family=Roboto+Flex:opsz,wght@8..144,300&display=swap');
          </style>
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home
