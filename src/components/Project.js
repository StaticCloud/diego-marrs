import React from 'react';

function Project({ size, page }) {
    return (
        <section>
            <div className={`transition-all flex flex-wrap md:flex-row-reverse items-center justify-center 
                            py-${size} 
                            ${size === 0 ? 'opacity-0' : 'opacity-100'}
                            ${size === 0 ? 'h-0' : ''}`}>
                <div className={`max-w-2xl px-6 select-none`}>
                    <img src={page.image}
                         className="md:m-4 rounded-3xl"></img>
                </div>
                <div className={`max-w-2xl px-6 select-none`}>
                    <h1 className="text-3xl md:text-6xl font-semibold py-3">{page.title}</h1>
                    <div className="flex flex-wrap">
                        {page.stack.map((technology, i) => 
                            <p key={i} className="pr-1 text-gray-400 text-sm md:text-lg">
                                {technology} 
                                {i < page.stack.length - 1 ? ' |' : ''}
                            </p>
                        )}
                    </div>
                    <p className="text-lg md:text-2xl py-3">{page.description}</p>
                    <a className="transition-all my-1 mr-3 text-lg md:text-2xl text-gray-400 hover:text-white" href={page.app} target="_blank">
                        Deployed App
                    </a>
                    <p className="inline-flex text-2xl"> | </p>
                    <a className="transition-all my-1 ml-3 text-lg md:text-2xl text-gray-400 hover:text-white" href={page.github} target="_blank">
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Project;