import React from 'react';

function Navbar() {
    return (
        <nav className="fixed w-full top-0 flex flex-wrap p-4 backdrop-blur-sm dark:text-white transition-all duration-700 z-50">
            <h1 className="flex-1 hidden md:block font-semibold text-6xl px-5">Diego Marrs</h1>
            <h1 className="flex-1 md:hidden font-semibold text-6xl px-5">DM</h1>
            <div className="flex-1 hidden md:flex items-center justify-end px-5">
                <ul className="flex">
                    <li className="px-4 text-2xl">about</li>
                    <li className="px-4 text-2xl">projects</li>
                    <li className="px-4 text-2xl">resume</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;