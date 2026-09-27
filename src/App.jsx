import Navbar from './components/Navbar'
import About from './components/About'
import News from './components/News'
import ResearchInterests from './components/ResearchInterests'
import Awards from './components/Awards'
import Publications from './components/Publications'
import Talks from './components/Talks'
import Code from './components/Code'
import Collaborators from './components/Collaborators'
import Teaching from './components/Teaching'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <ResearchInterests />
        <News />
        <Publications />
        <Awards />
        <Talks />
        <Teaching />
        <Code />
        <Collaborators />
      </main>
      <Footer />
    </>
  )
}
