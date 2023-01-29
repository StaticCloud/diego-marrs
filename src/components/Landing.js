import React from 'react';
import { useSpring, animated } from 'react-spring';

import html from '../icons/svgs/html5.svg'
import css from '../icons/svgs/css3-alt.svg'
import js from '../icons/svgs/square-js.svg'
import python from '../icons/svgs/python.svg'
import nodejs from '../icons/svgs/node.svg'
import react from '../icons/svgs/react.svg'
import git from '../icons/svgs/git-alt.svg'

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
                        <h1 className="text-5xl md:text-7xl font-semibold py-2 md:py-3">Hello, I'm Diego Marrs</h1>
                        <p className="text-lg md:text-2xl py-2 md:py-3 text-gray-400 max-w-xl mx-auto">I'm a full stack web developer from Portland, OR. I'm proficient in various market-driven technologies.</p>
                        <div className="flex flex-row flex-wrap justify-center">
                            {icons.map((icon, i) => 
                                <img className="p-1 md:p-2 w-12 md:w-16" key={i} src={icon}></img>
                            )}
                        </div>
                    </div>
                </div>
            </animated.div>
        </section>
    );
}

export default Landing;