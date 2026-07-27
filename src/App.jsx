import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <hr className="hr" />
      <About />
      <hr className="hr" />
      <Technologies />
      <hr className="hr" />
      <Experience />
      <hr className="hr" />
      <Education />
      <hr className="hr" />
      <Projects />
      <hr className="hr" />
      <Contact />
      <Footer />
    </>
  )
}

export default App
