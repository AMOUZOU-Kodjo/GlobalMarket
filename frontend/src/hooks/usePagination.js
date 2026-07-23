import { useState, useCallback, useMemo } from 'react'

export default function usePagination(totalItems, pageSize = 10) {
  const [page, setPage] = useState(1)

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(totalItems / pageSize)),
    [totalItems, pageSize]
  )

  const goToPage = useCallback(
    (newPage) => {
      const clamped = Math.max(1, Math.min(newPage, totalPages))
      setPage(clamped)
    },
    [totalPages]
  )

  const nextPage = useCallback(() => {
    setPage((prev) => Math.min(prev + 1, totalPages))
  }, [totalPages])

  const prevPage = useCallback(() => {
    setPage((prev) => Math.max(prev - 1, 1))
  }, [])

  const canNext = page < totalPages
  const canPrev = page > 1

  return {
    page,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    canNext,
    canPrev,
  }
}
