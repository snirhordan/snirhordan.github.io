import { talks } from '../data'

export default function Talks() {
  return (
    <section id="talks">
      <h2>Talks</h2>
      <ul className="plain-list">
        {talks.map((talk, i) => (
          <li key={i}>
            <span>
              {talk.venueUrl ? <a href={talk.venueUrl}>{talk.venue}</a> : talk.venue}
              {talk.suffix}
            </span>
            <span className="date">{talk.date}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
