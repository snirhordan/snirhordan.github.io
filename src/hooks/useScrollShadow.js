import { useEffect } from 'react'

export default function useScrollShadow() {
  useEffect(() => {
    function onScroll() {
      document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
