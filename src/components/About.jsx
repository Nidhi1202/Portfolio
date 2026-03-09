import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Cpu, BookOpen, Award } from 'lucide-react'

const highlights = [
  {
    icon: Cpu,
    title: 'LLM Engineering',
    desc: 'Built fine-tuning pipelines for Mistral, Qwen, and LLaMA using LoRA/QLoRA. Implemented TransMLA attention to reduce inference latency by 18%.',
  },
  {
    icon: BookOpen,
    title: '3× Published Researcher',
    desc: 'Lead contributor on three Scopus-indexed Springer proceedings across AI, ML, and full-stack systems — from 2023 to 2025.',
  },
  {
    icon: GraduationCap,
    title: 'MS CS @ Illinois Tech',
    desc: 'Graduate student in Computer Science (GPA 3.66) with coursework in Advanced ML, Big Data Systems, and Statistics.',
  },
  {
    icon: Award,
    title: 'Recognized Contributor',
    desc: 'Clinton E. Stryker Distinguished Service Award recipient. Selected delegate to Grace Hopper Celebration 2025.',
  },
]

function useInView(ref, threshold = 0.15) {
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

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div
          className="mb-14 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <h2 className={`section-heading${inView ? ' in-view' : ''}`}>About Me</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio */}
          <div
            className="lg:col-span-3 transition-all duration-700 delay-100"
            style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(-36px)' }}
          >
            <p className="text-lg leading-relaxed mb-5 text-justify" style={{ color: '#dce9f8' }}>
              I'm an AI/ML engineer and software developer focused on the intersection of{' '}
              <span style={{ color: '#00d4ff' }}>large language model efficiency</span>,
              transformer architecture optimization, and building full-stack AI systems that scale.
            </p>
            <p className="leading-relaxed mb-5 text-justify" style={{ color: '#b0c4dc' }}>
              At <span style={{ color: '#ffffff', fontWeight: 600 }}>Persistent Systems</span>, I designed
              production-grade fine-tuning pipelines for LLMs (Mistral, Qwen, LLaMA), implemented
              Multi-Head Latent Attention (TransMLA) to compress KV caches and cut inference latency, and
              built automated evaluation frameworks across MMLU, HellaSwag, and ARC benchmarks.
            </p>
            <p className="leading-relaxed mb-5 text-justify" style={{ color: '#b0c4dc' }}>
              Beyond AI, I've built end-to-end software systems — from a{' '}
              <span style={{ color: '#ffffff', fontWeight: 600 }}>Django + MongoDB agricultural marketplace</span>{' '}
              serving 1,000+ farmers, to full-stack web platforms for NGOs and mobile wellness apps —
              all backed by peer-reviewed research published in{' '}
              <span style={{ color: '#ffffff', fontWeight: 600 }}>Scopus-indexed Springer proceedings</span>.
            </p>
            <p className="leading-relaxed mb-5 text-justify" style={{ color: '#b0c4dc' }}>
              At IIT Chicago, I also served as a{' '}
              <span style={{ color: '#ffffff', fontWeight: 600 }}>Student Success Coach</span> in the
              Chicago Difference program — mentoring 20+ first-year students and applying data-driven
              strategies to improve academic engagement by 25%. This role earned me the{' '}
              <span style={{ color: '#00d4ff' }}>Clinton E. Stryker Distinguished Service Award</span>.
            </p>
            <p className="leading-relaxed text-justify" style={{ color: '#b0c4dc' }}>
              Graduating May 2026 with an MS in CS from{' '}
              <span style={{ color: '#ffffff', fontWeight: 600 }}>Illinois Institute of Technology</span> —
              actively seeking full-time roles in AI/ML Engineering, Software Engineering, and Applied Research.
            </p>
          </div>

          {/* Highlight cards */}
          <div
            className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-4 transition-all duration-700 delay-200"
            style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(36px)' }}
          >
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="card p-4 flex gap-3"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
                  style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.15)' }}
                >
                  <Icon size={16} style={{ color: '#00d4ff' }} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1" style={{ color: '#f0f6ff' }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#6b87a8' }}>{desc}</p>
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
