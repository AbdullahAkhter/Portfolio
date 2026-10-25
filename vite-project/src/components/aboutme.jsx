
import React from 'react'
import { motion } from 'framer-motion'
import face from "../assets/face.png"
import { aboutInfo} from '../assets/assets'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 50 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once:false,amount:0.2}}
      id='about'
      className='mt-0 py-20 bg-black '
    >
      <div
        
      >
        <h2 className=' text-white text-center text-3xl '> About <span className=' text-purple'>Me</span></h2>
        <p className='text-center text-sm'>Get to know more about my background and knowledge</p>


      </div>
      <div
        className='flex space-x-20 px-30 mt-10 justify-center mx-auto'>
        <motion.img
          src={face}
          className='h-200 w-100' />

        <div
          className='pr-25 space-y-5'>
          <h2 className='text-2xl font-bold'>My Journey</h2>
          <p>I am  a passionate full stack developer with five year experience creating digita solutions for businesses around the world
            .My journey started with basic Html/css websites and has evolved into complex applications with modern frameworks

          </p>
          <p>
            While i am not coding ,you can find me exploring new technologies ,contributing to open source projects
            or sharing my knowledge through tech blogs and tutorials.I beleive in learning and pushing the boundaries of what is possible in the weeb applications
          </p>
         <div className='grid grid-cols-2 gap-6'>
            {aboutInfo.map((data, index) => (
              <div
              key={index}
              className='bg-dark-300 rounded-2xl p-6 duration-300 hover:translate-y-2'>
              <data.icon
              className='text-3xl text-purple'/>
              <h2 className='text-xl font-bold'>{data.title}</h2>
              <p >{data.description}</p>


            </div>))}
          </div>




        </div>


      </div>




    </motion.div >
  )
}

export default About