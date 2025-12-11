import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import ProfileImg from '../assets/profile.jpg'

const Hero = () => {
    return (
        <div id="home" className='min-h-screen w-full flex flex-col justify-center items-center text-center px-4 py-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-primary to-primary'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-accent shadow-lg shadow-accent/50 mx-auto animate-flip-slow">
                    <img
                        src={ProfileImg}
                        alt="Manjal Kisi"
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <p className='text-accent text-xl mb-4'>Hi, It's me</p>
                <h1 className='text-5xl md:text-7xl font-bold mb-4 text-secondary'>
                    Manjal Kisi
                </h1>
                <h2 className='text-3xl md:text-5xl font-bold text-gray-400 mb-8 gradient-text min-h-[60px]'>
                    <TypeAnimation
                        sequence={[
                            "I'm a Full Stack Developer.",
                            1000,
                            "I'm a Student.",
                            1000,
                            "I'm a Creative Coder.",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h2>
                <p className='text-gray-400 text-lg max-w-[600px] mx-auto mb-8 leading-relaxed'>
                    I specialize in building exceptional digital experiences. Currently, I am a BCA student at <strong>Samriddhi College</strong>, focused on developing creative web technologies.
                </p>

                <a
                    href="#projects"
                    className='inline-block px-8 py-4 border-2 border-accent text-accent rounded-md font-bold text-lg hover:bg-accent/10 transition duration-300'
                >
                    Check out my work!
                </a>
            </motion.div>
        </div>
    )
}

export default Hero
