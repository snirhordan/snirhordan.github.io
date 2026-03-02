import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('main > section:not(:first-child), footer')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
