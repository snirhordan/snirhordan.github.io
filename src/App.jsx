import useScrollReveal from './hooks/useScrollReveal'
import Navbar from './components/Navbar'
import About from './components/About'
import News from './components/News'
import Skills from './components/Skills'
import Insights from './components/Insights'
import Awards from './components/Awards'
import Publications from './components/Publications'
import Talks from './components/Talks'
import Code from './components/Code'
import Collaborators from './components/Collaborators'
import Teaching from './components/Teaching'
import Footer from './components/Footer'

export default function App() {
  useScrollReveal()
  return (
    <>
      <Navbar />
      <main role="main">
        <About />
        <News />
        <Skills />
        <Insights />
        <Awards />
        <Publications />
        <Talks />
        <Code />
        <Collaborators />
        <Teaching />
      </main>
      <Footer />
    </>
  )
}
