import './App.css'
import { useEffect } from 'react';
import landingImage from '../src/assets/images/landing-image.png';
import Section from './components/Section'
import Landing from './components/Landing'
import Projects from './components/Projects'
import About from './components/About';
import Contact from './components/Contact';

function App() {

  useEffect(() => {
    document.title = "Diego Marrs"
  }, [])

  return (
    <>
      <Section background={landingImage}>
        <Landing/>
      </Section>
      <Section>
        <About/>
      </Section>
      <Section>
        <Projects/>
      </Section>
      <Section>
        <Contact/>
      </Section>
    </>
  )
}

export default App
