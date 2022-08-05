import React from 'react';

import gh from '../icons/github.png'

function Project({ size }) {
    return (
        <section>
            <div className={`transition-all flex flex-wrap md:flex-row-reverse items-center justify-center 
                            py-${size} 
                            ${size === 0 ? 'opacity-0' : 'opacity-100'}
                            ${size === 0 ? 'h-0' : ''}`}>
                <div className={`max-w-md px-6`}>
                    <img src={gh} className="p-4"></img>
                </div>
                <div className={`max-w-md px-6`}>
                    <h1 className="text-3xl md:text-6xl font-semibold py-3">Title</h1>
                    <p className="text-lg md:text-2xl py-3">Description</p>
                </div>
            </div>
        </section>
    );
}

export default Project;