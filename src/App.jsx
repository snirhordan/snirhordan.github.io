import Navbar from './components/Navbar'
import About from './components/About'
import News from './components/News'
import Insights from './components/Insights'
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
        <News />
        <Publications />
        <Insights />
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
