import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from './Hero'
import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'

const Home: NextPage = () => {
  return (
    <div className="p-0 m-0 text-white bg-darkB flex flex-col mt-20">
      <Head>
        <title>Create Next App</title>
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default Home
