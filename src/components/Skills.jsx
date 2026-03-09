import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="skill-group">
            <h3>{group.category}</h3>
            <div className="skill-pills">
              {group.items.map((item) => (
                <span key={item} className="skill-pill">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
