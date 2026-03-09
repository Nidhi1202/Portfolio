import { useEffect, useRef, useState } from 'react'
import { ExternalLink, BookMarked, Users } from 'lucide-react'

const publications = [
  {
    title: 'GrainNexus: Revolutionizing Market Access',
    conference: '3rd International Conference on Advances in Data-driven Computing and Intelligent Systems (ADCIS 2024)',
    organizer: 'BITS Pilani, K K Birla Goa Campus · September 20–21, 2024',
    publisher: 'Springer Nature · Lecture Notes in Networks and Systems (LNNS)',
    year: '2025',
    link: 'https://link.springer.com/chapter/10.1007/978-981-96-3652-5_41',
    contribution: 'Lead contributor — ML system design, backend architecture, and data pipeline engineering',
    domain: 'ML Systems · AgriTech · Predictive Analytics',
    color: '#4ade80',
    index: 'Scopus-Indexed',
  },
  {
    title: 'Beyond Kind: Empowering Non-Governmental Organizations (NGOs) in India',
    conference: '8th International Conference on Information and Communication Technology for Competitive Strategies (ICTCS 2023)',
    organizer: 'Jaipur, India',
    publisher: 'Springer Nature · Lecture Notes in Networks and Systems (LNNS)',
    year: '2024',
    link: 'https://link.springer.com/chapter/10.1007/978-981-97-0210-7_25',
    contribution: 'Lead contributor — system architecture, transparency framework design, and implementation',
    domain: 'Full-Stack Systems · Social Impact Tech',
    color: '#f59e0b',
    index: 'Scopus-Indexed',
  },
  {
    title: 'Stress Relieving Application for Personal Wellbeing – Metanoia',
    conference: '7th International Conference on Internet of Things and Connected Technologies (ICIoTCT 2022)',
    organizer: 'International Conference · 2022',
    publisher: 'Springer Nature · Lecture Notes in Networks and Systems (LNNS)',
    year: '2023',
    link: 'https://link.springer.com/chapter/10.1007/978-981-19-9719-8_10',
    contribution: 'Lead contributor — AI chatbot design, application architecture, and UX engineering',
    domain: 'AI Chatbot · Mental Health Tech · Mobile Systems',
    color: '#818cf8',
    index: 'Scopus-Indexed',
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

export default function Publications() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id="publications" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div
          className="mb-14 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <h2 className={`section-heading${inView ? ' in-view' : ''}`}>Publications & Research</h2>
          <p className="mt-4 max-w-xl text-sm" style={{ color: '#6b87a8' }}>
            Three peer-reviewed papers published in{' '}
            <span style={{ color: '#f0f6ff' }}>Scopus-indexed Springer LNNS proceedings</span> —
            spanning applied AI, full-stack systems, and health technology.
          </p>
        </div>

        {/* Publication list */}
        <div className="flex flex-col gap-5">
          {publications.map((pub, i) => (
            <div
              key={pub.title}
              className="card p-6 transition-all duration-700 group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateX(0)' : 'translateX(-44px)',
                transitionDelay: `${i * 150}ms`,
                borderLeft: `3px solid ${pub.color}`,
                borderRadius: '0 12px 12px 0',
              }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                {/* Number */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg font-mono"
                  style={{ background: `${pub.color}12`, color: pub.color, border: `1px solid ${pub.color}25` }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className="flex-1">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded"
                      style={{ background: `${pub.color}12`, color: pub.color, border: `1px solid ${pub.color}28` }}
                    >
                      {pub.index}
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded"
                      style={{ background: 'rgba(255,255,255,0.04)', color: '#6b87a8', border: '1px solid rgba(255,255,255,0.08)' }}>
                      Springer LNNS · {pub.year}
                    </span>
                    <span className="text-xs" style={{ color: '#5a7294' }}>{pub.domain}</span>
                  </div>

                  {/* Title */}
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-start gap-1.5"
                  >
                    <h3
                      className="text-base font-bold leading-snug transition-colors"
                      style={{ color: '#f0f6ff' }}
                      onMouseEnter={(e) => (e.target.style.color = pub.color)}
                      onMouseLeave={(e) => (e.target.style.color = '#f0f6ff')}
                    >
                      {pub.title}
                    </h3>
                    <ExternalLink size={13} className="flex-shrink-0 mt-1" style={{ color: pub.color, opacity: 0.6 }} />
                  </a>

                  {/* Conference */}
                  <p className="text-xs mt-1.5 leading-relaxed text-justify" style={{ color: '#8ba3c7' }}>
                    <span style={{ color: '#a0b8d0' }}>{pub.conference}</span>
                    {' · '}{pub.organizer}
                  </p>

                  {/* Contribution */}
                  <div className="flex items-start gap-1.5 mt-2.5">
                    <Users size={11} className="flex-shrink-0 mt-0.5" style={{ color: '#5a7294' }} />
                    <p className="text-xs text-justify" style={{ color: '#6b87a8' }}>
                      <span style={{ color: '#8ba3c7' }}>Contribution:</span> {pub.contribution}
                    </p>
                  </div>

                  {/* Publisher */}
                  <p className="text-xs mt-1" style={{ color: '#4a6280' }}>
                    Published in <span style={{ color: '#6b87a8' }}>{pub.publisher}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Publication grant note */}
        <div
          className="mt-6 px-4 py-3 rounded-lg text-sm transition-all duration-700 delay-500"
          style={{
            opacity: inView ? 1 : 0,
            background: 'rgba(0,212,255,0.04)',
            border: '1px solid rgba(0,212,255,0.12)',
            color: '#6b87a8',
          }}
        >
          <span style={{ color: '#00d4ff' }}>Note:</span> All three publications received institutional publication grants from
          Fr. Conceicao Rodrigues Institute of Technology (University of Mumbai).
        </div>
      </div>

      <div className="accent-line" />
    </section>
  )
}
