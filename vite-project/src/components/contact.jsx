
import React from 'react'
import { motion } from "framer-motion"
import { contact } from '../assets/assets'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className='py-20 bg-black'>
            <div
                className='text-center space-y-4'>
                <h2
                    className='text-3xl font-bold'>Get In <span className='text-purple'>Touch</span></h2>
                <p className='text-sm'>Have a project in mind or want to collaborate?Let talks</p>
            </div>
            <div
                className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                <div>
                    <form
                        className='space-y-6'>
                        <div>
                            <label htmlFor='name' className=' block mb-2'>Your Name</label>
                            <input
                                className='bg-dark-300 border  border-dark-400 rounded-lg outline-none w-full px-3 py-2' />
                        </div>
                        <div>
                            <label htmlFor='name' className=' block mb-2'>Email Address</label>
                            <input
                                className='bg-dark-300 border  border-dark-400 rounded-lg outline-none w-full px-3 py-2' />
                        </div>
                        <div>
                            <label htmlFor='name' className=' block mb-2'>Your mesage</label>
                            <textarea
                                id="message"
                                className="bg-dark-300 border border-dark-400 rounded-lg outline-none w-full h-35 px-3 py-2 resize-none"

                            />

                        </div>
                        <button
                            className='bg-purple w-full px-3 py-2 rounded-lg '
                            type='submit'>Submit message</button>


                    </form>
                </div>
                <div
                    className='mt-8 space-y-9'>
                    {contact.map((data, index) => (
                        <div>
                            <div
                                className='flex gap-2'>
                                <data.icon
                                    className='text-3xl' />
                                <h2>{data.title}</h2>
                            </div>
                            <p>{data.description}</p>
                        </div>
                    ))}
                    <div
                    className='space-y-2'>
                        <h2 className=' text-xl font-bold'>Follow Me</h2>
                        <div
                        className='flex gap-3'>
                            <div
                                className='w-10 h-10 bg-dark-300 rounded-full hover:bg-purple flex justify-center items-center'>
                                <FaGithub
                                    className='text-xl' />
                            </div>
                            <div
                                className='w-10 h-10 bg-dark-300 rounded-full hover:bg-purple flex justify-center items-center'>
                                <FaLinkedin
                                    className='text-xl' />
                            </div>
                            <div
                                className='w-10 h-10 bg-dark-300 rounded-full hover:bg-purple flex justify-center items-center'>
                                <FaTwitter
                                    className='text-xl text-blue-500' />
                            </div>
                              <div
                                className='w-10 h-10 bg-dark-300 rounded-full hover:bg-purple flex justify-center items-center'>
                                <FaInstagram
                                    className='text-xl text-red-500' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>




        </motion.div>

    )
}

export default Contact