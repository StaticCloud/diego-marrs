import React from 'react';

function Project({ size, page }) {
    return (
        <section>
            <div className={`transition-all flex flex-wrap md:flex-row-reverse items-center justify-center 
                            py-${size} 
                            ${size === 0 ? 'opacity-0' : 'opacity-100'}
                            ${size === 0 ? 'h-0' : ''}`}>
                <div className={`max-w-2xl px-6`}>
                    <img src={page.image}
                         className="m-4 rounded-3xl"></img>
                </div>
                <div className={`max-w-2xl px-6`}>
                    <h1 className="text-3xl md:text-6xl font-semibold py-3">{page.title}</h1>
                    <div className="flex">
                        {page.stack.map((technology, i) => 
                            <p className="pr-2 text-gray-400">
                                {technology} 
                                {i < page.stack.length - 1 ? ' |' : ''}
                            </p>
                        )}
                    </div>
                    <p className="text-lg md:text-2xl py-3">{page.description}</p>
                </div>
            </div>
        </section>
    );
}

export default Project;