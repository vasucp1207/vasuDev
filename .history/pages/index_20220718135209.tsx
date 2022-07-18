import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from './Hero'
import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'
import Footer from './Footer'

const Home: NextPage = () => {
  return (
    <div className="p-0 m-0 box-border text-white bg-darkB flex flex-col select-none font-mo">
      <Head>
        <title>Vasu.dev</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Krona+One&display=optional"
          rel="stylesheet"
        />
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
