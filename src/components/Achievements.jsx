import { useEffect, useRef, useState } from 'react'
import { Trophy, Star, Users, Zap } from 'lucide-react'

const achievements = [
  {
    icon: Star,
    title: 'Grace Hopper Celebration 2025',
    subtitle: 'Selected Delegate · Illinois Tech College of Computing',
    detail: 'College-sponsored delegate selected through competitive resume screening. Attended technical sessions and networking events at one of the world\'s largest gatherings of women in computing.',
    color: '#00d4ff',
    year: '2025',
  },
  {
    icon: Trophy,
    title: 'Clinton E. Stryker Distinguished Service Award',
    subtitle: 'Illinois Institute of Technology · April 2025',
    detail: 'Recognized for making a notable impact on student life and campus community during first year at IIT. Awarded for outstanding leadership, mentorship, and community engagement through the Chicago Difference program.',
    color: '#f59e0b',
    year: '2025',
  },
  {
    icon: Zap,
    title: '3× National Competition Winner — GrainNexus',
    subtitle: 'Resilience Techmasters · CHEMFLUX 11.0 · Ideathon 2024',
    detail: 'Led a 4-member team to win first prize in three national-level competitions including events organized by IETE, SRM Institute of Science & Technology, and IEI FCRIT. Also won PCube (Best Project, Poster & Model) at the interdepartmental level.',
    color: '#4ade80',
    year: '2024',
  },
  {
    icon: Trophy,
    title: 'DIPEX 2024 — State-Level Finalist',
    subtitle: '300 selected out of 1,200 project entries · Maharashtra State',
    detail: 'GrainNexus was selected among the top 300 out of 1,200 entries in one of Maharashtra\'s largest project competitions.',
    color: '#818cf8',
    year: '2024',
  },
  {
    icon: Star,
    title: 'Pitch Perfect 5.0 — Top 10 Finalist',
    subtitle: 'IIM Bodhgaya · March 2024',
    detail: 'Out of 440 entries, only 23 teams were selected for the finals — ranked among the top 10 at a startup pitch competition organized by IIM Bodhgaya.',
    color: '#fb7185',
    year: '2024',
  },
  {
    icon: Users,
    title: 'Avishkar 2023 — University Finalist',
    subtitle: 'Mumbai University Research Convention',
    detail: 'GrainNexus reached the finals of Avishkar, the annual research project competition organized by the University of Mumbai across all affiliated colleges.',
    color: '#34d399',
    year: '2023',
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

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id="achievements" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div
          className="mb-14 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <h2 className={`section-heading${inView ? ' in-view' : ''}`}>Awards & Recognition</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="card p-5 transition-all duration-700"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0) scale(1)' : 'translateY(28px) scale(0.93)',
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: `${item.color}12`, border: `1px solid ${item.color}28` }}
                  >
                    <Icon size={16} style={{ color: item.color }} />
                  </div>
                  <span
                    className="flex-shrink-0 text-xs font-mono px-2 py-0.5 rounded mt-1"
                    style={{ background: `${item.color}10`, color: item.color, border: `1px solid ${item.color}22` }}
                  >
                    {item.year}
                  </span>
                </div>
                <h3 className="text-sm font-bold mb-1 leading-snug" style={{ color: '#f0f6ff' }}>{item.title}</h3>
                <p className="text-xs mb-2 leading-snug" style={{ color: item.color, opacity: 0.85 }}>{item.subtitle}</p>
                <p className="text-xs leading-relaxed text-justify" style={{ color: '#5a7294' }}>{item.detail}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="accent-line" />
    </section>
  )
}
