import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Minimize2,
  ChevronLeft,
  User,
  Bot,
} from "lucide-react";
import { formatDate } from "../../utils/formatDate";

function ConversationList({ conversations, onSelect }) {
  return (
    <div className="flex-1 overflow-y-auto">
      {conversations.length === 0 && (
        <div className="text-center py-8 opacity-50">
          <MessageCircle size={24} className="mx-auto mb-2" />
          <p className="text-sm">Aucune conversation</p>
        </div>
      )}
      {conversations.map((conv) => (
        <button
          key={conv._id || conv.id}
          type="button"
          className="w-full flex items-center gap-3 p-3 hover:bg-base-200 transition-colors text-left border-b border-base-200"
          onClick={() => onSelect(conv)}
        >
          <div className="avatar placeholder flex-shrink-0">
            <div className="bg-primary text-primary-content rounded-full w-10">
              <span className="text-sm">
                {(conv.name || conv.subject || "C").charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-sm truncate">
              {conv.name || conv.subject || "Conversation"}
            </h4>
            {conv.lastMessage && (
              <p className="text-xs opacity-50 truncate">
                {conv.lastMessage}
              </p>
            )}
          </div>
          {conv.unread > 0 && (
            <span className="badge badge-primary badge-sm">{conv.unread}</span>
          )}
        </button>
      ))}
    </div>
  );
}

function MessageList({ messages = [] }) {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!messages.length) {
    return (
      <div className="flex-1 flex items-center justify-center opacity-50 py-8">
        <div className="text-center">
          <MessageCircle size={32} className="mx-auto mb-2" />
          <p className="text-sm">Envoyez un message pour démarrer la conversation</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
      {messages.map((msg, index) => {
        const isUser = msg.sender === "user" || msg.isUser;
        return (
          <div
            key={msg._id || msg.id || index}
            className={`flex gap-2 ${isUser ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`avatar placeholder flex-shrink-0 ${
                isUser ? "hidden" : ""
              }`}
            >
              <div className="bg-base-300 text-base-content rounded-full w-7">
                <Bot size={14} />
              </div>
            </div>

            <div
              className={`max-w-[80%] ${
                isUser ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block px-3 py-2 rounded-2xl text-sm ${
                  isUser
                    ? "bg-primary text-primary-content rounded-br-sm"
                    : "bg-base-200 text-base-content rounded-bl-sm"
                }`}
              >
                {msg.text || msg.content || msg.message}
              </div>
              {(msg.date || msg.timestamp || msg.createdAt) && (
                <p className="text-[10px] opacity-40 mt-0.5 px-1">
                  {formatDate(msg.date || msg.timestamp || msg.createdAt, {
                    style: "short",
                  })}
                </p>
              )}
            </div>
          </div>
        );
      })}
      <div ref={endRef} />
    </div>
  );
}

export function ChatWidget({
  conversations = [],
  messages = [],
  onSendMessage,
  onOpenConversation,
  isOpen = false,
  onToggle,
  className = "",
}) {
  const [input, setInput] = useState("");
  const [view, setView] = useState("list");
  const [activeConversation, setActiveConversation] = useState(null);
  const inputRef = useRef(null);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    onSendMessage?.(text, activeConversation);
    setInput("");
    inputRef.current?.focus();
  };

  const handleSelectConversation = (conv) => {
    setActiveConversation(conv);
    setView("chat");
    onOpenConversation?.(conv);
  };

  const handleBack = () => {
    setView("list");
    setActiveConversation(null);
  };

  const handleToggle = () => {
    onToggle?.();
    if (!isOpen) {
      setView("list");
    }
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      {isOpen && (
        <div className="mb-3 w-80 h-[460px] bg-base-100 rounded-2xl shadow-2xl border border-base-200 flex flex-col overflow-hidden">
          <div className="bg-primary text-primary-content p-3 flex items-center gap-2">
            {view === "chat" && (
              <button
                type="button"
                className="btn btn-ghost btn-xs btn-circle text-primary-content"
                onClick={handleBack}
              >
                <ChevronLeft size={18} />
              </button>
            )}
            <h3 className="font-bold text-sm flex-1 truncate">
              {view === "chat"
                ? activeConversation?.name || activeConversation?.subject || "Chat"
                : "Messages"}
            </h3>
            <button
              type="button"
              className="btn btn-ghost btn-xs btn-circle text-primary-content"
              onClick={handleToggle}
            >
              <Minimize2 size={16} />
            </button>
          </div>

          {view === "list" && (
            <ConversationList
              conversations={conversations}
              onSelect={handleSelectConversation}
            />
          )}

          {view === "chat" && (
            <>
              <MessageList messages={messages} />
              <div className="p-3 border-t border-base-200">
                <div className="join w-full">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Tapez un message..."
                    className="input input-sm join-item flex-1"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  />
                  <button
                    type="button"
                    className="btn btn-primary btn-sm join-item btn-circle"
                    disabled={!input.trim()}
                    onClick={handleSend}
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="button"
          className="btn btn-primary btn-circle w-14 h-14 shadow-lg hover:shadow-xl transition-shadow"
          onClick={handleToggle}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>
    </div>
  );
}

export default ChatWidget;
