import { useState, useEffect } from 'react'
import { Wrench, Clock, ExternalLink } from 'lucide-react'

const SOCIAL_LINKS = [
  { name: 'Twitter', url: 'https://twitter.com/globalmarket' },
  { name: 'Facebook', url: 'https://facebook.com/globalmarket' },
  { name: 'Instagram', url: 'https://instagram.com/globalmarket' },
]

export default function MaintenancePage() {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 30 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev
        seconds -= 1
        if (seconds < 0) {
          seconds = 59
          minutes -= 1
        }
        if (minutes < 0) {
          minutes = 59
          hours -= 1
        }
        if (hours < 0) {
          hours = 0
          minutes = 0
          seconds = 0
        }
        return { hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const pad = (n) => String(n).padStart(2, '0')

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="text-center max-w-lg">
        <div className="w-24 h-24 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-6">
          <Wrench size={48} className="text-warning animate-spin" style={{ animationDuration: '4s' }} />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-3">Site en maintenance</h1>
        <p className="text-base-content/60 text-lg mb-8">
          Nous effectuons une mise à jour pour améliorer votre expérience.
          <br />
          Nous serons de retour très rapidement !
        </p>

        <div className="flex gap-4 justify-center mb-10">
          <div className="stat bg-base-200 rounded-box shadow-sm px-6 py-3">
            <div className="stat-title text-xs">Heures</div>
            <div className="stat-value text-3xl text-primary">{pad(timeLeft.hours)}</div>
          </div>
          <div className="stat bg-base-200 rounded-box shadow-sm px-6 py-3">
            <div className="stat-title text-xs">Minutes</div>
            <div className="stat-value text-3xl text-primary">{pad(timeLeft.minutes)}</div>
          </div>
          <div className="stat bg-base-200 rounded-box shadow-sm px-6 py-3">
            <div className="stat-title text-xs">Secondes</div>
            <div className="stat-value text-3xl text-primary">{pad(timeLeft.seconds)}</div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-base-content/50">
            <Clock size={16} />
            <span>Nous estimons la reprise à environ {timeLeft.hours}h{pad(timeLeft.minutes)}</span>
          </div>

          <div className="flex gap-3 justify-center">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm gap-1"
              >
                {social.name}
                <ExternalLink size={12} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
