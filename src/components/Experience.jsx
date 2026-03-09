import { useEffect, useRef, useState } from 'react'
import { MapPin, Calendar, ExternalLink } from 'lucide-react'

const experiences = [
  {
    role: 'AI/ML Research Intern',
    company: 'Persistent Systems Ltd',
    location: 'Santa Clara, CA (Remote)',
    period: 'Jul 2025 – Nov 2025',
    type: 'Industry Research',
    color: '#00d4ff',
    bullets: [
      'Built fine-tuning pipelines for LLMs (Mistral, Qwen, LLaMA) using LoRA/QLoRA, integrated with CI/CD workflows for continuous and repeatable model deployment.',
      'Reduced inference latency by 18% and improved efficiency by 12% by implementing TransMLA — a KV-cache compression technique applied across multiple model architectures.',
      'Built an automated benchmarking system across MMLU, HellaSwag, Winogrande, and ARC to compare model performance and catch quality regressions early.',
      'Reproduced TransMLA paper findings on SmolLM and Qwen; documented vLLM compatibility issues and trade-offs between memory savings and model accuracy.',
    ],
    tags: ['LLMs', 'LoRA/QLoRA', 'TransMLA', 'vLLM', 'PyTorch', 'HuggingFace', 'Benchmarking', 'KV Cache'],
  },
  {
    role: 'Student Success Coach',
    company: 'Illinois Institute of Technology',
    location: 'Chicago, IL',
    period: 'Aug 2024 – May 2025',
    type: 'Campus Role',
    color: '#818cf8',
    bullets: [
      'Ran 200+ one-on-one coaching sessions for 20+ first-year students in the Chicago Difference program, helping them build better study habits and adjust to university life.',
      'Tracked student progress to identify where people were struggling, then designed targeted support plans — improving academic engagement by 25% across mentees.',
      'Received the Clinton E. Stryker Distinguished Service Award (April 2025) for community impact and student leadership at IIT.',
    ],
    tags: ['Leadership', 'Data-Driven Decision Making', 'Program Management', 'Student Mentorship'],
  },
  {
    role: 'Data Scientist Intern',
    company: 'DevTown',
    location: 'Mumbai, India',
    period: 'Feb 2023 – May 2023',
    type: 'Industry',
    color: '#4ade80',
    bullets: [
      'Trained and compared ML classifiers (SVM, Decision Trees, Random Forest) on Walmart and Zomato datasets, reaching 85%+ classification accuracy.',
      'Built Python and SQL pipelines to clean and transform raw data into structured formats ready for analysis.',
      'Created interactive dashboards to share model results with the team, cutting manual reporting time by ~30%.',
    ],
    tags: ['Python', 'Scikit-learn', 'SQL', 'ETL Pipelines', 'Random Forest', 'Dashboard Development'],
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

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div
          className="mb-14 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <h2 className={`section-heading${inView ? ' in-view' : ''}`}>Work Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden lg:block"
            style={{ background: 'linear-gradient(180deg, rgba(0,212,255,0.3) 0%, rgba(129,140,248,0.15) 60%, transparent 100%)', left: '11px' }}
          />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className="relative lg:pl-10 transition-all duration-700"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateX(0)' : 'translateX(-40px)',
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute hidden lg:block w-[22px] h-[22px] rounded-full border-2"
                  style={{
                    left: '0px',
                    top: '20px',
                    background: '#050d1a',
                    borderColor: exp.color,
                    boxShadow: `0 0 10px ${exp.color}40`,
                  }}
                />

                {/* Card */}
                <div className="card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs font-mono px-2 py-0.5 rounded"
                          style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold" style={{ color: '#f0f6ff' }}>{exp.role}</h3>
                      <p className="font-semibold text-sm" style={{ color: exp.color }}>{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-1 text-xs sm:text-right flex-shrink-0" style={{ color: '#6b87a8' }}>
                      <span className="flex items-center gap-1 sm:justify-end">
                        <Calendar size={11} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 sm:justify-end">
                        <MapPin size={11} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-justify" style={{ color: '#b0c4dc' }}>
                        <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ background: exp.color, opacity: 0.7 }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tech-badge">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="accent-line" />
    </section>
  )
}
