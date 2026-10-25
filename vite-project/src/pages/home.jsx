
import React from 'react'

import Hero from '../components/hero'
import About from "../components/aboutme"
import Skills from '../components/skills'
import Projects from '../components/projects'
import Experience from '../components/Experience'
import Contact from '../components/contact'

const Home = () => {
  return (
    <div
    className='w-full'>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      
    </div>
  )
}

export default Home