import { siteData } from '../data'

export default function Footer() {
  const { links } = siteData

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-links">
          <a href={links.email}>Email</a>
          <a href={links.scholar}>Google Scholar</a>
          <a href={links.github}>GitHub</a>
          <a href={links.linkedin}>LinkedIn</a>
        </div>
        <p className="footer-copy">&copy; 2026 Snir Hordan &middot; Last updated March 2026</p>
      </div>
    </footer>
  )
}
