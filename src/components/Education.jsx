import { useEffect, useRef, useState } from 'react'
import { GraduationCap, BookOpen } from 'lucide-react'

const education = [
  {
    degree: 'Master of Science — Computer Science',
    school: 'Illinois Institute of Technology',
    location: 'Chicago, Illinois, USA',
    period: 'August 2024 – May 2026',
    gpa: '3.66 / 4.0',
    courses: [
      'Advanced Machine Learning',
      'Statistics for Data Science',
      'Data Preparation & Analysis',
      'Big Data Systems',
      'CS 595 — Efficient ML Systems',
    ],
    color: '#00d4ff',
    highlight: 'Currently Enrolled · Graduating May 2026',
  },
  {
    degree: 'Bachelor of Engineering — Computer Engineering',
    school: 'Fr. Conceicao Rodrigues Institute of Technology, University of Mumbai',
    location: 'Mumbai, Maharashtra, India',
    period: 'August 2020 – May 2024',
    gpa: '3.72 / 4.0 (CGPA 9.29/10)',
    courses: [
      'Machine Learning',
      'Applied Data Science',
      'Data Mining and Warehousing',
      'Database Systems',
      'Computer Networks',
    ],
    color: '#818cf8',
    highlight: 'Distinction Graduate',
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

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div
          className="mb-14 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <h2 className={`section-heading${inView ? ' in-view' : ''}`}>Education</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className="card p-6 transition-all duration-700"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateX(0)' : i === 0 ? 'translateX(-40px)' : 'translateX(40px)',
                transitionDelay: `${i * 150}ms`,
                borderTop: `2px solid ${edu.color}50`,
              }}
            >
              {/* Icon + badge */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${edu.color}12`, border: `1px solid ${edu.color}28` }}
                >
                  <GraduationCap size={18} style={{ color: edu.color }} />
                </div>
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded flex-shrink-0"
                  style={{ background: `${edu.color}10`, color: edu.color, border: `1px solid ${edu.color}22` }}
                >
                  {edu.highlight}
                </span>
              </div>

              {/* Degree */}
              <h3 className="text-base font-bold mb-1 leading-snug" style={{ color: '#f0f6ff' }}>{edu.degree}</h3>
              <p className="font-semibold text-sm mb-0.5" style={{ color: edu.color }}>{edu.school}</p>
              <p className="text-xs mb-1" style={{ color: '#5a7294' }}>{edu.location}</p>

              {/* Period + GPA */}
              <div className="flex items-center gap-4 mb-4 pt-1">
                <span className="text-xs" style={{ color: '#6b87a8' }}>{edu.period}</span>
                <span
                  className="text-xs font-mono font-semibold px-2 py-0.5 rounded"
                  style={{ background: `${edu.color}10`, color: edu.color }}
                >
                  GPA {edu.gpa}
                </span>
              </div>

              {/* Courses */}
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <BookOpen size={11} style={{ color: '#5a7294' }} />
                  <span className="text-xs font-medium uppercase tracking-wider" style={{ color: '#5a7294' }}>
                    Relevant Coursework
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className="text-xs px-2 py-0.5 rounded"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        color: '#7a98b8',
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="accent-line" />
    </section>
  )
}
