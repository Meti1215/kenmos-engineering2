'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Users, GraduationCap, ArrowRight, Mail, FileText, BadgeCheck } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function CareersPage() {
  const values = [
    {
      title: 'Precision & Excellence',
      description: 'A structural modeling culture focused on analysis precision, code compliance, and delivery confidence.',
      icon: Briefcase,
    },
    {
      title: 'Team Collaboration',
      description: 'We value communication across design leads, project teams, contractors, and site supervisors.',
      icon: Users,
    },
    {
      title: 'Continuous Learning',
      description: 'We support professional growth through technical mentoring, software workflows, and engineering innovation.',
      icon: GraduationCap,
    },
  ]

  return (
    <main className="relative min-h-screen bg-white">
      <Navigation />

      <section className="relative pt-24 pb-10 md:pb-16 px-4 sm:px-6 lg:px-8 bg-[#111112] text-white">
        <div className="relative max-w-7xl mx-auto text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-[#D71920] text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            Careers at Kenmos
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#D71920] font-heading uppercase leading-none mt-2">
            Join Our Team
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl leading-relaxed mt-2 font-light">
            Grow with a team that delivers structural excellence, site coordination, and engineering confidence across high-impact projects.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white border border-gray-100 p-8 flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-red-50 text-[#D71920] flex items-center justify-center">
                <item.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h2 className="text-xl font-bold text-black">{item.title}</h2>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-gray-50 border border-gray-100 p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[#D71920] text-xs font-bold uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>No Open Positions Available</span>
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl font-black font-heading text-black uppercase tracking-tight">
                There are currently no open vacancies.
              </h2>
              <p className="mt-4 text-sm text-gray-500 font-light leading-relaxed">
                We are not advertising any active roles at this time. We welcome interested candidates to check back for future opportunities as new projects and team needs arise.
              </p>
              <p className="mt-3 text-sm text-gray-500 font-light leading-relaxed">
                If you would like to be considered for future openings, please submit your CV and contact details through our contact page and we will keep your information for future consideration.
              </p>
            </div>

            <div className="w-full md:max-w-md bg-white border border-gray-100 p-6 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#D71920]">Submit Your CV</h3>
              <p className="mt-3 text-sm text-gray-500 font-light leading-relaxed">
                Share your experience, portfolio, and preferred role to be considered when new opportunities open.
              </p>
              <a
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 bg-[#D71920] hover:bg-[#be1218] text-white text-xs font-bold uppercase tracking-wider px-6 py-4 transition-colors"
              >
                Submit Your CV
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="mt-6 border-t border-gray-100 pt-4 space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#D71920]" />
                  <span>Use the contact page to send your application details.</span>
                </div>
                <div className="flex items-center gap-3">
                  <BadgeCheck className="w-4 h-4 text-[#D71920]" />
                  <span>Applications are reviewed when future vacancies become available.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
