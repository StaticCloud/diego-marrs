import React from 'react';
import { useSpring, animated } from 'react-spring';

import html from '../icons/svgs/html5.svg'
import css from '../icons/svgs/css3-alt.svg'
import js from '../icons/svgs/square-js.svg'
import python from '../icons/svgs/python.svg'
import nodejs from '../icons/svgs/node.svg'
import react from '../icons/svgs/react.svg'
import github from '../icons/svgs/github.svg'

import profilePic from '../icons/pfp.jpg'

const icons = [js, html, css, python, react, nodejs, github]

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
        <section id="about" className="fixed w-full top-0 z-0 dark:text-white dark:bg-gray-800 h-screen flex items-center">
            <animated.div style={fadeIn} className="flex flex-row md:flex-row-reverse flex-wrap mx-auto justify-center">
                <div className="max-w-xs md:max-w-sm px-4">
                    <img className="py-3 rounded-full" src={profilePic}/>
                </div>
                <div className="max-w-xl px-5 flex items-center">
                    <div>
                        <p className="text-lg md:text-2xl py-2 md:py-3">Looking for full-stack web developer talent?</p>
                        <h1 className="text-3xl md:text-6xl font-semibold py-2 md:py-3">Hello, I'm Diego Marrs</h1>
                        <p className="text-lg md:text-2xl py-2 md:py-3">I'm a full stack web developer who is proficient in various technologies.</p>
                        <div className="flex flex-row flex-wrap">
                            {icons.map((icon, i) => 
                                <img className="p-1 md:p-2 w-12 md:w-16" key={i} src={icon}></img>
                            )}
                        </div>
                        <a className="transition-all py-2 my-1 mr-3 text-lg md:text-2xl text-gray-400 hover:text-white" href="https://www.linkedin.com/in/diego-marrs/" target="_blank">
                            LinkedIn
                        </a>
                        <p className="inline-flex py-2 text-lg md:text-2xl"> | </p>
                        <a className="transition-all py-2 my-1 mx-3 text-lg md:text-2xl text-gray-400 hover:text-white" href="https://github.com/StaticCloud" target="_blank">
                            GitHub
                        </a>
                        <p className="inline-flex py-2 text-lg md:text-2xl"> | </p>
                        <a className="transition-all py-2 my-1 mx-3 text-lg md:text-2xl text-gray-400 hover:text-white" href="mailto:diegomarrs@proton.me" target="_blank">
                            diegomarrs@proton.me
                        </a>
                    </div>
                </div>
            </animated.div>
        </section>
    );
}

export default Landing;