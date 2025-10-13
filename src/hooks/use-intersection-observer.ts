// ============================================
// FILE: src/hooks/use-intersection-observer.ts
// ============================================
import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverProps {
  threshold?: number
  root?: Element | null
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = '0px',
  freezeOnceVisible = false,
}: UseIntersectionObserverProps = {}) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const elementRef = useRef<Element>(null)
  const frozen = useRef(false)

  useEffect(() => {
    const element = elementRef.current
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || !element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (freezeOnceVisible && entry.isIntersecting) {
          frozen.current = true
          observer.disconnect()
        }

        if (!frozen.current) {
          setEntry(entry)
        }
      },
      { threshold, root, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, root, rootMargin, freezeOnceVisible])

  return { ref: elementRef, entry }
}
