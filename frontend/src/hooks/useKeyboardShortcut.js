import { useEffect, useCallback } from 'react'

export default function useKeyboardShortcut(key, callback, { ctrl = false, shift = false, alt = false, meta = false } = {}) {
  const handler = useCallback(
    (event) => {
      if (
        event.key.toLowerCase() === key.toLowerCase() &&
        event.ctrlKey === ctrl &&
        event.shiftKey === shift &&
        event.altKey === alt &&
        event.metaKey === meta
      ) {
        event.preventDefault()
        callback(event)
      }
    },
    [key, callback, ctrl, shift, alt, meta]
  )

  useEffect(() => {
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [handler])
}
