
import React from 'react'
import { motion } from "framer-motion"
import { project_detail } from '../assets/assets'
import ProjectCards from './projectCards'
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 50 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className='py-20 bg-black'

        >
            <div
                className='text-center'>
                <h2 className=' text-3xl font-bold'>My <span className='text-purple'>Projects</span></h2>
                <p>A section of my written work</p>
            </div>
            <div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                {project_detail.map((data, index) => (
                    <ProjectCards
                        key={index}
                        title={data.title}
                        description={data.description}
                        image={data.image}
                        tech={data.tech} />

                ))}
            
            </div>
            <div
                    className='flex justify-center mt-15'>
                        <div
                        className='flex px-7 py-2 bg-purple rounded-xl border-purple border-1 space-x-2 items-center'>
                    <a href='#'
                        >View more projects</a>
                        <FaArrowRight
                        />
                        </div>
                </div>






        </motion.div>
    )
}

export default Projects