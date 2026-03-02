import { collaborators } from '../data'

export default function Collaborators() {
  return (
    <section id="collaborators">
      <h2>Collaborators</h2>
      <ul className="collaborators-list">
        {collaborators.map((person) => (
          <li key={person.name}>
            <a href={person.url} className="collab-pill">{person.name}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
