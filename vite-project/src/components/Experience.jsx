
import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './experienceCard'
import { experience } from '../assets/assets'

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className='py-20 bg-black'
    >
      <div
        className='text-center'>
        <h2 className='text-3xl font-bold'>Work <span className='text-purple'>Experience</span></h2>
        <p>My Professional Journey so far</p>
      </div>
      <div
        
      >
        {
          experience.map((experience, index) => (
            <div
              className=' mt-10 w-full flex justify-center'>
              <ExperienceCard 
              title={experience.title}
              description={experience.description}
              date={experience.date}
              company={experience.company}/>
            </div>
          ))
        }

      </div>
    </motion.div>
  )
}

export default Experience