import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [theme, setTheme] = useState('dark')

    const handleClick = () => setNav(!nav)

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const [visible, setVisible] = useState(true)

    useEffect(() => {
        let prevScrollPos = window.scrollY

        const handleScroll = () => {
            const currentScrollPos = window.scrollY
            const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10

            setVisible(isVisible)
            prevScrollPos = currentScrollPos
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const links = [
        { id: 1, text: 'Home', href: '#home' },
        { id: 2, text: 'About', href: '#about' },
        { id: 3, text: 'Services', href: '#services' },
        { id: 4, text: 'Projects', href: '#projects' },
        { id: 5, text: 'Contact', href: '#contact' },
    ]

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: visible ? 0 : -100 }}
            transition={{ duration: 0.3 }}
            className='fixed top-0 left-0 w-full h-[80px] flex justify-between items-center px-4 bg-primary/90 backdrop-blur-sm z-50'
        >

            {/* Desktop Menu - Centered & Styled */}
            <ul className='hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-900/40 via-purple-600/40 to-pink-500/40 border border-white/10 rounded-full px-8 py-3 gap-8 backdrop-blur-md shadow-lg shadow-purple-500/10'>
                {links.map(({ id, text, href }) => (
                    <li key={id}>
                        <a href={href} className='text-sm font-medium hover:text-accent transition duration-300 text-secondary uppercase tracking-wider'>
                            {text}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='flex items-center gap-4'>
                {/* Theme Toggle - Visible on both mobile and desktop */}
                <button
                    onClick={toggleTheme}
                    className='fixed top-0 left-0 p-2 rounded-full hover:bg-glass-bg transition duration-300 text-secondary border border-transparent hover:border-glass-border'
                    aria-label="Toggle Theme"
                >
                    {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
                </button>

                {/* Hamburger */}
                <div onClick={handleClick} className='md:hidden z-10 cursor-pointer text-2xl text-secondary ml-4'>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center'}>
                {links.map(({ id, text, href }) => (
                    <li key={id} className='py-6 text-4xl'>
                        <a onClick={handleClick} href={href} className='hover:text-accent duration-300 text-secondary'>
                            {text}
                        </a>
                    </li>
                ))}
            </ul>
        </motion.nav>
    )
}

export default Navbar
