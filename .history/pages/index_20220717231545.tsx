import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from './Hero'
import Navbar from './Navbar'

const Home: NextPage = () => {
  return (
    <div className="p-0 m-0 bg-darkB text-white h-">
      <Head>
        <title>Create Next App</title>
      </Head>

      <Navbar />
      <Hero />
    </div>
  )
}

export default Home
