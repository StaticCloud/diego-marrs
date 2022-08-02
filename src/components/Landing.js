import React from 'react';

import html from '../icons/html5.png'
import css from '../icons/css3.png'
import js from '../icons/javascript.png'
import mongodb from '../icons/mongodb.png'
import nodejs from '../icons/node-js.png'
import react from '../icons/react.png'
import github from '../icons/github.png'

import profilePic from '../icons/pfp.jpg'

const icons = [js, react, nodejs, mongodb, html, css, github]

function Landing() {
    return (
        <section className="dark:bg-gray-800">
            <div className="dark:text-white flex flex-row md:flex-row-reverse flex-wrap mx-auto justify-center">
                <div className="max-w-md px-4">
                    <img className="py-3 rounded-full" src={profilePic}/>
                </div>
                <div className="max-w-xl px-4 flex items-center">
                    <div>
                        <p className="text-2xl py-3">Looking for full stack web developer talent?</p>
                        <h1 className="text-6xl font-semibold py-3">Hello, my name is Diego Marrs</h1>
                        <p className="text-2xl py-3">I'm a full stack web developer who is proficient in various web developer technologies including:</p>
                        <div className="flex flex-row flex-wrap">
                            {icons.map((icon, i) => 
                                <img className="p-2" key={i} width="65px" src={icon}></img>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Landing;