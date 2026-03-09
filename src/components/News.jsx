import { useState } from 'react'
import { newsItems } from '../data'

export default function News() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="news" className="section-card">
      <h2>News</h2>
      <ul className="news-list">
        {newsItems.map((item, i) => (
          <li
            key={i}
            className={item.hidden ? (expanded ? 'news-hidden news-visible' : 'news-hidden') : undefined}
          >
            <span className="news-date">{item.date}</span>
            <span dangerouslySetInnerHTML={{ __html: item.content }} />
          </li>
        ))}
      </ul>
      <button
        className="show-more-btn"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {expanded ? 'Show less' : 'Show more'}
      </button>
    </section>
  )
}
