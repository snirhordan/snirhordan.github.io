import { insights } from '../data'

export default function Insights() {
  return (
    <section id="research">
      <h2>Research Highlights</h2>
      {insights.map((post) => (
        <div key={post.title} className="highlight">
          <h3>{post.title}</h3>
          <p>{post.summary}</p>
          <a href={post.paperUrl} className="read-more">Read the paper &rarr;</a>
        </div>
      ))}
    </section>
  )
}
