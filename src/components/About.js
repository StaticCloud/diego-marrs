import React from "react";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

import profilePic from '../icons/pfp.jpg'

function About() {

    const [ref, inView] = useInView({
        threshold: 0.2
    });

    const fade = useSpring({
        opacity: inView ? 1 : 0,
        delay: 200,
        y: inView ? 0 : 50
    })

    return (
        <section id="about" className="min-h-screen flex flex-col w-full dark:bg-gray-900 dark:text-white py-20 z-40 relative">
            <div className="flex items-center">
                <h1 className="text-3xl md:text-6xl font-semibold inline-block p-4 mx-auto">About</h1>
            </div>
            <animated.div style={fade} ref={ref} className="flex-1 flex flex-wrap md:flex-row items-center h-full justify-center">
                <div className="max-w-xs md:max-w-sm px-4">
                    <img className="py-3 rounded-full" src={profilePic} alt="diego-marrs"/>
                </div>
                <div className="max-w-3xl px-6 flex items-center">
                    <div>
                        <p className="text-lg py-2 md:py-3 text-gray-400">
                            <span className="font-bold text-white">Hello, my name is Diego Marrs. I'm a software engineer.</span>
                            <br></br>
                            <br></br>
                            I am an early career engineer who is currently studying Software Engineering at Western Governors University, where I continue to build upon my foundational knowledge of software development and diversify my skillset. 
                            <br></br>
                            <br></br>
                            I currently work as an instructional specialist at edX where I teach aspiring developers programming fundamentals, RESTful API design and implementation, designing and developing full-stack applications, and more.
                        </p>
                    </div>
                </div>
            </animated.div>
        </section>
    )
}

export default About;