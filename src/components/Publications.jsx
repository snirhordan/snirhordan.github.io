import { publications } from '../data'
import PublicationCard from './PublicationCard'

export default function Publications() {
  return (
    <section id="publications">
      <h2>Publications</h2>
      {publications.map((pub) => (
        <PublicationCard key={pub.id} pub={pub} />
      ))}
    </section>
  )
}
