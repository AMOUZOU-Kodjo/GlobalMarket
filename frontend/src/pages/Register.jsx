// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useAuth } from '../context/AuthContext'
// import { authAPI } from '../services/api'
// import { Mail, Lock, User, UserPlus } from 'lucide-react'

// export default function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   })
//   const [error, setError] = useState('')
//   const [loading, setLoading] = useState(false)
//   const { login } = useAuth()
//   const navigate = useNavigate()

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setError('')

//     if (formData.password !== formData.confirmPassword) {
//       setError('Les mots de passe ne correspondent pas')
//       return
//     }

//     setLoading(true)

//     try {
//       const { user, accessToken } = await authAPI.register({
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//       })
//       login(user, accessToken)
//       navigate('/')
//     } catch (err) {
//       setError(err.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div >
//       <h2 className="text-2xl font-bold text-center mb-6">Inscription</h2>

//       {error && (
//         <div className="alert alert-error mb-4">
//           <span>{error}</span>
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <label className="input input-bordered w-full flex items-center gap-2">
//           <User size={16} className="opacity-50" />
//           <input
//             type="text"
//             name="name"
//             placeholder="Nom complet"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="grow"
//           />
//         </label>

//         <label className="input input-bordered w-full flex items-center gap-2">
//           <Mail size={16} className="opacity-50" />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="grow"
//           />
//         </label>

//         <label className="input input-bordered w-full flex items-center gap-2">
//           <Lock size={16} className="opacity-50" />
//           <input
//             type="password"
//             name="password"
//             placeholder="Mot de passe"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             minLength={6}
//             className="grow"
//           />
//         </label>

//         <label className="input input-bordered w-full flex items-center gap-2">
//           <Lock size={16} className="opacity-50" />
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirmer le mot de passe"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//             minLength={6}
//             className="grow"
//           />
//         </label>

//         <button
//           type="submit"
//           className="btn btn-primary w-full"
//           disabled={loading}
//         >
//           {loading ? (
//             <span className="loading loading-spinner loading-sm"></span>
//           ) : (
//             <>
//               <UserPlus size={18} />
//               Créer mon compte
//             </>
//           )}
//         </button>
//       </form>

//       <p className="text-center mt-4 text-sm">
//         <span className='mx-6'>Déjà un compte ?</span>
//         <Link to="/login" className="link link-primary no-underline">
//           Se connecter
//         </Link>
//       </p>
//     </div>
//   );
// }
