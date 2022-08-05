import React from 'react';

import Prev from '../icons/ResumePrev.png';

function Resume() {
    return (
        <section className="min-h-screen flex flex-col w-full dark:bg-gray-900 dark:text-white py-20 z-40 relative">
            <div className="flex items-center">
                <h1 className="text-3xl md:text-6xl font-semibold inline-block p-4 mx-auto">Resume</h1>
            </div>
            <div className="flex-1 flex flex-wrap md:flex-row-reverse items-center h-full justify-center">
                <div className="max-w-md px-6">
                    <img src={Prev} className="p-4"></img>
                </div>
                <div className="max-w-xl px-6">
                    <h1 className="text-3xl md:text-6xl font-semibold py-3">Learn more about me and my work!</h1>
                    <p className="text-lg md:text-2xl py-3">Feel free to view my resume to learn more about my projects, work history, qualifications, and more.</p>
                    <p className="text-xl md:text-3xl py-3 text-red-600">Download</p>
                </div>
            </div>
        </section>
    );
}

export default Resume;