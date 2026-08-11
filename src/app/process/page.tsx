'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

const processStages = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    description:
      'We meet with clients and architects to understand project requirements, site conditions, budget, constraints, objectives, and delivery expectations.',
  },
  {
    step: '02',
    title: 'Structural Analysis & Design',
    description:
      'We develop structural systems using advanced analysis, finite-element modeling, and applicable engineering codes to achieve safety, efficiency, and reliability.',
  },
  {
    step: '03',
    title: 'Design Development & Coordination',
    description:
      'We coordinate structural designs with architectural, MEP, and other project disciplines to resolve conflicts and ensure clear, buildable documentation.',
  },
  {
    step: '04',
    title: 'Value Engineering',
    description:
      'We refine structural systems, material selection, member sizing, and detailing to optimize project cost without compromising structural performance.',
  },
  {
    step: '05',
    title: 'Technical Review & Documentation',
    description:
      'We perform detailed engineering checks and produce coordinated structural drawings, calculations, specifications, and technical documentation.',
  },
  {
    step: '06',
    title: 'Construction Supervision',
    description:
      'Our engineers inspect site works throughout construction to verify workmanship, materials, reinforcement, steel fabrication, and execution against the approved design.',
  },
  {
    step: '07',
    title: 'Final Inspection & Handover',
    description:
      'We support final technical inspections, identify outstanding structural issues, and ensure the completed work meets the required engineering standards.',
  },
]

const engineeringPrinciples = [
  ['Safety First', 'Structural safety remains the foundation of every decision.'],
  ['Technical Precision', 'Designs are developed through rigorous analysis and engineering checks.'],
  ['Cost Efficiency', 'We optimize materials and structural systems without sacrificing performance.'],
  ['Clear Communication', 'We maintain coordinated communication with clients, architects, contractors, and project teams.'],
]

export default function ProcessPage() {
  return (
    <main className="relative min-h-screen bg-white">

      <PageHero
        badge="Our Work Process"
        title="Our Process"
        description="A proven four-stage methodology that delivers structural excellence from discovery through construction supervision."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Process' },
        ]}
      />

      <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16">
            <div className="lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-[#E9E4DC] bg-[#F7F7F5] p-4 shadow-[0_18px_50px_rgba(17,17,17,0.08)] sm:p-6">
                <div className="pointer-events-none absolute inset-4 border border-[#D71920]/15 sm:inset-6" />
                <div className="pointer-events-none absolute left-8 top-8 h-2 w-2 bg-[#D71920] sm:left-10 sm:top-10" />
                <img
                  src="/images/process_ph.jpg"
                  alt="Kenmos structural engineering process"
                  className="relative aspect-[4/5] w-full object-contain"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#D71920]">
                <span className="h-px w-10 bg-[#D71920]" />
                Precision from brief to handover
              </div>
            </div>

            <div>
              <div className="max-w-3xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D71920] md:text-xs">
                  Step-by-Step Delivery
                </span>
                <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-[#111112] sm:text-4xl lg:text-5xl">
                  How We Deliver Structural Excellence
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                  From the first consultation to final site supervision, our process combines rigorous engineering analysis, practical design decisions, and disciplined project execution.
                </p>
              </div>

              <div className="relative mt-10 pl-7 sm:pl-10">
                <div className="absolute bottom-5 left-[0.45rem] top-5 w-px bg-[#D71920]/25 sm:left-[0.6rem]" />
                <div className="space-y-4">
                  {processStages.map((stage) => (
                    <article key={stage.step} className="relative rounded-[1rem] border border-[#E9E4DC] bg-white p-5 shadow-[0_12px_30px_rgba(17,17,17,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_38px_rgba(17,17,17,0.09)] sm:p-6">
                      <div className="absolute -left-[2.05rem] top-6 flex h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-[#D71920] shadow-[0_0_0_1px_rgba(215,25,32,0.25)] sm:-left-[2.65rem]" aria-hidden />
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-5">
                        <span className="shrink-0 text-xs font-black tracking-[0.2em] text-[#D71920]">{stage.step}</span>
                        <div>
                          <h3 className="text-base font-bold leading-tight text-[#111112] sm:text-lg">{stage.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-gray-600">{stage.description}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-[#E9E4DC] pt-10 md:mt-20 md:pt-12">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D71920] md:text-xs">Engineering Principles</span>
                <h3 className="mt-2 text-2xl font-black tracking-tight text-[#111112] sm:text-3xl">The standards behind every stage.</h3>
              </div>
              <div className="hidden h-px w-24 bg-[#D71920] md:block" />
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {engineeringPrinciples.map(([title, description], index) => (
                <div key={title} className="relative border border-[#E9E4DC] bg-[#F7F7F5] p-5">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#D71920]">0{index + 1}</span>
                  <h4 className="mt-3 text-base font-bold text-[#111112]">{title}</h4>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 md:py-24 bg-[#D71920] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6 md:gap-8">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/90">
            Ready to Start
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-heading tracking-tight uppercase leading-tight max-w-4xl">
            Begin Your Project with Our Proven Process
          </h2>
          <p className="text-sm sm:text-lg text-white/80 max-w-2xl font-light leading-relaxed">
            From initial consultation to final site supervision, our structured approach ensures your project is delivered with precision and value.
          </p>
          <div className="pt-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-[#D71920] hover:bg-gray-100 text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 transition-colors"
            >
              START YOUR PROJECT
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
