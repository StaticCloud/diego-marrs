import React from 'react';
import { InView } from 'react-intersection-observer';
import Project from './Project';

import beethub from '../icons/beethub.png';
import pantry from '../icons/pantry.png';
import codeCascade from '../icons/code-cascade.png'
import passwordGen from '../icons/password-gen.png'
import weatherDash from '../icons/weather-dash.png'

function Projects() {

    const pages = [
        {
            title: 'Beet Hub',
            stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'GraphQL', 'Apollo Server/Client'],
            image: beethub,
            github: 'https://github.com/heatherviolet/beat-hub',
            app: 'https://blooming-tundra-89879.herokuapp.com/',
            description: 'A social platform for music enthusiasts to share, review, and discover new music albums.',
            isProject: true
        },
        {
            title: 'Pantry',
            stack: ['MySQL', 'Handlebars', 'Express.js', 'Bootstrap'],
            image: pantry,
            github: 'https://github.com/StaticCloud/Pantry',
            app: 'https://pantry-app.herokuapp.com/',
            description: 'A recipe discovery app that allows users to discover food and beverage recipes using ingredients they already own.',
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
            description: 'A simple weather dashboard developed in Svelte. Displays five-day forecast including UVI, wind speed, temperature, and humidity.',
            isProject: true
        },
        {
            title: 'Password Generator',
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: passwordGen,
            app: 'https://staticcloud.github.io/Password-Generator/',
            github: 'https://github.com/StaticCloud/Password-Generator',
            description: 'Need a quick, secure password? Look no further! Input a shuffle rate between 1 - 10,000 and generate!',
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