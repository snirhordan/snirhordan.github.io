import { talks } from '../data'

export default function Talks() {
  return (
    <section id="talks">
      <h2>Talks</h2>
      <ul className="talks-list">
        {talks.map((talk, i) => (
          <li key={i}>
            <span className="talk-venue">
              {talk.venueUrl ? (
                <><a href={talk.venueUrl}>{talk.venue}</a>{talk.suffix}</>
              ) : (
                talk.venue
              )}
            </span>
            <span className="talk-date">{talk.date}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
