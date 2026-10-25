
import React from 'react'

const ProjectCards = ({ title, description, image, tech }) => {
  return (
    <div
      className='bg-dark-300 rounded-2xl overflow-hidden hover:translate-y-2 duration-300'>
      <img
        src={image}
        className='w-full h-60 object-cover' />
      <div
        className='px-4 w-full'>
        <h2 className='text-xl font-bold'>{title}</h2>
        <p>{description}</p>
      </div>
      <div
        className='flex flex-wrap space-x-4 px-3  mt-3'>
        {tech.map((tech, index) => (
          <div>
            <h2 className='bg-dark-400 rounded-full px-3 py-1 mb-3'>{tech}</h2>
          </div>
        ))}

      </div>
      <div
        className='flex space-x-2 px-5 mb-5'>
        <a
          href='#'
          className='rounded-xl px-16 py-2 bg-purple duration-300 hover:bg-purple'>View</a>
        <a
          href='#'
          className='rounded-xl px-15 py-2 border-purple border-1 duration-300 hover:bg-purple-300'>Code</a>
      </div>
    </div>
  )

}

export default ProjectCards