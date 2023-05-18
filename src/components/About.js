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
                    <img className="py-3 rounded-full" src={profilePic}/>
                </div>
                <div className="max-w-3xl px-6 flex items-center">
                    <div>
                        <p className="text-lg py-2 md:py-3 text-gray-400">
                            <span className="font-bold text-white">Hello, my name is Diego Marrs, I'm a full stack web developer.</span> I'm proficient in both front-end and back-end development and my specialty is the MERN stack.
                            <br></br>
                            <br></br>
                            I have an associate's degree in computer science and a background in food and beverage services. As someone who wanted hands-on experience with software development, joining a web development boot camp was the next logical step after obtaining my undergraduate degree.
                            <br></br>
                            <br></br>
                            I attended an intensive 24-week full stack web development boot camp through University of Oregon. Over the course of the program, I developed in over 30+ GitHub repositories, including multiple solo and group projects. I'm continuously learning new technologies through building innovative and exciting projects. Feel free to check out a few of my projects below, don't forget to give my GitHub page a look too!
                        </p>
                    </div>
                </div>
            </animated.div>
        </section>
    )
}

export default About;

{/* <p className="text-md md:text-lg py-2 md:py-3 text-gray-400">
                            I'm a full stack web developer from Portland, OR. I'm proficient in various, market-driven technologies, including the MERN stack.
                            <br/><br/>
                            I took a 24-week intensive web development boot camp through University of Oregon in 2021. 
                            <br/><br/>
                        </p> */}