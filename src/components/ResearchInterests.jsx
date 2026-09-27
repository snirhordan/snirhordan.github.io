import { researchInterests } from '../data'

export default function ResearchInterests() {
  return (
    <section id="interests">
      <h2>Research Interests</h2>
      <ul className="interests-list">
        {researchInterests.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}
