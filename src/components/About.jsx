import { siteData } from '../data'

export default function About() {
  const { name, title, tagline, bio, affiliation, links } = siteData

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-photo">
          <img src="profile_pic.jpg" alt={`Portrait photo of ${name}`} />
        </div>
        <div className="about-text">
          <h1>{name}</h1>
          <p className="about-title">{title}</p>
          <p className="about-tagline">{tagline}</p>
          <p className="about-affiliation">
            <a href={affiliation.university.url}>{affiliation.university.name}</a><br />
            {affiliation.faculty}<br />
            Supervised by <a href={affiliation.supervisor.url}>{affiliation.supervisor.name}</a>
          </p>
          <p className="about-bio">{bio}</p>
          <div className="about-links" aria-label="Contact and profile links">
            <a href={links.email}>Email</a>
            <span className="sep">/</span>
            <a href={links.scholar}>Google Scholar</a>
            <span className="sep">/</span>
            <a href={links.github}>GitHub</a>
            <span className="sep">/</span>
            <a href={links.linkedin}>LinkedIn</a>
            <span className="sep">/</span>
            <a href={links.cv}>CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}
