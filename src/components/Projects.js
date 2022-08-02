import React from 'react';

function Projects() {
    return (
        <section className="min-h-screen flex flex-col w-full dark:bg-gray-900 dark:text-white py-20 z-40 relative">
            <div className="flex items-center">
                <h1 className="text-6xl font-semibold inline-block p-4 mx-auto">Projects</h1>
            </div>
            <div className="flex-1 flex flex-col justify-between py-9">
                <h1 className="text-6xl md:text-8xl font-semibold px-6">Beet Hub</h1>
                <h1 className="text-6xl md:text-8xl font-semibold px-6">Pantry</h1>
                <h1 className="text-6xl md:text-8xl font-semibold px-6">My Tech Blog</h1>
                <h1 className="text-6xl md:text-8xl font-semibold px-6">Password Generator</h1>
            </div>
        </section>
    );
}

export default Projects;