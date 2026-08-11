'use client'

import React from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { brand, teamMembers } from '@/lib/brand'
import {
  Building2,
  ShieldCheck,
  HardHat,
  Compass,
  Wrench,
  Cpu,
  Award,
  Users,
  CheckSquare,
  ArrowRight,
} from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-new.jpg" alt="Kenmos Engineering hero" className="h-full w-full object-cover" />
        </div>

        <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.6)_45%,rgba(0,0,0,0.35)_100%)]" aria-hidden />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_right,rgba(215,25,32,0.18),transparent_32%)]" aria-hidden />

        <div className="relative z-20 mx-auto flex min-h-[40vh] items-center justify-center px-5 py-20 text-center sm:px-6 lg:px-8 md:min-h-[45vh]">
          <div className="max-w-3xl translate-y-6">
            <p className="text-sm uppercase tracking-[0.35em] font-semibold text-white">About Our Firm</p>

            <h1 className="mt-4 text-[3.25rem] font-black uppercase leading-tight tracking-tight text-[#D71920] sm:text-[3.75rem] md:text-[4.5rem] lg:text-[5.5rem] font-heading whitespace-nowrap lining-nums">ESTABLISHED 2009</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
              Structural design and construction supervision delivered with technical precision,
              <br className="hidden md:inline" />
              safety discipline, and long-term performance in mind.
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Our Story</h2>
            <p className="mt-4 text-gray-600">Founded in 2009, Kenmos has specialized in structural design and construction supervision for a wide range of projects across Ethiopia and East Africa. Over the years we have built a reputation for technically robust and cost-effective engineering solutions that prioritize safety and long-term durability.</p>

            <ol className="mt-8 space-y-6">
              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-50 text-[#D71920]"><Building2 className="w-5 h-5" /></div>
                <div>
                  <div className="text-sm font-semibold">2009 — Founded</div>
                  <div className="text-sm text-gray-600">Kenmos established to deliver rigorous structural engineering services.</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-50 text-[#D71920]"><ShieldCheck className="w-5 h-5" /></div>
                <div>
                  <div className="text-sm font-semibold">Technical Excellence</div>
                  <div className="text-sm text-gray-600">We apply finite-element analysis and industry-standard validation to every project.</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-50 text-[#D71920]"><HardHat className="w-5 h-5" /></div>
                <div>
                  <div className="text-sm font-semibold">Regional Impact</div>
                  <div className="text-sm text-gray-600">Delivering projects across Ethiopia and neighboring markets with consistent quality.</div>
                </div>
              </li>
            </ol>
          </div>

          <div>
            <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
              <img src="/images/about_us.jpg" alt="About Kenmos" className="w-full h-48 object-cover sm:h-64 md:h-72" />
            </div>

            <h3 className="text-xl font-semibold">Our Engineering Approach</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-200 p-5 bg-[#F7F7F5] shadow-sm transition duration-300 hover:shadow-[0_14px_35px_rgba(17,17,17,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-[#D71920]/10 p-2 text-[#D71920]"><Cpu className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold">Structural Safety</div>
                    <div className="text-sm text-gray-600 mt-1">Rigorous analysis and validation against recognized standards.</div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 p-5 bg-[#F7F7F5] shadow-sm transition duration-300 hover:shadow-[0_14px_35px_rgba(17,17,17,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-[#D71920]/10 p-2 text-[#D71920]"><Wrench className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold">Material Efficiency</div>
                    <div className="text-sm text-gray-600 mt-1">Optimized designs to minimize material use while maintaining safety.</div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 p-5 bg-[#F7F7F5] shadow-sm transition duration-300 hover:shadow-[0_14px_35px_rgba(17,17,17,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-[#D71920]/10 p-2 text-[#D71920]"><Award className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold">Long-Term Durability</div>
                    <div className="text-sm text-gray-600 mt-1">Details and specifications that ensure performance over decades.</div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 p-5 bg-[#F7F7F5] shadow-sm transition duration-300 hover:shadow-[0_14px_35px_rgba(17,17,17,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-[#D71920]/10 p-2 text-[#D71920]"><CheckSquare className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold">Cost Optimization</div>
                    <div className="text-sm text-gray-600 mt-1">Value engineering that reduces lifecycle and construction cost.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-10">
        <div className="rounded-lg border border-slate-200 bg-[#F7F7F5] p-8 shadow-sm">
          <h3 className="text-2xl font-semibold">Standards & Technical Excellence</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-slate-200 p-4 bg-[#F7F7F5] shadow-sm flex items-center gap-3">
              <div className="text-[#D71920] p-2 bg-gray-50 rounded-md"><FileIcon /></div>
              <div>
                <div className="font-semibold">ASCE & ACI</div>
                <div className="text-sm text-gray-600">US-based codes and concrete practice followed where applicable.</div>
              </div>
            </div>

            <div className="rounded-md border border-slate-200 p-4 bg-[#F7F7F5] shadow-sm flex items-center gap-3">
              <div>
                <div className="font-semibold">Eurocode & Ethiopian Code</div>
                <div className="text-sm text-gray-600">Regional and international code compliance for robust designs.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-semibold">Structural Engineering Expertise</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ['Structural Design', 'Comprehensive analysis and detailed drawings'],
            ['Steel Structures', 'Arches, trusses, plate girders and connections'],
            ['Concrete Structures', 'Reinforced and prestressed concrete solutions'],
            ['Assessment & Retrofitting', 'Condition surveys and remedial design'],
            ['Construction Supervision', 'Site inspection and quality control'],
            ['Engineering Consultancy', 'Feasibility studies and technical reports'],
          ].map(([title, desc]) => (
            <div
              key={title as string}
              className="rounded-lg border border-[#E9E4DC] bg-[#F7F7F5] p-6 shadow-sm transition duration-300 hover:shadow-[0_14px_35px_rgba(17,17,17,0.08)]"
            >
              <div className="font-semibold">{title}</div>
              <div className="text-sm text-gray-600 mt-2">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 bg-gray-50 border-t border-gray-100">
        <h3 className="text-2xl font-semibold">Proven Experience</h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-extrabold">2009</div>
            <div className="text-sm text-gray-600">Established</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-extrabold">800+</div>
            <div className="text-sm text-gray-600">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-extrabold">20+</div>
            <div className="text-sm text-gray-600">Years Leadership</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-extrabold">Ethiopia & East Africa</div>
            <div className="text-sm text-gray-600">Project Reach</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-semibold">Leadership & Team</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-200 p-6 bg-[#F7F7F5] shadow-sm transition duration-300 hover:shadow-[0_14px_35px_rgba(17,17,17,0.08)] flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-[#FDE8E8] text-[#D71920] flex items-center justify-center"><Users className="w-6 h-6" /></div>
              <div>
                <div className="font-semibold">Kenmos Tesfaye</div>
                <div className="text-sm text-gray-600">Founder & General Manager</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">Leads the practice with 20 years of structural design and construction supervision across 800+ projects.</p>
          </div>

          <div className="rounded-lg border border-slate-200 p-6 bg-[#F7F7F5] shadow-sm transition duration-300 hover:shadow-[0_14px_35px_rgba(17,17,17,0.08)]">
            <div className="font-semibold">Structural Engineering Team</div>
            <div className="text-sm text-gray-600 mt-2">Experienced engineers focused on design, analysis, and on-site supervision.</div>
          </div>

          <div className="rounded-lg border border-slate-200 p-6 bg-[#F7F7F5] shadow-sm transition duration-300 hover:shadow-[0_14px_35px_rgba(17,17,17,0.08)]">
            <div className="font-semibold">CAD & Technical Support</div>
            <div className="text-sm text-gray-600 mt-2">Detailers and technicians delivering constructible drawings and shop documentation.</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16">
        <div className="rounded-lg border border-[#E9E4DC] p-10 bg-[#F7F7F5] text-center shadow-sm transition duration-300 hover:shadow-[0_16px_40px_rgba(17,17,17,0.08)]">
          <h3 className="text-2xl font-extrabold">Let’s Build with Confidence</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">We deliver safe, efficient, and technically sound structural solutions. Partner with Kenmos for engineering that balances performance, cost, and constructability.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/contact" className="inline-block rounded-md bg-[#D71920] hover:bg-[#be1218] text-white px-5 py-3 font-semibold">GET A QUOTE</Link>
            <Link href="/contact" className="inline-block rounded-md border border-gray-200 px-5 py-3 font-semibold text-gray-800">CONTACT US</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// Small placeholder icon component for file/standards (keeps visual coherence without external images)
function FileIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 2v6h6" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
