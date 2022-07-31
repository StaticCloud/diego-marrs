import React, { useState } from 'react';

import Nav from '../components/Navbar'

function Home() {

    const [mode, setMode] = useState('dark')

    return (
        <div className={mode}>
            <Nav/>
            <button onClick={() => mode == 'dark' ? setMode('') : setMode('dark')}>
                Toggle Theme
            </button>
        </div>
    );
}

export default Home;