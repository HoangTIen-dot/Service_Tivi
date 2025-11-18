import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import ServiceDetails from './components/ServiceDetails'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    ScrollTrigger.refresh()
  }, [])

  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <ServiceDetails />
      <Gallery />
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
