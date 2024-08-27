import React from 'react';
import { InView } from 'react-intersection-observer';
import Project from './Project';

import vinylshelf from '../icons/vinylshelf.png';
import codeCascade from '../icons/code-cascade.png'
import passwordGen from '../icons/password-gen.png'
import weatherDash from '../icons/weather-dash.png'

function Projects() {

    const pages = [
        {
            title: 'Vinyl Shelf',
            stack: ['PostgreSQL', 'Express.js', 'React', 'Node.js', 'Prisma'],
            image: vinylshelf,
            github: 'https://github.com/StaticCloud/Vinyl-Shelf',
            app: 'https://vinyl-shelf.up.railway.app/',
            description: 'A platform for vinyl collectors to log and share their collections.',
            isProject: true
        },
        {
            title: 'Code Cascade',
            stack: ['Next', 'React', 'Sanity.io'],
            image: codeCascade,
            github: 'https://github.com/StaticCloud/Code-Cascade',
            app: 'https://code-cascade-bexh.vercel.app/',
            description: 'A web development blog that is tailored towards developers of all skill levels.',
            isProject: true
        },
        {
            title: 'Weather Pal',
            stack: ['Svelte', 'JavaScript', 'CSS'],
            image: weatherDash,
            github: 'https://github.com/StaticCloud/Weather-Pal',
            app: 'https://staticcloud.github.io/Weather-Pal/',
            description: 'A simple weather dashboard that developed using Svelte.',
            isProject: true
        },
        {
            title: 'Password Generator',
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: passwordGen,
            app: 'https://staticcloud.github.io/Password-Generator/',
            github: 'https://github.com/StaticCloud/Password-Generator',
            description: 'One of my earliest projects that I still use. A custom password generator that provides a quick, secure password.',
            isProject: true
        }
    ]

    return (
        <section id="projects" className="flex flex-col w-full dark:bg-gray-900 dark:text-white py-20 z-40 relative">
            <div className="flex items-center">
                <h1 className="text-3xl md:text-6xl font-semibold inline-block p-4 mx-auto">Projects</h1>
            </div>
                {pages.map((page, i) => 
                    <InView key={i} threshold="0.5">
                        {({ inView, ref }) => (
                            <div ref={ref} className={`transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
                                <Project page={page}></Project>
                            </div>
                        )}
                    </InView>
                )}
        </section>
    );
}

export default Projects;