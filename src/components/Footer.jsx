import { siteData } from '../data'

export default function Footer() {
  const { links } = siteData

  return (
    <footer>
      <span>&copy; 2026 Snir Hordan &middot; Last updated September 2026</span>
      <div className="footer-links">
        <a href={links.email}>Email</a>
        <a href={links.scholar}>Google Scholar</a>
        <a href={links.github}>GitHub</a>
        <a href={links.linkedin}>LinkedIn</a>
      </div>
    </footer>
  )
}
