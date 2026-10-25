
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from "react-icons/fa6"

const Navbar = () => {
    const [showmenu, setshowmenu] = useState(true)
    return (
        <nav className='fixed w-full bg-black px-3 py-4'>
            <div className='  container mx-auto flex justify-between items-center '>
                <a
                    href='#' className='text-3xl text-white'>
                    Abdullah
                    <span className='text-3xl font-bold text-purple'>Akhter</span>
                    <div className='w-4 h-4 rounded-full bg-purple'></div>
                </a>
                <div
                    className='hidden md:flex space-x-10'>
                    <a href='/' className='group text-white duration-300 hover:text-purple' >
                        <span
                        >Home</span>
                        <div
                            className='h-0.5 bg-purple w-0 duration-300 group-hover:w-full'></div>
                    </a>
                    <a href='/about' className='group text-white duration-300 hover:text-purple ' >
                        <span
                        >About</span>
                        <div
                            className='h-0.5 bg-purple w-0 duration-300 group-hover:w-full'></div>
                    </a>
                    <a href='/skills' className='group text-white duration-300 hover:text-purple' >
                        <span
                        >Skills</span>
                        <div
                            className='h-0.5 bg-purple w-0 duration-300 group-hover:w-full'></div>
                    </a>
                    <a href='/projects' className='group text-white duration-300 hover:text-purple' >
                        <span
                        >Projects</span>
                        <div
                            className='h-0.5 bg-purple w-0 duration-300 group-hover:w-full'></div>
                    </a>
                    <a href='/experience' className='group text-white duration-300 hover:text-purple' >
                        <span
                        >Experience</span>
                        <div
                            className='h-0.5 bg-purple w-0 duration-300 group-hover:w-full'></div>
                    </a>
                    <a href='/contact' className='group text-white duration-300 hover:text-purple' >
                        <span
                        >Contact</span>
                        <div
                            className='h-0.5 bg-purple w-0 duration-300 group-hover:w-full'></div>
                    </a>



                </div>
                <div
                    className='md:hidden  space-y-2'>
                    {showmenu ?
                        <FaBars onClick={() => setshowmenu(!showmenu)} className='text-2xl cursor-pointer' /> :
                        <FaXmark onClick={() => setshowmenu(!showmenu)} className='text-2xl cursor-pointer' />

                    }


                </div>



            </div>


            {showmenu && (
                <div
                    className='md:hidden mt-4 bg-black h-screen flex flex-col space-y-3  text-center'>

                    <a href='/' className='group text-white duration-300 hover:text-purple-500' >
                        <span
                        >Home</span>
                        <div
                            className='h-0.5 bg-purple w-0 duration-300 group-hover:w-full'></div>
                    </a>
                    <a href='/about' className='group text-white duration-300 hover:text-purple ' >
                        <span
                        >About</span>
                        <div
                            className='h-0.5 bg-purple w-0 duration-300 group-hover:w-full'></div>
                    </a>
                    <a href='/skills' className='group text-white duration-300 hover:text-purple' >
                        <span
                        >Skills</span>
                        <div
                            className='h-0.5 bg-purple w-0 duration-300 group-hover:w-full'></div>
                    </a>
                    <a href='/projects' className='group text-white duration-300 hover:text-purple' >
                        <span
                        >Projects</span>
                        <div
                            className='h-0.5 bg-purple w-0 duration-300 group-hover:w-full'></div>
                    </a>
                    <a href='/experience' className='group text-white duration-300 hover:text-purple' >
                        <span
                        >Experience</span>
                        <div
                            className='h-0.5 bg-purple w-0 duration-300 group-hover:w-full'></div>
                    </a>
                    <a href='/contact' className='group text-white duration-300 hover:text-purple' >
                        <span
                        >Contact</span>
                        <div
                            className='h-0.5 bg-purple w-0 duration-300 group-hover:w-full'></div>
                    </a>
                </div>

            )}

        </nav>
    )
}

export default Navbar