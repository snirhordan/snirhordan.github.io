import { siteData } from '../data'

export default function About() {
  const { name, title, bio, affiliation, nextPosition, links } = siteData

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-photo">
          <img src="profile_pic.jpg" alt={`Portrait of ${name}`} />
        </div>
        <div className="about-text">
          <h1>{name}</h1>
          <p className="about-title">
            {title}, <a href={affiliation.university.url}>{affiliation.university.name}</a>
          </p>
          <p className="about-affiliation">
            {affiliation.faculty} &middot; Advised by <a href={affiliation.supervisor.url}>{affiliation.supervisor.name}</a>
          </p>
          {nextPosition && (
            <p className="about-title about-next">
              {nextPosition.role}, <a href={nextPosition.institution.url}>{nextPosition.institution.name}</a>
            </p>
          )}
          <p className="about-bio">{bio}</p>
          <nav className="about-links" aria-label="Contact and profiles">
            <a href={links.email}>Email</a>
            <a href={links.scholar}>Google Scholar</a>
            <a href={links.github}>GitHub</a>
            <a href={links.linkedin}>LinkedIn</a>
            <a href={links.cv}>CV</a>
          </nav>
        </div>
      </div>
    </section>
  )
}
