import { useRef, useEffect } from 'react'

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  stagger = false,
  threshold = 0.15,
  as: Tag = 'div',
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const dirClass = direction === 'left' ? 'sr-left'
      : direction === 'right' ? 'sr-right'
      : direction === 'scale' ? 'sr-scale'
      : ''

    const classes = ['sr']
    if (dirClass) classes.push(dirClass)
    if (stagger) classes.push('sr-stagger')
    el.classList.add(...classes)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('sr-visible')
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [direction, stagger, threshold])

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
