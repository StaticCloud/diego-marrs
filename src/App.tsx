import './App.css'
import landingImage from '../src/assets/images/landing-image.png';
import Section from './components/Section'
import Landing from './components/Landing'
import Projects from './components/Projects'
import About from './components/About';

function App() {

  return (
    <>
      <Section background={landingImage}>
        <Landing/>
      </Section>
      <Section>
        <Projects/>
      </Section>
      <Section>
        <About/>
      </Section>
    </>
  )
}

export default App
