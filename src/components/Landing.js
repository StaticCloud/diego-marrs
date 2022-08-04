import React from 'react';
import { useSpring, animated } from 'react-spring';

import html from '../icons/html5.png'
import css from '../icons/css3.png'
import js from '../icons/javascript.png'
import mongodb from '../icons/mongodb.png'
import nodejs from '../icons/node-js.png'
import react from '../icons/react.png'
import github from '../icons/github.png'

import profilePic from '../icons/pfp.jpg'

const icons = [js, react, nodejs, mongodb, html, css, github]

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
        <section className="fixed w-full top-0 z-0 dark:text-white dark:bg-gray-800 h-screen flex items-center">
            <animated.div style={fadeIn} className="flex flex-row md:flex-row-reverse flex-wrap mx-auto justify-center">
                <div className="max-w-xs md:max-w-sm px-4">
                    <img className="py-3 rounded-full" src={profilePic}/>
                </div>
                <div className="max-w-xl px-5 flex items-center">
                    <div>
                        <p className="text-lg md:text-2xl py-2 md:py-3">Looking for full stack web developer talent?</p>
                        <h1 className="text-3xl md:text-6xl font-semibold py-2 md:py-3">Hello, I'm Diego Marrs</h1>
                        <p className="text-lg md:text-2xl py-2 md:py-3">I'm a full stack web developer who is proficient in various technologies.</p>
                        <div className="flex flex-row flex-wrap">
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