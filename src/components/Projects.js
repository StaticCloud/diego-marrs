import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import Project from './Project';

import beethub from '../icons/beethub.png';
import pantry from '../icons/pantry.png';
import techBlog from '../icons/techblog.png';
import passwordGen from '../icons/password-gen.png'

function Projects() {

    const pages = [
        {
            title: 'Beet Hub',
            stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'GraphQL', 'Apollo Server/Client'],
            image: beethub,
            github: 'https://github.com/heatherviolet/beat-hub',
            description: 'A social platform, built on the MERN stack, for sharing and discussing your favorite music albums!'
        },
        {
            title: 'Pantry',
            stack: ['MySQL', 'Handlebars', 'Express.js', 'Bootstrap'],
            image: pantry,
            github: 'https://github.com/zaclark369/Pantry',
            description: 'Pantry is an MVC website that allows you to browse for recipes using ingredients you already have!'
        }, 
        {
            title: 'My Tech Blog',
            stack: ['MySQL', 'Handlebars', 'Express.js'],
            image: techBlog,
            github: 'https://github.com/StaticCloud/My-Tech-Blog',
            description: 'An MVC blogging website for developers. Create an account and post about your exciting upcoming projects!'
        },
        {
            title: 'Password Generator',
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: passwordGen,
            github: 'https://github.com/StaticCloud/Password-Generator',
            description: 'Need a quick, secure password? Look no further! Input a shuffle rate between 1 - 10,000 and generate!'
        }
    ]

    const [pageSizes, setPageSizes] = useState(pages.map(() => 0));

    function updateSize(index) {
        setPageSizes(pageSizes.map((page, i) => i === index ? pageSizes[index] === 0 ? 20 : 0 : page))
    }

    return (
        <section className="min-h-screen flex flex-col w-full dark:bg-gray-900 dark:text-white py-20 z-40 relative">
            <div className="flex items-center">
                <h1 className="text-3xl md:text-6xl font-semibold inline-block p-4 mx-auto">Projects</h1>
            </div>
            <div className="flex-1 flex flex-col py-9">
                {pages.map((page, i) => 
                    <div key={i} className="py-8">
                        <InView threshold="1">
                            {({ inView, ref }) => (
                                <h1 ref={ref} 
                                    className={`transition-all duration-500
                                            ${inView ? 'opacity-50 px-6' : 'opacity-0 px-10'} 
                                            hover:delay-75
                                            text-6xl md:text-8xl font-semibold hover:opacity-100
                                            hover:cursor-pointer select-none`}
                                    onClick={() => updateSize(i)}>
                                    {page.title}
                                </h1>
                            )}
                        </InView>
                        <Project size={pageSizes[i]} page={page}></Project>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Projects;