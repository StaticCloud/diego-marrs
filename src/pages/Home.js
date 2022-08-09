import React, { useState } from 'react';

import Nav from '../components/Navbar'
import Landing from '../components/Landing'
import Projects from '../components/Projects'
import Resume from '../components/Resume'

function Home() {
    const [mode, setMode] = useState('dark')

    return (
        <div id="top" className={`${mode}`}>
            <Nav/>
            <Landing/>
            <div className='h-screen'></div>
            <Projects/>
            <Resume/>
            {/* <button onClick={() => mode == 'dark' ? setMode('') : setMode('dark')}>
                Toggle Theme
            </button> */}
        </div>
    );
}

export default Home;