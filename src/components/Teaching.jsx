import { teaching } from '../data'

export default function Teaching() {
  return (
    <section id="teaching">
      <h2>Teaching</h2>
      {teaching.map((item, i) => (
        <div key={i} className="teaching-item">
          <div className="teaching-header">
            <h3>{item.title}</h3>
            <span className="teaching-year">{item.years}</span>
          </div>
          <p className="teaching-role">{item.role}</p>
          <p className="teaching-details" dangerouslySetInnerHTML={{ __html: item.details }} />
        </div>
      ))}
    </section>
  )
}
