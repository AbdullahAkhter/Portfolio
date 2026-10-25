
import React from 'react'

const ExperienceCard = ({title,description,company,date}) => {
    return (
        <div
            className='flex space-x-5 h-36  w-full max-w-xl '>
            <div
                className='relative w-4 h-4 rounded-full bg-purple '>
                <div
                    className='absolute w-0.5 h-30 bg-purple top-4 right-2'></div>
            </div>
            <div
                className='w-full h-full bg-dark-400 rounded-2xl'>
                    <div
                    className='flex justify-between px-5 mt-5'>
                        <h2>{title}</h2>
                        <div
                        className='px-2 py-0 rounded-xl bg-purple'>{date}</div>

                    </div>
                    <div
                    className='px-5 space-y-3'>
                        <p className='text-sm'>{company}</p>
                        <p className='text-sm'>{description}</p>
                    </div>
                </div>

        </div>

    )
}

export default ExperienceCard