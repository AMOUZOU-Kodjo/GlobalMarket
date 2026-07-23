import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex justify-center mb-4">
            <Link to="/" className="flex items-center gap-2 text-primary">
              <img src="/logo.png" alt="GlobalMarket" className="h-8 w-8 object-contain" />
              <span className="text-2xl font-bold">GlobalMarket</span>
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
