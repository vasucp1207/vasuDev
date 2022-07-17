import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from './Hero'

const Home: NextPage = () => {
  return (
    <div className="p-0 m-0">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        
        <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@200;300&family=Open+Sans:wght@300&family=Poppins:wght@600&display=swap" rel="stylesheet"></link>
      </Head>

      <Hero />
    </div>
  )
}

export default Home
