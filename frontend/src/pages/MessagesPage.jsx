import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/organisms/Header'
import { MessageCircle, Send, Search, User, Package } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const MOCK_CONVERSATIONS = [
  {
    id: 1,
    name: 'Fatou Diallo — Mode Fatou',
    lastMessage: 'Le colis a bien été expédié, vous le recevrez demain !',
    time: 'Il y a 2h',
    unread: 2,
    avatar: 'F',
    orderId: 'CMD-2026-0042',
  },
  {
    id: 2,
    name: 'TechStore Pro',
    lastMessage: 'Merci pour votre achat ! N\'hésitez pas si vous avez des questions.',
    time: 'Il y a 1j',
    unread: 0,
    avatar: 'T',
    orderId: 'CMD-2026-0038',
  },
  {
    id: 3,
    name: 'Support GlobalMarket',
    lastMessage: 'Votre remboursement a été traité. Il apparaîtra sous 3-5 jours.',
    time: 'Il y a 3j',
    unread: 1,
    avatar: 'S',
    orderId: null,
  },
]

const MOCK_MESSAGES = [
  { id: 1, sender: 'seller', text: 'Bonjour ! Votre commande a bien été reçue.', time: '14:30' },
  { id: 2, sender: 'user', text: 'Super, merci ! Quand sera-t-elle expédiée ?', time: '14:35' },
  { id: 3, sender: 'seller', text: 'Elle sera expédiée demain matin. Vous recevrez un numéro de suivi par email.', time: '14:40' },
  { id: 4, sender: 'seller', text: 'Le colis a bien été expédié, vous le recevrez demain !', time: '16:15' },
]

export default function MessagesPage() {
  const { user } = useAuth()
  const [selectedConvo, setSelectedConvo] = useState(null)
  const [newMessage, setNewMessage] = useState('')
  const [messages, setMessages] = useState(MOCK_MESSAGES)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      sender: 'user',
      text: newMessage.trim(),
      time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
    }])
    setNewMessage('')
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <MessageCircle size={48} className="mx-auto mb-4 text-base-content/30" />
        <h2 className="text-xl font-bold mb-2">Connectez-vous pour accéder à vos messages</h2>
        <Link to="/login" className="btn btn-primary mt-4">Se connecter</Link>
      </div>
    )
  }

  const filteredConvos = MOCK_CONVERSATIONS.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <Header
        title="Messages"
        subtitle="Échangez avec vos vendeurs et le support"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Messages' }]}
      />

      <div className="bg-base-100 rounded-xl shadow-sm border border-base-200 overflow-hidden" style={{ height: '600px' }}>
        <div className="flex h-full">
          {/* Sidebar conversations */}
          <div className={`w-full md:w-80 border-r border-base-200 flex flex-col ${selectedConvo ? 'hidden md:flex' : 'flex'}`}>
            <div className="p-3 border-b border-base-200">
              <label className="input input-bordered flex items-center gap-2 w-full">
                <Search size={16} className="opacity-50" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="grow text-sm"
                />
              </label>
            </div>
            <div className="flex-1 overflow-y-auto">
              {filteredConvos.map((convo) => (
                <button
                  key={convo.id}
                  className={`w-full text-left p-3 hover:bg-base-200 transition-colors border-b border-base-100 ${
                    selectedConvo?.id === convo.id ? 'bg-primary/5 border-l-2 border-l-primary' : ''
                  }`}
                  onClick={() => setSelectedConvo(convo)}
                >
                  <div className="flex items-start gap-3">
                    <div className="avatar placeholder shrink-0">
                      <div className="bg-primary/10 text-primary w-10 rounded-full">
                        <span className="text-sm font-bold">{convo.avatar}</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm truncate">{convo.name}</span>
                        <span className="text-xs text-base-content/50 shrink-0">{convo.time}</span>
                      </div>
                      <p className="text-xs text-base-content/60 truncate mt-0.5">{convo.lastMessage}</p>
                      {convo.orderId && (
                        <span className="text-[10px] text-primary mt-1 inline-flex items-center gap-1">
                          <Package size={10} /> {convo.orderId}
                        </span>
                      )}
                    </div>
                    {convo.unread > 0 && (
                      <span className="badge badge-primary badge-sm shrink-0">{convo.unread}</span>
                    )}
                  </div>
                </button>
              ))}
              {filteredConvos.length === 0 && (
                <div className="p-8 text-center text-sm text-base-content/50">
                  Aucune conversation trouvée
                </div>
              )}
            </div>
          </div>

          {/* Chat area */}
          <div className={`flex-1 flex flex-col ${selectedConvo ? 'flex' : 'hidden md:flex'}`}>
            {selectedConvo ? (
              <>
                <div className="p-3 border-b border-base-200 flex items-center gap-3">
                  <button className="btn btn-ghost btn-sm md:hidden" onClick={() => setSelectedConvo(null)}>
                    ←
                  </button>
                  <div className="avatar placeholder">
                    <div className="bg-primary/10 text-primary w-8 rounded-full">
                      <span className="text-xs font-bold">{selectedConvo.avatar}</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{selectedConvo.name}</p>
                    {selectedConvo.orderId && (
                      <p className="text-xs text-base-content/50">Commande {selectedConvo.orderId}</p>
                    )}
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[75%] rounded-xl px-4 py-2 ${
                        msg.sender === 'user'
                          ? 'bg-primary text-primary-content'
                          : 'bg-base-200 text-base-content'
                      }`}>
                        <p className="text-sm">{msg.text}</p>
                        <p className={`text-[10px] mt-1 ${msg.sender === 'user' ? 'text-primary-content/70' : 'text-base-content/50'}`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSend} className="p-3 border-t border-base-200 flex gap-2">
                  <input
                    type="text"
                    placeholder="Écrire un message..."
                    className="input input-bordered flex-1"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                  <button type="submit" className="btn btn-primary btn-circle" disabled={!newMessage.trim()}>
                    <Send size={16} />
                  </button>
                </form>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-base-content/40">
                <div className="text-center">
                  <MessageCircle size={48} className="mx-auto mb-3 opacity-30" />
                  <p className="text-sm">Sélectionnez une conversation</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
