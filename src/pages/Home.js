import React, { useState } from 'react';

import Nav from '../components/Navbar'
import Landing from '../components/Landing'
import Projects from '../components/Projects'

function Home() {

    const [mode, setMode] = useState('dark')

    return (
        <div className={`${mode}`}>
            <Nav/>
            <Landing/>
            <div className='h-screen'></div>
            <Projects/>
            {/* <button onClick={() => mode == 'dark' ? setMode('') : setMode('dark')}>
                Toggle Theme
            </button> */}
        </div>
    );
}

export default Home;