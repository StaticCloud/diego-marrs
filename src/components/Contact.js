import React from "react";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

import email from '../icons/svgs/envelope-solid.svg';
import linkedin from '../icons/svgs/linkedin-in.svg';
import github from '../icons/svgs/github.svg';

import coffee from '../icons/coffee.jpg'

function Contact() {

    const contactDetails = [
        [email, "diegomarrs@proton.me"],
        [linkedin, "https://www.linkedin.com/in/diego-marrs/"],
        [github, "https://github.com/StaticCloud"]
    ];

    const [ref, inView] = useInView({
        threshold: 0.7
    });

    const fade = useSpring({
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 50
    })

    return (
        <section id="contact" className="min-h-screen flex flex-col w-full dark:bg-gray-900 dark:text-white py-20 z-40 relative">
            <div className="flex items-center">
                <h1 className="text-3xl md:text-6xl font-semibold inline-block p-4 mx-auto">Contact</h1>
            </div>
            <animated.div style={fade} ref={ref} className="flex-1 flex flex-wrap md:flex-row-reverse items-center h-full justify-center">
                <div className="max-w-xs md:max-w-sm px-4">
                    <img className="py-3 rounded-full" src={coffee}/>
                </div>
                <div className="max-w-xl px-5 flex items-center">
                    <div>
                        <h1 className="text-3xl md:text-6xl font-semibold py-2 md:py-3">Let's get in touch!</h1>
                        <p className="text-lg md:text-2xl py-2 md:py-3 text-gray-400">Whether you're looking to add new talent to your team, or just wish to make an introduction and stay connected, I'd be happy to chat!</p>
                        <div className="flex flex-col">
                            {contactDetails.map((contact, i) => 
                                <div key={i} className="flex">
                                    <img className="p-1 md:p-2 w-10 md:w-12" src={contact[0]}></img>
                                    {contact[1] != "diegomarrs@proton.me" ? (
                                        <a href={contact[1]} target="_blank" className="text-lg md:text-2xl py-3 md:py-3 px-2 hover:cursor-pointer transition-all text-gray-400 hover:text-white">{contact[1].split('//')[1]}</a>
                                    ) : (
                                        <a href={`mailto:${contact[1]}`} target="_blank" className="text-lg md:text-2xl py-3 md:py-3 px-2 hover:cursor-pointer transition-all text-gray-400 hover:text-white">{contact[1]}</a>
                                    )}
                                    
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </animated.div>
        </section>
    )
}

export default Contact;