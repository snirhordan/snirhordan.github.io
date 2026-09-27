import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <dl className="skills-list">
        {skills.map((group) => (
          <div key={group.category}>
            <dt>{group.category}</dt>
            <dd>{group.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
