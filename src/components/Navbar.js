import React, { useState } from 'react';
import { Link } from 'react-scroll'

import resume from '../icons/DIEGO MARRS.pdf'

function Navbar() {

    const [color, setColor] = useState('')

    const updateBackground = () => {
        if (window.scrollY > 300) {
            setColor('dark:bg-gray-900')
        } else {
            setColor('')
        }
    }

    window.addEventListener('scroll', updateBackground)

    return (
        <nav className={`${color} fixed w-full top-0 flex flex-wrap p-4 dark:text-white transition-all duration-700 z-50`}>
            <h1 className="flex-1 hidden md:block font-semibold text-6xl px-5">Diego Marrs</h1>
            <h1 className="flex-1 md:hidden font-semibold text-6xl px-5">DM</h1>
            <div className="flex-1 hidden md:flex items-center justify-end px-5">
                <ul className="flex">
                    <li className="hover:cursor-pointer transition-all px-4 text-2xl text-gray-400 hover:text-white">
                        <Link to="top" smooth="true">about</Link>
                    </li>
                    <li className="hover:cursor-pointer transition-all px-4 text-2xl text-gray-400 hover:text-white">
                        <Link to="projects" smooth="true">projects</Link>
                    </li>
                    <li className="hover:cursor-pointer transition-all px-4 text-2xl text-gray-400 hover:text-white">
                        <Link to="contact" smooth="true">contact</Link>
                    </li>
                    <li className="hover:cursor-pointer transition-all px-4 text-2xl text-gray-400 hover:text-white">
                        <a href={resume} target="_blank">resume</a>
                        {/* <Link to="resume" smooth="true">resume</Link> */}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;