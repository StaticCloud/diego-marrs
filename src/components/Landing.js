import React from 'react';
import { useSpring, animated } from 'react-spring';

import html from '../icons/svgs/html5.svg'
import css from '../icons/svgs/css3-alt.svg'
import js from '../icons/svgs/square-js.svg'
import python from '../icons/svgs/python.svg'
import nodejs from '../icons/svgs/node.svg'
import react from '../icons/svgs/react.svg'
import git from '../icons/svgs/git-alt.svg'
import down from '../icons/svgs/angle-down-solid.svg'

import { Link } from 'react-scroll'

const icons = [js, nodejs, git, html, css, python, react]

function Landing() {

    const fadeIn = useSpring({
        to: {
            opacity: 1,
            y: 0
        },

        from: {
            opacity: 0,
            y: -50
        },

        mass: 5
    })

    return (
        <section id="landing" className="fixed w-full top-0 z-0 dark:text-white dark:bg-gray-800 h-screen flex items-center">
            <animated.div style={fadeIn} className="flex flex-row md:flex-row-reverse flex-wrap mx-auto justify-center">
                <div className="max-w-4xl px-5 flex items-center">
                    <div className='text-center'>
                        <p className="text-3xl font-semibold text-gray-400">Hello, I'm</p>
                        <h1 className="text-6xl md:text-7xl font-semibold p-2 md:py-3">Diego Marrs</h1>
                        <div className="flex flex-row flex-wrap justify-center">
                            {icons.map((icon, i) => 
                                <img className="p-1 md:p-2 w-10 md:w-12" key={i} src={icon}></img>
                            )}
                        </div>
                        <p className="text-lg md:text-2xl p-2 md:py-3 text-gray-400 max-w-xl mx-auto">Welcome to my portfolio!</p>
                        <div className="flex relative">
                            <Link to="about" smooth="true" className="hover:cursor-pointer animate-bounce absolute left-0 right-0 top-14 mx-auto w-16">
                                <img src={down} className="p-4 md:p-4 bg-gray-900 rounded-full"></img>
                            </Link>
                        </div>
                    </div>
                </div>
            </animated.div>
        </section>
    );
}

export default Landing;