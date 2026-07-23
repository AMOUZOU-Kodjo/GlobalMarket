import ProtectedRoute from '../components/ProtectedRoute'

export default function SellerRoute({ children }) {
  return (
    <ProtectedRoute roles={['seller', 'admin']}>
      {children}
    </ProtectedRoute>
  )
}
