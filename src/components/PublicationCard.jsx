import { useState } from 'react'

export default function PublicationCard({ pub }) {
  const [abstractOpen, setAbstractOpen] = useState(false)
  const abstractId = `abstract-${pub.id}`

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

  const isPreprint = pub.venueShort === 'arXiv'

  return (
    <article className={'pub' + (pub.featured ? ' pub--featured' : '')}>
      {pub.featured && <p className="pub-label">Featured</p>}
      <h3 className="pub-title">
        <a href={pub.titleUrl}>{pub.title}</a>
      </h3>
      <p className="pub-authors">{authorElements}</p>
      <p className="pub-venue">
        {isPreprint ? <em>{pub.venue}</em> : <><em>{pub.venue}</em> ({pub.venueShort})</>}, {pub.year}
        {pub.spotlight && <> &middot; <span className="spotlight">{pub.spotlight}</span></>}
      </p>
      <div className="pub-links">
        {pub.links.map((link) => (
          <a key={link.label} href={link.url}>{link.label}</a>
        ))}
        {pub.videoUrl && <a href={pub.videoUrl}>Video</a>}
        <button
          className="text-btn"
          style={{ marginTop: 0 }}
          onClick={() => setAbstractOpen(!abstractOpen)}
          aria-expanded={abstractOpen}
          aria-controls={abstractId}
        >
          {abstractOpen ? 'Hide abstract' : 'Abstract'}
        </button>
      </div>
      {abstractOpen && <p id={abstractId} className="pub-abstract">{pub.abstract}</p>}
    </article>
  )
}
