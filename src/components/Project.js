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
                            <p key={i} className="pr-2 text-gray-400">
                                {technology} 
                                {i < page.stack.length - 1 ? ' |' : ''}
                            </p>
                        )}
                    </div>
                    <p className="text-lg md:text-2xl py-3">{page.description}</p>
                    <a className="my-3" href={page.github} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-github fill-gray-400" width="50px" height="50px" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Project;