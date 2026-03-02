import { navLinks } from '../data'
import useScrollShadow from '../hooks/useScrollShadow'
import useScrollSpy from '../hooks/useScrollSpy'

export default function Navbar() {
  useScrollShadow()
  useScrollSpy()

  function handleClick(e) {
    const href = e.currentTarget.getAttribute('href')
    if (!href.startsWith('#')) return
    e.preventDefault()
    const target = document.getElementById(href.slice(1))
    if (target) {
      const navHeight = document.getElementById('navbar').offsetHeight
      const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 10
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <nav id="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#about" className="nav-name" onClick={handleClick}>Snir Hordan</a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={link.href.startsWith('#') ? handleClick : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
