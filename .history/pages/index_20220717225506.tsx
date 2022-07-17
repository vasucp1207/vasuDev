import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from './Hero'

const Home: NextPage = () => {
  return (
    <div className="p-0 m-0 font-sans">
      <Head>
        <title>Create Next App</title>
      </Head>

      <Hero />
    </div>
  )
}

export default Home
