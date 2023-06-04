import React from 'react';

import house from '../icons/svgs/house-solid.svg'
import github from '../icons/svgs/github.svg'

function Project({ page }) {
    return (
        <section className="flex flex-row flex-wrap-reverse w-full dark:bg-gray-900 dark:text-white relative justify-center items-center my-12 md:my-36">
            <div className="max-w-xl px-5 flex items-center">
                <div>
                    <h1 className="text-3xl md:text-5xl font-semibold py-2 md:py-3">{page.title}</h1>
                    <p className="text-lg md:text-2xl py-2 md:py-3 text-gray-400">{page.description}</p>
                    <div className="flex flex-col">
                        <div className="flex">
                            <img className="p-1 md:p-2 w-10 md:w-12" src={house} alt="deployed-icon"></img>
                            <a href={page.app} target="_blank" className="text-lg md:text-2xl py-3 md:py-3 px-2 hover:cursor-pointer transition-all text-gray-400 hover:text-white">{page.app.split('//')[1]}</a>
                        </div>
                        <div className="flex">
                            <img className="p-1 md:p-2 w-10 md:w-12" src={github} alt="github-icon"></img>
                            <a href={page.github} target="_blank" className="text-lg md:text-2xl py-3 md:py-3 px-2 hover:cursor-pointer transition-all text-gray-400 hover:text-white">{page.github.split('//')[1]}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-2xl md:max-w-md px-4">
                <img className="py-3" src={page.image} alt={page.image}/>
            </div>
        </section>
    );
}

export default Project;