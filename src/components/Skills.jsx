import React from 'react'
import { FaFigma, FaReact, FaNodeJs, FaJs, FaCss3Alt } from 'react-icons/fa'
import { SiC, SiRedux } from 'react-icons/si'

const Skills = () => {
    return (
        <div className='w-full bg-primary text-gray-300 py-16'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

                <div className='pb-8 text-center'>
                    <p className='text-2xl font-bold inline border-b-4 border-accent'> My Skills</p>
                </div>

                <div className='flex flex-wrap justify-center gap-6 py-8'>
                    <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 p-4 rounded-full bg-white/5 w-24 h-24 flex flex-col justify-center items-center'>
                        <FaFigma className='w-8 h-8 text-pink-500' />
                        <p className='mt-2 text-xs'>FIGMA</p>
                    </div>
                    <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 p-4 rounded-full bg-white/5 w-24 h-24 flex flex-col justify-center items-center'>
                        <FaReact className='w-8 h-8 text-cyan-400' />
                        <p className='mt-2 text-xs'>REACT</p>
                    </div>
                    <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 p-4 rounded-full bg-white/5 w-24 h-24 flex flex-col justify-center items-center'>
                        <SiC className='w-8 h-8 text-blue-500' />
                        <p className='mt-2 text-xs'>C</p>
                    </div>
                    <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 p-4 rounded-full bg-white/5 w-24 h-24 flex flex-col justify-center items-center'>
                        <FaNodeJs className='w-8 h-8 text-green-500' />
                        <p className='mt-2 text-xs'>NODE</p>
                    </div>
                    <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 p-4 rounded-full bg-white/5 w-24 h-24 flex flex-col justify-center items-center'>
                        <SiRedux className='w-8 h-8 text-purple-600' />
                        <p className='mt-2 text-xs'>REDUX</p>
                    </div>
                    <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 p-4 rounded-full bg-white/5 w-24 h-24 flex flex-col justify-center items-center'>
                        <FaJs className='w-8 h-8 text-yellow-400' />
                        <p className='mt-2 text-xs'>JS</p>
                    </div>
                    <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 p-4 rounded-full bg-white/5 w-24 h-24 flex flex-col justify-center items-center'>
                        <FaCss3Alt className='w-8 h-8 text-blue-600' />
                        <p className='mt-2 text-xs'>CSS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
