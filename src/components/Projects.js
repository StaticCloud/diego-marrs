import React, { useState } from 'react';
import { useSpring, useTrail, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

function Projects() {

    const { ref, inView } = useInView();

    const pages = [
        'Beet Hub',
        'Pantry', 
        'My Tech Blog',
        'Password Generator'
    ]

    const trail = useTrail(pages.length, {
        opacity: inView ? 1 : 0,
        marginLeft: inView ? 0 : 50
    })

    return (
        <section className="min-h-screen flex flex-col w-full dark:bg-gray-900 dark:text-white py-20 z-40 relative">
            <div className="flex items-center">
                <h1 className="text-3xl md:text-6xl font-semibold inline-block p-4 mx-auto">Projects</h1>
            </div>
            <div ref={ref} className="flex-1 flex flex-col justify-between py-9">
                {trail.map(({ opacity, marginLeft }, i) => 
                    <animated.h1 
                        key={pages[i]} 
                        className={`text-6xl md:text-8xl font-semibold px-6`}
                        style={{ 
                            marginLeft, 
                            opacity
                        }}>
                           {pages[i]}
                        </animated.h1>
                )}
            </div>
        </section>
    );
}

export default Projects;