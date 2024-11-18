import './App.css'
import landingImage from '../src/assets/images/landing-image.png';
import Section from './components/Section'
import Landing from './components/Landing'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <Section background={landingImage}>
        <Landing/>
      </Section>
      <Section>
        <Projects/>
      </Section>
    </>
  )
}

export default App
