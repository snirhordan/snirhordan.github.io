import { codeProjects } from '../data'

export default function Code() {
  return (
    <section id="code">
      <h2>Code</h2>
      {codeProjects.map((project) => (
        <div key={project.name} className="entry">
          <div className="entry-head">
            <a href={project.url} className="code-name">{project.name}</a>
            {project.highlight && <span className="entry-meta">{project.highlight}</span>}
          </div>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  )
}
