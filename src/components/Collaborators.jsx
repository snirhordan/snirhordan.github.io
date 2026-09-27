import { collaborators } from '../data'

export default function Collaborators() {
  return (
    <section id="collaborators">
      <h2>Collaborators</h2>
      <p className="inline-list">
        {collaborators.flatMap((person, i) => {
          const el = person.url
            ? <a key={person.name} href={person.url}>{person.name}</a>
            : <span key={person.name}>{person.name}</span>
          return i < collaborators.length - 1 ? [el, ', '] : [el]
        })}
      </p>
    </section>
  )
}
