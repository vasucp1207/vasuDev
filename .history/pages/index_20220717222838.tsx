import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from './Hero'

const Home: NextPage = () => {
  return (
    <div className="p-">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
    </div>
  )
}

export default Home
