import { useState } from 'react'

export default function PublicationCard({ pub }) {
  const [abstractOpen, setAbstractOpen] = useState(false)

  const authorElements = pub.authors.flatMap((author, i) => {
    let el
    if (author.bold) {
      el = <strong key={'a' + i}>{author.name}</strong>
    } else if (author.url) {
      el = <a key={'a' + i} href={author.url}>{author.name}</a>
    } else {
      el = <span key={'a' + i}>{author.name}</span>
    }
    return i < pub.authors.length - 1 ? [el, ', '] : [el]
  })

  return (
    <div className="pub-card">
      {pub.image && (
        <div className="pub-thumb">
          <img src={pub.image} alt={pub.imageAlt} />
        </div>
      )}
      <div className="pub-details">
        <h3 className="pub-title">
          <a href={pub.titleUrl}>{pub.title}</a>
        </h3>
        <p className="pub-authors">{authorElements}</p>
        <p className="pub-venue">
          {pub.venue} (<strong>{pub.venueShort}</strong>), {pub.year}
          {pub.spotlight && <span className="spotlight">{pub.spotlight}</span>}
        </p>
        <div className="pub-links">
          {pub.links.map((link) => (
            <a key={link.label} href={link.url} className="pub-btn">{link.label}</a>
          ))}
          <button
            className="pub-btn abstract-toggle"
            onClick={() => setAbstractOpen(!abstractOpen)}
          >
            {abstractOpen ? 'Close' : 'Abstract'}
          </button>
        </div>
        <div className={'abstract-content' + (abstractOpen ? ' open' : '')}>
          {pub.abstract}
        </div>
      </div>
    </div>
  )
}
