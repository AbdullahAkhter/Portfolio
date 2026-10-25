
import React from 'react'
import { motion } from "framer-motion"
import { Skill_section } from '../assets/assets'


const Skills = () => {
    return (
        <motion.div
        initial={{opacity:0,y:100}}
        whileInView={{opacity:1,y:80}}
        viewport={{once:false,amount:0.2}}
        transition={{duration:1,ease:"easeOut"}}
        className=' mx-auto container px-5 py-10 bg-black'>

            <div
            >
                <h2 className='text-3xl font-bold mb-4 text-center'>My <span className='text-purple'>SKILLS</span></h2>
                <p className='text-center'>Technologies I work with to bring ideas to life</p>

            </div>
            <div
                className='grid grid-cols-3 gap-6 '>

                {Skill_section.map((data, index) => (

                    <div
                        key={index}
                        className='bg-dark-300 p-6 rounded-3xl flex flex-col items-center'>

                        <div
                            className='flex space-x-5'>

                            <data.Icon
                                className='text-3xl text-purple'
                            />

                            <h2 className='text-xl font-bold'>{data.title}</h2>

                        </div>
                        <p >{data.description}</p>
                        <div
                        className='flex flex-wrap space-x-7 space-y-3 mt-3 '>
                      {data.skills.map((skill, index) => (

                        <span className='bg-dark-400 px-3 py-1 rounded-4xl'>{skill}</span>


                        ))}
                        </div>

                    </div>
                ))}
            </div>


        </motion.div>
    )
}

export default Skills