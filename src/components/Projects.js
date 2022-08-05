import React from 'react';
import { InView } from 'react-intersection-observer';

function Projects() {

    const pages = [
        'Beet Hub',
        'Pantry', 
        'My Tech Blog',
        'Password Generator'
    ]

    return (
        <section className="min-h-screen flex flex-col w-full dark:bg-gray-900 dark:text-white py-20 z-40 relative">
            <div className="flex items-center">
                <h1 className="text-3xl md:text-6xl font-semibold inline-block p-4 mx-auto">Projects</h1>
            </div>
            <div className="flex-1 flex flex-col justify-between py-9">
                {pages.map((page, i) => 
                    <InView threshold="1">
                        {({ inView, ref }) => (
                            <h1 ref={ref} key={pages[i]} 
                                className={`transition-all duration-500
                                        ${inView ? 'opacity-50 px-6' : 'opacity-0 px-10'} 
                                        hover:delay-75
                                        text-6xl md:text-8xl font-semibold hover:opacity-100`}>
                                {page}
                            </h1>
                        )}
                    </InView>
                )}
            </div>
        </section>
    );
}

export default Projects;