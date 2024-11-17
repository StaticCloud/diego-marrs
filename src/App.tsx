import './App.css'
import Section from './components/Section'
import Landing from './components/Landing'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <Section>
        <Landing/>
      </Section>
      <Section>
        <Projects/>
      </Section>
    </>
  )
}

export default App
