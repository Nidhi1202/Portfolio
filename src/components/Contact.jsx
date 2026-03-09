import { useEffect, useRef, useState } from 'react'
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react'

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hinidhi12@gmail.com',
    href: 'mailto:hinidhi12@gmail.com',
    color: '#00d4ff',
    desc: 'Best way to reach me',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/-nidhishrivastav',
    href: 'https://www.linkedin.com/in/-nidhishrivastav',
    color: '#60a5fa',
    desc: 'Connect professionally',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Nidhi1202',
    href: 'https://github.com/Nidhi1202',
    color: '#e2e8f0',
    desc: 'View my code',
  },
]

function useInView(ref, threshold = 0.1) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, threshold])
  return inView
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div
          className="mb-14 text-center transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <h2 className={`section-heading mx-auto${inView ? ' in-view' : ''}`} style={{ display: 'block', textAlign: 'center' }}>
            Get In Touch
          </h2>
          <p className="mt-6 text-base leading-relaxed max-w-lg mx-auto" style={{ color: '#8ba3c7' }}>
            I'm actively seeking full-time roles in{' '}
            <span style={{ color: '#f0f6ff' }}>AI/ML Engineering, LLM Systems, and Applied Research</span>{' '}
            — graduating May 2026. Open to roles across the US.
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-3">
            <MapPin size={12} style={{ color: '#5a7294' }} />
            <span className="text-sm" style={{ color: '#5a7294' }}>Chicago, Illinois · Open to relocation</span>
          </div>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {links.map(({ icon: Icon, label, value, href, color, desc }, i) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="card p-5 flex flex-col items-center text-center gap-2 group transition-all duration-700"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.92)',
                transitionDelay: `${150 + i * 100}ms`,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-1 transition-all duration-200"
                style={{ background: `${color}12`, border: `1px solid ${color}28` }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <span className="text-sm font-semibold" style={{ color: '#f0f6ff' }}>{label}</span>
              <span className="text-xs font-mono" style={{ color }}>{value}</span>
              <span className="text-xs" style={{ color: '#5a7294' }}>{desc}</span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center transition-all duration-700 delay-300"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <a
            href="mailto:hinidhi12@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{
              background: 'rgba(0,212,255,0.1)',
              border: '1px solid rgba(0,212,255,0.35)',
              color: '#00d4ff',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0,212,255,0.2)'
              e.currentTarget.style.borderColor = 'rgba(0,212,255,0.6)'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0,212,255,0.1)'
              e.currentTarget.style.borderColor = 'rgba(0,212,255,0.35)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <Send size={15} />
            Say Hello
          </a>
        </div>
      </div>
    </section>
  )
}
