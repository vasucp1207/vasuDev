import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from './Hero'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Hero />
      
    </div>
  )
}

export default Home
