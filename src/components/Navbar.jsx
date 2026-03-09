import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#publications' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(5, 13, 26, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 212, 255, 0.08)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold tracking-tight transition-colors duration-200"
          style={{ color: '#f0f6ff' }}
        >
          Nidhi<span style={{ color: '#00d4ff' }}> S.</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-base font-medium transition-colors duration-200"
              style={{ color: '#b0c8e0' }}
              onMouseEnter={(e) => (e.target.style.color = '#00d4ff')}
              onMouseLeave={(e) => (e.target.style.color = '#b0c8e0')}
            >
              {link.label}
            </button>
          ))}
          <a
            href="mailto:hinidhi12@gmail.com"
            className="text-base font-semibold px-5 py-2 rounded-lg border transition-all duration-200"
            style={{
              color: '#00d4ff',
              borderColor: 'rgba(0,212,255,0.35)',
              background: 'rgba(0,212,255,0.05)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0,212,255,0.12)'
              e.currentTarget.style.borderColor = 'rgba(0,212,255,0.6)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0,212,255,0.05)'
              e.currentTarget.style.borderColor = 'rgba(0,212,255,0.35)'
            }}
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded transition-colors"
          style={{ color: '#8ba3c7' }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{
            background: 'rgba(5, 13, 26, 0.98)',
            borderBottom: '1px solid rgba(0, 212, 255, 0.1)',
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-sm font-medium text-left py-1 transition-colors"
              style={{ color: '#8ba3c7' }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
