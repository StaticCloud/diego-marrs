import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import Project from './Project';

function Projects() {

    const pages = [
        'Beet Hub',
        'Pantry', 
        'My Tech Blog',
        'Password Generator'
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
                                    {page}
                                </h1>
                            )}
                        </InView>
                        <Project size={pageSizes[i]}></Project>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Projects;