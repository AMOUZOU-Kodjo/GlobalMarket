import { Link, useNavigate } from 'react-router-dom'
import { Lock, Home, ArrowLeft, ShieldX } from 'lucide-react'

export default function UnauthorizedPage() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="text-center max-w-lg">
        <div className="relative mb-6 inline-block">
          <div className="w-32 h-32 rounded-full bg-error/10 flex items-center justify-center mx-auto">
            <Lock size={56} className="text-error" />
          </div>
          <ShieldX size={28} className="text-error absolute -bottom-1 -right-1 bg-base-100 rounded-full p-1" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-3">Accès refusé</h1>
        <p className="text-base-content/60 text-lg mb-8">
          Vous n'avez pas les permissions nécessaires pour accéder à cette page.
          <br />
          Veuillez vous connecter avec un compte autorisé ou contacter l'administration.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/" className="btn btn-primary gap-2">
            <Home size={18} />
            Retour à l'accueil
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline gap-2"
          >
            <ArrowLeft size={18} />
            Page précédente
          </button>
        </div>
      </div>
    </div>
  )
}
