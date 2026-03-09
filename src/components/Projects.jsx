import { useEffect, useRef, useState } from 'react'
import { Github, ExternalLink, BookOpen } from 'lucide-react'

const projects = [
  {
    title: 'Chicago Crime Analysis',
    subtitle: 'Predictive Analytics · End-to-End ML Pipeline',
    period: 'Dec 2024 – Apr 2025',
    description:
      'Analyzed 125,000+ Chicago crime records using R and machine learning to find where and when crimes are most likely to occur. Built interactive visualizations to make the patterns easy to explore and interpret.',
    highlights: [
      '125K+ crime records processed with advanced feature engineering',
      '60%+ test accuracy with Random Forest; spatial & temporal pattern analysis',
      'Interactive ggplot2 visualizations for exploratory crime mapping',
      'Managed in Agile workflow with full GitHub version control',
    ],
    tags: ['R', 'XGBoost', 'Random Forest', 'ggplot2', 'Feature Engineering', 'EDA', 'GitHub'],
    github: 'https://github.com/Nidhi1202/dpa-crime-analysis',
    paper: null,
    featured: true,
    color: '#00d4ff',
    badge: 'Academic Project · IIT Chicago',
  },
  {
    title: 'GrainNexus',
    subtitle: 'AI-Powered Agricultural Marketplace',
    period: 'Aug 2023 – May 2024',
    description:
      'A crop marketplace that connects farmers directly with traders, cutting out middlemen. Built with Django and MongoDB, it uses ML models to predict fair crop prices from real agricultural data and lets traders bid in real time.',
    highlights: [
      'Served 1,000+ farmers; reduced middlemen reliance by 40%',
      'ML models trained on 30K+ agricultural records (rainfall, MSP, fuel rates)',
      '30% improvement in crop price prediction accuracy',
      'Real-time bidding system via Django + MongoDB REST API',
      'Crop Quality Index with automated PDF reporting',
      'Led 4-member team; won 4 national competitions; published in Springer LNNS',
    ],
    tags: ['Python', 'Django', 'MongoDB', 'Scikit-learn', 'REST API', 'NumPy', 'Pandas', 'Matplotlib'],
    github: null,
    paper: 'https://link.springer.com/chapter/10.1007/978-981-96-3652-5_41',
    featured: true,
    color: '#4ade80',
    badge: 'Springer Published · ADCIS 2024',
  },
  {
    title: 'Metanoia',
    subtitle: 'Mental Wellness App with AI Chatbot',
    period: 'Jul 2021 – Apr 2022',
    description:
      'A mobile wellness app with Milo, an AI chatbot that helps users manage stress and anxiety through mindfulness exercises, mood tracking, meditation sessions, and personalized suggestions.',
    highlights: [
      'AI chatbot (Milo) with personalized wellbeing recommendations',
      'Features: mood tracking, digital diary, meditation sessions, sleep tools',
      'Reward system and guided breathing exercises',
      'Published in Springer LNNS (ICIoTCT 2022)',
    ],
    tags: ['React Native', 'AI Chatbot', 'NLP', 'Mobile App', 'Git'],
    github: null,
    paper: 'https://link.springer.com/chapter/10.1007/978-981-19-9719-8_10',
    featured: false,
    color: '#818cf8',
    badge: 'Springer Published · ICIoTCT 2022',
  },
  {
    title: 'Beyond Kind',
    subtitle: 'NGO Transparency Platform',
    period: 'Jul 2022 – Apr 2023',
    description:
      'A web platform that helps smaller NGOs get visibility, manage donations, and connect with supporters. Built with a focus on transparency — real-time listings, performance tracking, and a feedback system for continuous improvement.',
    highlights: [
      'Transparent NGO performance tracking with privacy controls',
      'Real-time news/events feed, donation portal, and complaint system',
      'Stakeholder collaboration and donor engagement tools',
      'Published in Springer LNNS (ICTCS 2023)',
    ],
    tags: ['PHP', 'JavaScript', 'HTML/CSS', 'MySQL', 'MongoDB', 'Node.js', 'Git'],
    github: null,
    paper: 'https://link.springer.com/chapter/10.1007/978-981-97-0210-7_25',
    featured: false,
    color: '#f59e0b',
    badge: 'Springer Published · ICTCS 2023',
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

function ProjectCard({ project, index, inView, slideDir = 'up' }) {
  const hiddenTransform =
    slideDir === 'left' ? 'translateX(-40px)' :
    slideDir === 'right' ? 'translateX(40px)' :
    'translateY(32px)'
  return (
    <div
      className="card p-6 flex flex-col h-full transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate(0)' : hiddenTransform,
        transitionDelay: `${index * 120}ms`,
        borderColor: `${project.color}20`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${project.color}45`
        e.currentTarget.style.boxShadow = `0 8px 32px ${project.color}10`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${project.color}20`
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span
              className="text-xs font-mono px-2 py-0.5 rounded"
              style={{ background: `${project.color}12`, color: project.color, border: `1px solid ${project.color}28` }}
            >
              {project.badge}
            </span>
          </div>
          <h3 className="text-lg font-bold mt-2" style={{ color: '#f0f6ff' }}>{project.title}</h3>
          <p className="text-xs font-medium mt-0.5" style={{ color: project.color }}>{project.subtitle}</p>
        </div>
        <div className="flex gap-2 flex-shrink-0 mt-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded transition-colors"
              style={{ color: '#6b87a8' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f0f6ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#6b87a8')}
              title="View on GitHub"
            >
              <Github size={16} />
            </a>
          )}
          {project.paper && (
            <a
              href={project.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded transition-colors"
              style={{ color: '#6b87a8' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = project.color)}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#6b87a8')}
              title="View Research Paper"
            >
              <BookOpen size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Period */}
      <p className="text-xs mb-3" style={{ color: '#5a7294' }}>{project.period}</p>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-4 text-justify" style={{ color: '#b0c4dc' }}>{project.description}</p>

      {/* Highlights */}
      <ul className="space-y-1.5 mb-4 flex-1">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex gap-2 text-xs leading-relaxed" style={{ color: '#7a98b8' }}>
            <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full" style={{ background: project.color, opacity: 0.7 }} />
            {h}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        {project.tags.map((tag) => (
          <span key={tag} className="tech-badge">{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref)
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div
          className="mb-14 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <h2 className={`section-heading${inView ? ' in-view' : ''}`}>Featured Projects</h2>
          <p className="mt-4 max-w-xl text-sm" style={{ color: '#6b87a8' }}>
            End-to-end systems combining ML research, engineering, and real-world impact.
          </p>
        </div>

        {/* Featured grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} slideDir={i % 2 === 0 ? 'left' : 'right'} />
          ))}
        </div>

        {/* Other projects */}
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(28px)', transitionDelay: '300ms' }}
        >
          <p className="text-sm font-medium mb-4" style={{ color: '#5a7294' }}>More Research Projects</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {others.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i + 2} inView={inView} slideDir={i % 2 === 0 ? 'left' : 'right'} />
            ))}
          </div>
        </div>
      </div>

      <div className="accent-line" />
    </section>
  )
}
