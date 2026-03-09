import { insights } from '../data'

export default function Insights() {
  return (
    <section id="insights">
      <h2>Insights</h2>
      <p className="insights-subtitle">Research explained for practitioners — what we built, why it matters, and where it applies.</p>
      <div className="insights-grid">
        {insights.map((post) => (
          <div key={post.title} className="insight-card">
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <div className="insight-footer">
              <div className="insight-domains">
                {post.domains.map((d) => (
                  <span key={d} className="domain-tag">{d}</span>
                ))}
              </div>
              <a href={post.paperUrl} className="pub-btn">Read paper</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
