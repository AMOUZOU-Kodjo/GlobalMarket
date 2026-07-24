import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Header } from '../components/organisms/Header'
import { MessageCircle, Send, Search, Package, ArrowLeft } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import messageService from '../services/message.service'

export default function MessagesPage() {
  const { user } = useAuth()
  const { t } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [conversations, setConversations] = useState([])
  const [selectedConvo, setSelectedConvo] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const messagesEndRef = useRef(null)
  const pollRef = useRef(null)
  const hasAutoOpened = useRef(false)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const fetchConversations = useCallback(async () => {
    try {
      const data = await messageService.getConversations()
      setConversations(data)
    } catch { /* silent */ }
  }, [])

  const fetchMessages = useCallback(async (conversationId) => {
    try {
      const res = await messageService.getMessages(conversationId)
      setMessages(res.data || res)
      scrollToBottom()
    } catch { /* silent */ }
  }, [scrollToBottom])

  useEffect(() => {
    if (!user) return
    setLoading(true)
    fetchConversations().finally(() => setLoading(false))
  }, [user, fetchConversations])

  useEffect(() => {
    if (!user || hasAutoOpened.current || loading) return
    const toId = searchParams.get('to')
    if (!toId) return
    hasAutoOpened.current = true
    setSearchParams({}, { replace: true })

    messageService.findOrCreate(toId).then((convo) => {
      fetchConversations().then(() => {
        const full = { id: convo.id, other: { id: toId }, lastMessage: null, lastMessageAt: convo.createdAt, unread: 0 }
        setSelectedConvo(full)
        fetchMessages(convo.id)
        messageService.markAsRead(convo.id)
      })
    }).catch(() => {})
  }, [user, loading, searchParams, setSearchParams, fetchConversations, fetchMessages])

  useEffect(() => {
    if (!user) return
    pollRef.current = setInterval(() => {
      fetchConversations()
      if (selectedConvo) fetchMessages(selectedConvo.id)
    }, 10000)
    return () => clearInterval(pollRef.current)
  }, [user, selectedConvo, fetchConversations, fetchMessages])

  const handleSelectConvo = async (convo) => {
    setSelectedConvo(convo)
    setMessages([])
    await fetchMessages(convo.id)
    await messageService.markAsRead(convo.id)
    setConversations(prev => prev.map(c => c.id === convo.id ? { ...c, unread: 0 } : c))
  }

  const handleSend = async (e) => {
    e.preventDefault()
    if (!newMessage.trim() || sending) return
    setSending(true)
    try {
      const msg = await messageService.sendMessage({
        recipientId: selectedConvo.other.id,
        content: newMessage.trim(),
        conversationId: selectedConvo.id,
      })
      setMessages(prev => [...prev, msg])
      setNewMessage('')
      scrollToBottom()
      setConversations(prev => prev.map(c =>
        c.id === selectedConvo.id
          ? { ...c, lastMessage: newMessage.trim(), lastMessageAt: new Date() }
          : c
      ))
    } catch { /* silent */ }
    setSending(false)
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <MessageCircle size={48} className="mx-auto mb-4 text-base-content/30" />
        <h2 className="text-xl font-bold mb-2">{t('messages.loginRequired')}</h2>
        <Link to="/login" className="btn btn-primary mt-4">{t('nav.signIn')}</Link>
      </div>
    )
  }

  const filteredConvos = conversations.filter(c =>
    c.other.name?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const formatTime = (date) => {
    const d = new Date(date)
    const now = new Date()
    const diff = now - d
    if (diff < 86400000) return d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    if (diff < 604800000) return d.toLocaleDateString('fr-FR', { weekday: 'short' })
    return d.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })
  }

  const getInitial = (name) => name?.charAt(0)?.toUpperCase() || '?'

  return (
    <div className="container mx-auto px-4 py-8">
      <Header
        title={t('messages.title')}
        subtitle={t('messages.subtitle')}
        breadcrumbs={[{ label: t('nav.home'), href: '/' }, { label: t('messages.title') }]}
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
                  placeholder={t('messages.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="grow text-sm"
                />
              </label>
            </div>
            <div className="flex-1 overflow-y-auto">
              {loading ? (
                <div className="p-8 text-center text-sm text-base-content/50">
                  <span className="loading loading-spinner loading-sm"></span>
                </div>
              ) : filteredConvos.length === 0 ? (
                <div className="p-8 text-center text-sm text-base-content/50">
                  {t('messages.noConversations')}
                </div>
              ) : (
                filteredConvos.map((convo) => (
                  <button
                    key={convo.id}
                    className={`w-full text-left p-3 hover:bg-base-200 transition-colors border-b border-base-100 ${
                      selectedConvo?.id === convo.id ? 'bg-primary/5 border-l-2 border-l-primary' : ''
                    }`}
                    onClick={() => handleSelectConvo(convo)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="avatar placeholder shrink-0">
                        <div className="bg-primary/10 text-primary w-10 rounded-full">
                          <span className="text-sm font-bold">{getInitial(convo.other.name)}</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm truncate">{convo.other.name}</span>
                          <span className="text-xs text-base-content/50 shrink-0">{formatTime(convo.lastMessageAt)}</span>
                        </div>
                        <p className="text-xs text-base-content/60 truncate mt-0.5">{convo.lastMessage || t('messages.noMessages')}</p>
                      </div>
                      {convo.unread > 0 && (
                        <span className="badge badge-primary badge-sm shrink-0">{convo.unread}</span>
                      )}
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Chat area */}
          <div className={`flex-1 flex flex-col ${selectedConvo ? 'flex' : 'hidden md:flex'}`}>
            {selectedConvo ? (
              <>
                <div className="p-3 border-b border-base-200 flex items-center gap-3">
                  <button className="btn btn-ghost btn-sm md:hidden" onClick={() => { setSelectedConvo(null); setMessages([]) }}>
                    <ArrowLeft size={16} />
                  </button>
                  <div className="avatar placeholder">
                    <div className="bg-primary/10 text-primary w-8 rounded-full">
                      <span className="text-xs font-bold">{getInitial(selectedConvo.other.name)}</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{selectedConvo.other.name}</p>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.senderId === user.id ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[75%] rounded-xl px-4 py-2 ${
                        msg.senderId === user.id
                          ? 'bg-primary text-primary-content'
                          : 'bg-base-200 text-base-content'
                      }`}>
                        <p className="text-sm">{msg.content}</p>
                        <p className={`text-[10px] mt-1 ${msg.senderId === user.id ? 'text-primary-content/70' : 'text-base-content/50'}`}>
                          {formatTime(msg.createdAt)}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSend} className="p-3 border-t border-base-200 flex gap-2">
                  <input
                    type="text"
                    placeholder={t('messages.writeMessage')}
                    className="input input-bordered flex-1"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    disabled={sending}
                  />
                  <button type="submit" className="btn btn-primary btn-circle" disabled={!newMessage.trim() || sending}>
                    {sending ? <span className="loading loading-spinner loading-xs"></span> : <Send size={16} />}
                  </button>
                </form>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-base-content/40">
                <div className="text-center">
                  <MessageCircle size={48} className="mx-auto mb-3 opacity-30" />
                  <p className="text-sm">{t('messages.selectConversation')}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
