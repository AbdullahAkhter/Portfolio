
import React from 'react'
import { motion } from "framer-motion"
import "../index.css"
import face from "../assets/face.png"


const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='home'
      className='min-h-screen flex items-center pt-20 pb-16 bg-black'>
      <div
        className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
        <div
          className='md:w:1/2 mb-10 md:mb:0'>
          <h1 className='text-3xl font-bold text-white'>Hi, I am <span className='text-3xl text-purple'>Abdullah</span></h1>
          <h2 className='typewriter'>Full Stack Developer</h2>
          <p>I create stunning web experiences with modern technologies and innovative design</p>
          <div
            className='flex space-x-10 mt-15'>
            <a
              className='py-5 px-12 bg-purple text-white rounded-2xl duration-300 hover:bg-purple-200'>View work</a>
            <a
              className='py-5 px-12 border-purple border-1 text-white rounded-2xl duration-300 hover:bg-purple'>Contact me</a>
          </div>

        </div>

        <div
        >
          <div
            className='rounded-full bg-purple h-64 w-64 md:w-80 h-80'>
            <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop"


                }}
                src={face}
                className='h-64 w-64 md:w-80 h-80 rounded-full'/>


          </div>
        </div>


      </div>
    </motion.div >
  )
}

export default Hero