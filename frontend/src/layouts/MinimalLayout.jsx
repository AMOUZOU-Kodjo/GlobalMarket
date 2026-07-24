import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function MinimalLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return <Outlet />
}
