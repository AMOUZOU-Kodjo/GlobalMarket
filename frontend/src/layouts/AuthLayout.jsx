import { Outlet, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function AuthLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex justify-center mb-4">
            <Link to="/" className="flex items-center gap-2 text-primary">
              <img src="/logo.png" alt="MarcoStore" className="h-8 w-8 object-contain" />
              <span className="text-2xl font-bold">MarcoStore</span>
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
