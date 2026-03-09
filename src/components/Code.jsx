import { codeProjects } from '../data'

export default function Code() {
  return (
    <section id="code">
      <h2>Code</h2>
      <div className="code-grid">
        {codeProjects.map((project) => (
          <a key={project.name} href={project.url} className="code-card">
            <div className="code-card-header">
              <h3>{project.name}</h3>
              {project.highlight && <span className="code-highlight">{project.highlight}</span>}
            </div>
            <p>{project.description}</p>
            {project.tags.map((tag) => (
              <span key={tag} className="code-tag">{tag}</span>
            ))}
          </a>
        ))}
      </div>
    </section>
  )
}
