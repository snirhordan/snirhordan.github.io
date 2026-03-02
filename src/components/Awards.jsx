import { awards } from '../data'

export default function Awards() {
  return (
    <section id="awards">
      <h2>Awards</h2>
      <ul className="awards-list">
        {awards.map((award, i) => (
          <li key={i}>
            <span className="award-year">{award.year}</span>
            <span dangerouslySetInnerHTML={{ __html: award.text }} />
          </li>
        ))}
      </ul>
    </section>
  )
}
