
import Hero from './Hero'
import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'
import Footer from './Footer'

const Home: NextPage = () => {
  return (
    <div className="p-0 m-0 box-border text-white bg-darkB flex flex-col">
      <Head>
        <title>Create Next App</title>
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
