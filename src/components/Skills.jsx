import { useEffect, useRef, useState } from 'react'

const skillGroups = [
  {
    label: 'Generative AI & LLMs',
    color: '#00d4ff',
    skills: [
      'Large Language Models (LLMs)', 'LoRA / QLoRA', 'vLLM', 'HuggingFace',
      'LangChain', 'PyTorch', 'TensorFlow', 'Prompt Engineering',
      'Fine-Tuning', 'TransMLA / MLA Attention', 'KV Cache Optimization',
      'Benchmarking (MMLU, ARC, HellaSwag)',
    ],
  },
  {
    label: 'Machine Learning & Data Science',
    color: '#4ade80',
    skills: [
      'Scikit-learn', 'XGBoost', 'Random Forest', 'SVM', 'Decision Trees',
      'NLP', 'Feature Engineering', 'A/B Testing', 'EDA',
      'Regression', 'Classification', 'Clustering',
      'Time Series Forecasting', 'Model Evaluation',
    ],
  },
  {
    label: 'Languages & Frameworks',
    color: '#818cf8',
    skills: [
      'Python', 'R', 'SQL', 'Java', 'JavaScript', 'HTML/CSS',
      'Django', 'React Native', 'Node.js',
    ],
  },
  {
    label: 'Big Data & Cloud',
    color: '#f59e0b',
    skills: [
      'AWS', 'Google Cloud Platform (GCP)', 'Azure',
      'Apache Spark', 'PySpark', 'Hadoop',
      'Docker', 'Kubernetes', 'Snowflake', 'CI/CD Pipelines',
    ],
  },
  {
    label: 'Databases',
    color: '#fb7185',
    skills: [
      'MySQL', 'MongoDB', 'Firebase', 'NoSQL', 'REST APIs', 'ETL Pipelines',
    ],
  },
  {
    label: 'Visualization & Analytics',
    color: '#34d399',
    skills: [
      'Tableau', 'Power BI', 'Matplotlib', 'Seaborn', 'ggplot2',
      'Jupyter', 'Anaconda',
    ],
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

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div
          className="mb-14 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <h2 className={`section-heading${inView ? ' in-view' : ''}`}>Technical Skills</h2>
          <p className="mt-4 max-w-xl text-sm" style={{ color: '#6b87a8' }}>
            Organized by domain — no skill bars, just real tools used in real projects.
          </p>
        </div>

        {/* Skill groups */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <div
              key={group.label}
              className="card p-5 transition-all duration-700"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'scale(1) translateY(0)' : 'scale(0.88) translateY(20px)',
                transitionDelay: `${i * 90}ms`,
                borderTop: `2px solid ${group.color}40`,
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: group.color, boxShadow: `0 0 6px ${group.color}60` }}
                />
                <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: group.color }}>
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded transition-all duration-200 cursor-default"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#8ba3c7',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${group.color}12`
                      e.currentTarget.style.borderColor = `${group.color}35`
                      e.currentTarget.style.color = group.color
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                      e.currentTarget.style.color = '#8ba3c7'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certification row */}
        <div
          className="mt-8 card p-5 transition-all duration-700 delay-500"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full" style={{ background: '#00d4ff', boxShadow: '0 0 6px #00d4ff60' }} />
            <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#00d4ff' }}>Certifications</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://coursera.org/verify/PV6YK46B5ZLO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200"
              style={{
                background: 'rgba(0,212,255,0.06)',
                border: '1px solid rgba(0,212,255,0.2)',
                color: '#8ba3c7',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0,212,255,0.12)'
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'
                e.currentTarget.style.color = '#f0f6ff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0,212,255,0.06)'
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'
                e.currentTarget.style.color = '#8ba3c7'
              }}
            >
              <span style={{ color: '#00d4ff', fontSize: '1rem' }}>🎓</span>
              <div>
                <div className="font-medium text-xs" style={{ color: '#f0f6ff' }}>Introduction to Generative AI</div>
                <div className="text-xs" style={{ color: '#5a7294' }}>Duke University · Coursera · Jul 2025</div>
              </div>
              <span className="text-xs ml-2" style={{ color: '#00d4ff', opacity: 0.6 }}>↗</span>
            </a>
          </div>
        </div>
      </div>

      <div className="accent-line" />
    </section>
  )
}
