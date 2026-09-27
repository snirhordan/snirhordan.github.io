import { navLinks } from '../data'
import useScrollSpy from '../hooks/useScrollSpy'

export default function Navbar() {
  useScrollSpy()

  return (
    <nav id="navbar" aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#about" className="nav-name">Snir Hordan</a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>{link.label}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}
