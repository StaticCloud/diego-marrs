import React, { useState } from 'react';

import Nav from '../components/Navbar'
import About from '../components/About'
import Landing from '../components/Landing'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

function Home() {
    const [mode, setMode] = useState('dark')

    return (
        <div id="top" className={`${mode}`}>
            <Nav/>
            <Landing/>
            <div className='h-screen'></div>
            <About/>
            <Projects/>
            <Contact/>
            {/* <Resume/> */}
        </div>
    );
}

export default Home;