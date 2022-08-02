import React from 'react';

function Navbar() {
    return (
        <nav className="flex flex-wrap p-4 dark:bg-gray-800 dark:text-white transition-all duration-700 sticky top-0">
            <h1 className="flex-1 font-semibold text-6xl px-5">Diego Marrs</h1>
            <div className="flex-1 flex items-center justify-end px-5">
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