import ProtectedRoute from '../components/ProtectedRoute'

export default function DeliveryRoute({ children }) {
  return (
    <ProtectedRoute roles={['delivery', 'admin']}>
      {children}
    </ProtectedRoute>
  )
}
