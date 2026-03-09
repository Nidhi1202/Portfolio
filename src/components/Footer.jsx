import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="py-8 px-6"
      style={{
        borderTop: '1px solid rgba(0,212,255,0.08)',
        background: 'rgba(0,0,0,0.2)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-center sm:text-left" style={{ color: '#3d5470' }}>
          © 2025 Nidhi Shrivastav · Built with React, Vite & Tailwind CSS · Deployed on GitHub Pages
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: 'https://github.com/Nidhi1202', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/-nidhishrivastav', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:hinidhi12@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              style={{ color: '#3d5470' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00d4ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#3d5470')}
              className="transition-colors duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
