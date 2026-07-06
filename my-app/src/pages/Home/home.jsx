import React from 'react'
import Hero from '../../components/Hero/hero'
import About from '../About/about'
import Service from '../Services/services'
import Contact from '../Contact/contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Contact />
    </div>
  )
}

export default Home