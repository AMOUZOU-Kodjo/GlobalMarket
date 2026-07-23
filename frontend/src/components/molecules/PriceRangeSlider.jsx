import { useState, useRef, useCallback, useEffect } from 'react'
import formatCurrency from '../../utils/formatCurrency'

export function PriceRangeSlider({
  min = 0,
  max = 100000,
  value = [min, max],
  onChange,
  step = 100,
  formatValue,
}) {
  const [minVal, maxVal] = value
  const trackRef = useRef(null)
  const [dragging, setDragging] = useState(null)

  const format = formatValue || formatCurrency

  const getPercent = (val) => ((val - min) / (max - min)) * 100

  const clamp = (val) => Math.min(Math.max(val, min), max)

  const roundToStep = (val) => Math.round(val / step) * step

  const resolveValueFromPosition = useCallback(
    (clientX) => {
      const track = trackRef.current
      if (!track) return minVal
      const rect = track.getBoundingClientRect()
      const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
      return roundToStep(min + percent * (max - min))
    },
    [min, max, step, minVal]
  )

  const handlePointerDown = useCallback(
    (thumb, e) => {
      e.preventDefault()
      setDragging(thumb)
    },
    []
  )

  useEffect(() => {
    if (!dragging) return

    const handleMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const resolved = clamp(resolveValueFromPosition(clientX))

      if (dragging === 'min') {
        const newMin = Math.min(resolved, maxVal - step)
        onChange?.([newMin, maxVal])
      } else {
        const newMax = Math.max(resolved, minVal + step)
        onChange?.([minVal, newMax])
      }
    }

    const handleUp = () => setDragging(null)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseup', handleUp)
    window.addEventListener('touchmove', handleMove, { passive: false })
    window.addEventListener('touchend', handleUp)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseup', handleUp)
      window.removeEventListener('touchmove', handleMove)
      window.removeEventListener('touchend', handleUp)
    }
  }, [dragging, minVal, maxVal, step, onChange, resolveValueFromPosition])

  const handleTrackClick = (e) => {
    if (dragging) return
    const resolved = clamp(resolveValueFromPosition(e.clientX))
    const distToMin = Math.abs(resolved - minVal)
    const distToMax = Math.abs(resolved - maxVal)

    if (distToMin <= distToMax) {
      onChange?.([Math.min(resolved, maxVal - step), maxVal])
    } else {
      onChange?.([minVal, Math.max(resolved, minVal + step)])
    }
  }

  const minPercent = getPercent(minVal)
  const maxPercent = getPercent(maxVal)

  return (
    <div className="w-full select-none">
      <div className="flex justify-between items-center mb-4">
        <div className="badge badge-outline badge-lg">
          Min: {format(minVal)}
        </div>
        <div className="badge badge-outline badge-lg">
          Max: {format(maxVal)}
        </div>
      </div>

      <div
        ref={trackRef}
        className="relative h-2 bg-base-300 rounded-full cursor-pointer"
        onClick={handleTrackClick}
      >
        <div
          className="absolute h-full bg-primary rounded-full"
          style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
        />

        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-primary rounded-full border-2 border-base-100 shadow-md cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
          style={{ left: `${minPercent}%`, transform: `translate(-50%, -50%)` }}
          onMouseDown={(e) => handlePointerDown('min', e)}
          onTouchStart={(e) => handlePointerDown('min', e)}
          role="slider"
          aria-label="Prix minimum"
          aria-valuemin={min}
          aria-valuemax={maxVal - step}
          aria-valuenow={minVal}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
              e.preventDefault()
              const newMin = Math.min(minVal + step, maxVal - step)
              onChange?.([newMin, maxVal])
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
              e.preventDefault()
              const newMin = Math.max(minVal - step, min)
              onChange?.([newMin, maxVal])
            }
          }}
        />

        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-primary rounded-full border-2 border-base-100 shadow-md cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
          style={{ left: `${maxPercent}%`, transform: `translate(-50%, -50%)` }}
          onMouseDown={(e) => handlePointerDown('max', e)}
          onTouchStart={(e) => handlePointerDown('max', e)}
          role="slider"
          aria-label="Prix maximum"
          aria-valuemin={minVal + step}
          aria-valuemax={max}
          aria-valuenow={maxVal}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
              e.preventDefault()
              const newMax = Math.min(maxVal + step, max)
              onChange?.([minVal, newMax])
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
              e.preventDefault()
              const newMax = Math.max(maxVal - step, minVal + step)
              onChange?.([minVal, newMax])
            }
          }}
        />
      </div>

      <div className="flex justify-between mt-2">
        <span className="text-xs text-base-content/40">{format(min)}</span>
        <span className="text-xs text-base-content/40">{format(max)}</span>
      </div>
    </div>
  )
}

export default PriceRangeSlider
