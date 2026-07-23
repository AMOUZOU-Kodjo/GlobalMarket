import { useState, useRef, useEffect, useCallback } from 'react'
import { Search, X, Loader2 } from 'lucide-react'
import debounce from '../../utils/debounce'

export function SearchBar({
  value = '',
  onChange,
  onSearch,
  onSuggest,
  suggestions = [],
  placeholder = 'Rechercher...',
  loading = false,
  className = '',
}) {
  const [query, setQuery] = useState(value)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const wrapperRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    setQuery(value)
  }, [value])

  const debouncedSuggest = useCallback(
    debounce((val) => {
      if (onSuggest && val.trim()) {
        onSuggest(val.trim())
      }
    }, 300),
    [onSuggest]
  )

  useEffect(() => {
    return () => debouncedSuggest.cancel()
  }, [debouncedSuggest])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowSuggestions(false)
        setActiveIndex(-1)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleChange = (e) => {
    const val = e.target.value
    setQuery(val)
    setActiveIndex(-1)
    onChange?.(val)
    debouncedSuggest(val)
    if (val.trim()) {
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (activeIndex >= 0 && suggestions[activeIndex]) {
      const selected = suggestions[activeIndex]
      const selectedValue = typeof selected === 'string' ? selected : selected.label || selected.name || selected
      setQuery(selectedValue)
      onChange?.(selectedValue)
      onSearch?.(selectedValue)
    } else {
      onSearch?.(query.trim())
    }
    setShowSuggestions(false)
    setActiveIndex(-1)
    inputRef.current?.blur()
  }

  const handleSelect = (suggestion) => {
    const selectedValue = typeof suggestion === 'string' ? suggestion : suggestion.label || suggestion.name || suggestion
    setQuery(selectedValue)
    onChange?.(selectedValue)
    onSearch?.(selectedValue)
    setShowSuggestions(false)
    setActiveIndex(-1)
    inputRef.current?.blur()
  }

  const handleClear = () => {
    setQuery('')
    setActiveIndex(-1)
    setShowSuggestions(false)
    onChange?.('')
    inputRef.current?.focus()
  }

  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1))
    } else if (e.key === 'Escape') {
      setShowSuggestions(false)
      setActiveIndex(-1)
    }
  }

  const renderSuggestionLabel = (suggestion) => {
    if (typeof suggestion === 'string') return suggestion
    return suggestion.label || suggestion.name || String(suggestion)
  }

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit} role="search" aria-label="Rechercher">
        <label className="input input-bordered flex items-center gap-2 w-full focus-within:input-primary transition-colors">
          <Search size={16} className="opacity-50 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              if (query.trim() && suggestions.length > 0) {
                setShowSuggestions(true)
              }
            }}
            className="grow"
            role="combobox"
            aria-expanded={showSuggestions}
            aria-autocomplete="list"
            autoComplete="off"
          />
          {loading && <Loader2 size={16} className="animate-spin opacity-50" />}
          {query && !loading && (
            <button
              type="button"
              className="btn btn-ghost btn-circle btn-xs"
              onClick={handleClear}
              aria-label="Effacer"
            >
              <X size={14} />
            </button>
          )}
        </label>
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <ul
          className="absolute left-0 right-0 top-full mt-1 bg-base-100 rounded-box shadow-xl border border-base-300 max-h-72 overflow-y-auto z-50"
          role="listbox"
        >
          {suggestions.map((suggestion, index) => (
            <li key={typeof suggestion === 'string' ? suggestion : suggestion.id || index}>
              <button
                type="button"
                className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 transition-colors ${
                  activeIndex === index
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-base-200'
                }`}
                onClick={() => handleSelect(suggestion)}
                role="option"
                aria-selected={activeIndex === index}
              >
                <Search size={14} className="opacity-30 shrink-0" />
                <span className="truncate">{renderSuggestionLabel(suggestion)}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBar
