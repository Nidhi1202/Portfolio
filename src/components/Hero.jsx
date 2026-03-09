import { useEffect, useRef, useState } from 'react'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import profileImg from '../assets/profile.jpg'

const ROLES = [
  'AI / ML Engineer',
  'LLM Systems Builder',
  'Software Engineer',
  'Applied AI Researcher',
  'GenAI Engineer',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const current = ROLES[roleIdx]
    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1))
        }, 60)
      } else {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), 2400)
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1))
        }, 35)
      } else {
        setIsDeleting(false)
        setRoleIdx((i) => (i + 1) % ROLES.length)
      }
    }
    return () => clearTimeout(timeoutRef.current)
  }, [displayed, isDeleting, roleIdx])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center grid-bg"
      style={{ paddingTop: '100px' }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 40%, rgba(0,212,255,0.05) 0%, transparent 60%),
            radial-gradient(ellipse 60% 60% at 80% 70%, rgba(129,140,248,0.05) 0%, transparent 60%)
          `,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">

            {/* Status badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.2)' }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium" style={{ color: '#b0c8e0' }}>
                Open to Full-Time Roles · Graduating May 2026
              </span>
            </div>

            {/* Name */}
            <h1 className="hero-name text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-3 tracking-tight" style={{ color: '#ffffff' }}>
              Nidhi
              <br />
              <span className="gradient-text">Shrivastav</span>
            </h1>

            {/* Animated role */}
            <div className="hero-role h-10 mb-5 flex items-center justify-center lg:justify-start">
              <span className="text-2xl lg:text-3xl font-semibold font-mono" style={{ color: '#00d4ff' }}>
                {displayed}
                <span className="cursor-blink" style={{ color: '#00d4ff' }}>|</span>
              </span>
            </div>

            {/* Tagline */}
            <p className="hero-tagline text-lg lg:text-xl leading-relaxed mb-2 max-w-xl mx-auto lg:mx-0" style={{ color: '#c8daf0' }}>
              Fine-tuning LLMs, optimizing inference, and publishing the research behind it.
            </p>
            <p className="text-sm mb-8 max-w-xl mx-auto lg:mx-0" style={{ color: '#7a98b8' }}>
              MS Computer Science · Illinois Institute of Technology, Chicago ·{' '}
              <span style={{ color: '#00d4ff' }}>3× Scopus-Indexed Springer Publications</span>
            </p>

            {/* CTAs */}
            <div className="hero-ctas flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              <a
                href="https://github.com/Nidhi1202"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.13)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/-nidhishrivastav"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{ background: 'rgba(0,119,181,0.15)', border: '1px solid rgba(0,119,181,0.35)', color: '#60a5fa' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,119,181,0.25)'; e.currentTarget.style.borderColor = 'rgba(0,119,181,0.6)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,119,181,0.15)'; e.currentTarget.style.borderColor = 'rgba(0,119,181,0.35)' }}
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="mailto:hinidhi12@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.35)', color: '#00d4ff' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,212,255,0.18)'; e.currentTarget.style.borderColor = 'rgba(0,212,255,0.6)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,212,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(0,212,255,0.35)' }}
              >
                <Mail size={16} /> Email
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats flex flex-wrap gap-8 justify-center lg:justify-start">
              {[
                { value: '3×', label: 'Springer Publications' },
                { value: '5+', label: 'End-to-End Systems Built' },
                { value: '3.66', label: 'MS GPA @ IIT Chicago' },
                { value: '125K+', label: 'Data Records Analyzed' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold gradient-text">{value}</div>
                  <div className="text-xs mt-0.5" style={{ color: '#6b87a8' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div className="hero-photo relative flex-shrink-0 order-1 lg:order-2">
            <div className="absolute rounded-full animate-pulse-slow"
              style={{ inset: '-14px', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '50%' }} />
            <div className="absolute rounded-full"
              style={{ inset: '-30px', border: '1px solid rgba(129,140,248,0.08)', borderRadius: '50%' }} />

            <div
              className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden"
              style={{
                border: '3px solid rgba(0,212,255,0.3)',
                boxShadow: '0 0 50px rgba(0,212,255,0.15), 0 0 100px rgba(0,212,255,0.05)',
              }}
            >
              <img
                src={profileImg}
                alt="Nidhi Shrivastav"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-1 transition-opacity hover:opacity-60"
            style={{ color: '#4a6280' }}
          >
            <span className="text-xs font-mono">scroll</span>
            <ChevronDown size={18} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}
