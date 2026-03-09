import { insights } from '../data'

export default function Insights() {
  return (
    <section id="insights" className="section-card">
      <h2>Insights</h2>
      <p className="insights-subtitle">Research explained for practitioners — what we built, why it matters, and where it applies.</p>
      <div className="insights-grid">
        {insights.map((post) => (
          <a key={post.title} href={post.paperUrl} className="insight-card">
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <div className="insight-footer">
              <div className="insight-domains">
                {post.domains.map((d) => (
                  <span key={d} className="domain-tag">{d}</span>
                ))}
              </div>
              <span className="pub-btn">Read paper</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
