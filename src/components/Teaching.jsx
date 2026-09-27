import { teaching } from '../data'

export default function Teaching() {
  return (
    <section id="teaching">
      <h2>Teaching</h2>
      {teaching.map((item, i) => (
        <div key={i} className="entry">
          <div className="entry-head">
            <h3>{item.title}</h3>
            <span className="entry-meta">{item.years}</span>
          </div>
          <p className="entry-role">{item.role}</p>
          <p dangerouslySetInnerHTML={{ __html: item.details }} />
        </div>
      ))}
    </section>
  )
}
