import { useEffect, useRef, type RefObject } from 'react'

/**
 * Custom hook: IntersectionObserver-based scroll reveal.
 * Adds the 'on' class when element enters viewport.
 */
export function useScrollReveal<T extends HTMLElement>(
  threshold = 0.1
): RefObject<T | null> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

/**
 * Custom hook: batch-observe all [data-reveal] children inside a container.
 */
export function useScrollRevealAll<T extends HTMLElement>(
  threshold = 0.1
): RefObject<T | null> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const elements = container.querySelectorAll('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
