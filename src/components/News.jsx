import { useState } from 'react'
import { newsItems } from '../data'

export default function News() {
  const [expanded, setExpanded] = useState(false)
  const hasHidden = newsItems.some((item) => item.hidden)

  return (
    <section id="news">
      <h2>News</h2>
      <ul className="dated-list">
        {newsItems.map((item, i) => (
          <li key={i} className={item.hidden && !expanded ? 'news-hidden' : undefined}>
            <span className="date">{item.date}</span>
            <span dangerouslySetInnerHTML={{ __html: item.content }} />
          </li>
        ))}
      </ul>
      {hasHidden && (
        <button className="text-btn" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
          {expanded ? 'Show less' : 'Show older news'}
        </button>
      )}
    </section>
  )
}
