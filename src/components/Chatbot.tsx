'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X, Building2, ShieldCheck, FolderKanban, Factory, Workflow,
  Users, Phone, FileText, ChevronLeft, ChevronRight, Clock,
  MapPin, Mail, HardHat, Award, ArrowRight, Landmark,
  type LucideProps,
} from 'lucide-react'
import { brand } from '@/lib/brand'

type SubItem = {
  id: string
  title: string
  body: string
  highlight?: string
}

type MainCategory = {
  id: 'about' | 'services' | 'projects' | 'industries' | 'process' | 'careers' | 'contact' | 'quote'
  label: string
  kicker: string
  title: string
  intro: string
  Icon: React.ComponentType<LucideProps>
  items?: SubItem[]
  primaryCta?: { label: string; action: 'openQuote' | 'url'; href?: string }
  secondaryCta?: { label: string; action: 'openQuote' | 'url'; href?: string }
}

type View =
  | { kind: 'welcome' }
  | { kind: 'category'; id: MainCategory['id'] }
  | { kind: 'sub'; parentId: MainCategory['id']; subId: string }

const pushQuote = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('kenmos:openQuoteModal'))
  }
}

const navigateTo = (href: string) => {
  if (typeof window === 'undefined') return
  if (href.startsWith('mailto:')) {
    window.location.href = href
  } else {
    window.location.href = href
  }
}

const MAIN_CATEGORIES: MainCategory[] = [
  {
    id: 'about',
    label: 'About Us',
    kicker: 'Our Practice',
    title: 'About Kenmos Engineering',
    intro: 'Structural engineering practice established in 2009. Led by founder Kenmos Tesfaye — 20 years of technical leadership across 800+ projects.',
    Icon: Building2,
    items: [
      { id: 'founder', title: 'Founder & Leadership', body: 'Kenmos Tesfaye personally directs structural design and construction supervision across the practice, with 20 years of hands-on engineering and 800+ completed projects.', highlight: '20 years · 800+ projects' },
      { id: 'philosophy', title: 'Design Approach', body: 'Every design is optimized for structural safety, material efficiency, and long-term durability. Finite-element analysis validates all systems to international codes.', highlight: 'FEM · ASCE · ACI' },
      { id: 'track', title: 'Track Record', body: 'Since 2009 we have served commercial banks, developers, universities, stadiums, government institutions, and industrial clients across Ethiopia.', highlight: 'Established 2009' },
    ],
  },
  {
    id: 'services',
    label: 'Our Services',
    kicker: 'What We Deliver',
    title: 'Comprehensive Engineering Solutions',
    intro: 'Six integrated disciplines — structural design, supervision, project management, assessment, BOQ preparation, and technical consultancy.',
    Icon: ShieldCheck,
    items: [
      { id: 'structural-design', title: 'Structural Design', body: 'We engineer reinforced concrete and steel-framed structures for buildings of every scale and complexity.', highlight: 'RC + Steel frames' },
      { id: 'supervision', title: 'Construction Supervision', body: 'We conduct site inspections and quality audits to ensure design intent is faithfully executed at every construction phase.', highlight: 'Phase-gate QA' },
      { id: 'project-mgmt', title: 'Project Management', body: 'We coordinate design teams, milestones, and budgets to deliver projects on schedule and within agreed scope.', highlight: 'On time · On budget' },
      { id: 'assessment', title: 'Assessment & Retrofitting', body: 'We evaluate existing structures and deliver certified retrofitting plans for structural safety and longevity.', highlight: 'Seismic + retrofits' },
      { id: 'tender-boq', title: 'Tender & BOQ Preparation', body: 'We produce accurate bills of quantities and tender documentation for transparent procurement.', highlight: 'Detailed BOQs' },
      { id: 'consultancy', title: 'Engineering Consultancy', body: 'We provide technical reviews, peer audits, and advisory support for developers and investors.', highlight: 'Expert advisory' },
    ],
    secondaryCta: { label: 'Request a Review', action: 'openQuote' },
  },
  {
    id: 'projects',
    label: 'Projects',
    kicker: 'Selected Portfolio',
    title: '800+ Projects Delivered',
    intro: 'A portfolio spanning luxury villas, multi-family blocks, heavy industrial warehouses, high-rise towers, and landmark public buildings.',
    Icon: FolderKanban,
    items: [
      { id: 'commercial', title: 'Commercial Developments', body: 'High-rise office towers, mixed-use buildings, shopping malls, bank headquarters, and retail centers.', highlight: 'High-rise · Mixed-use' },
      { id: 'industrial', title: 'Industrial & Steel Structures', body: 'Heavy steel warehouses, factories, arch-truss sheds, stadiums, and large-span industrial roofing.', highlight: 'Steel truss specialists' },
      { id: 'residential', title: 'Residential Complexes', body: 'Luxury villas, multi-family apartment blocks, and scaled residential developments.', highlight: 'Villas · Apartments' },
      { id: 'institutional', title: 'Institutional & Public', body: 'Government buildings, university campuses, schools, and public assembly structures.', highlight: 'Government + Education' },
    ],
    primaryCta: { label: 'View Project Showcase', action: 'url', href: '/projects' },
  },
  {
    id: 'industries',
    label: 'Industries',
    kicker: 'Sectors Served',
    title: 'Engineering Across Sectors',
    intro: 'Sector-specific structural knowledge tailored to the technical demands of each industry.',
    Icon: Landmark,
    items: [
      { id: 'commercial-ind', title: 'Commercial Real Estate', body: 'Offices, malls, mixed-use buildings, and high-rise towers.' },
      { id: 'industrial-ind', title: 'Industrial & Manufacturing', body: 'Factories, warehouses, and heavy industrial plants.' },
      { id: 'residential-ind', title: 'Residential Development', body: 'Multi-unit apartment complexes and scaled housing.' },
      { id: 'institutional-ind', title: 'Institutional & Government', body: 'Universities, schools, and public buildings.' },
      { id: 'hospitality', title: 'Hospitality & Tourism', body: 'Hotels, resorts, and leisure complexes.' },
      { id: 'infrastructure', title: 'Infrastructure Works', body: 'Bridges, retaining structures, and sporting venues.' },
    ],
  },
  {
    id: 'process',
    label: 'Our Process',
    kicker: 'How We Work',
    title: 'A Proven 4-Step Process',
    intro: 'A phase-gated workflow refined across 800+ project deliveries — designed to minimize risk and maximize client value.',
    Icon: Workflow,
    items: [
      { id: 'p1', title: '1 · Discovery & Consultation', body: 'We meet clients and architects to define scope, budget, constraints, and delivery timeline.', highlight: 'Kick-off workshop' },
      { id: 'p2', title: '2 · Analysis & Design', body: 'Finite-element analysis and code-compliant modelling produce validated structural systems.', highlight: 'FEM · ASCE · ACI' },
      { id: 'p3', title: '3 · Value Engineering', body: 'We refine materials and detailing to optimize cost without compromising performance.', highlight: 'Measured cost savings' },
      { id: 'p4', title: '4 · Construction Supervision', body: 'Rigorous site inspections at each phase verify compliance with design intent.', highlight: 'Phase-gate QA' },
    ],
  },
  {
    id: 'careers',
    label: 'Careers',
    kicker: 'Join Our Team',
    title: 'Build Your Career With Us',
    intro: 'Work alongside senior structural engineers on Ethiopia\u2019s most technically demanding structural projects.',
    Icon: Users,
    items: [
      { id: 'culture', title: 'Why Kenmos', body: 'Landmark project exposure, direct mentorship from senior engineers, clear growth tracks, and competitive compensation.', highlight: 'Mentorship · Growth' },
      { id: 'openings', title: 'How to Apply', body: 'We periodically hire structural engineers, CAD detailers, and site engineers. Email your CV and portfolio to contact@kenmosengineering.com with the subject \u201cCareer Application \u2014 [Role].\u201d', highlight: 'CV + portfolio' },
    ],
    primaryCta: { label: 'Email Your CV', action: 'url', href: 'mailto:contact@kenmosengineering.com' },
  },
  {
    id: 'contact',
    label: 'Contact Us',
    kicker: 'Get In Touch',
    title: 'Contact Our Headquarters',
    intro: 'Reach out for design reviews, new project inquiries, or engineering consultations.',
    Icon: Phone,
    items: [
      { id: 'address', title: 'Office Address', body: brand.location },
      { id: 'phone-ch', title: 'Phone', body: brand.phone },
      { id: 'email', title: 'Email', body: brand.email },
      { id: 'hours', title: 'Business Hours', body: brand.hours },
    ],
    primaryCta: { label: 'Request a Consultation', action: 'openQuote' },
  },
  {
    id: 'quote',
    label: 'Get a Quote',
    kicker: 'Start Your Project',
    title: 'Request a Structural Review',
    intro: 'Share your project details. Our lead engineer reviews blueprints and proposes options within one business day.',
    Icon: FileText,
    items: [
      { id: 'prepare', title: 'What to Prepare', body: 'Architectural drawings, structural scope, geotechnical report, project timeline, and any existing conditions survey.' },
      { id: 'turnaround', title: 'Response Time', body: 'Submissions are reviewed within one business day by our lead structural engineer.', highlight: '1 business day' },
      { id: 'consult-format', title: 'Consultation Format', body: 'In-person at our Piazza office, virtual call, or site walk — whichever suits the project.' },
    ],
    primaryCta: { label: 'Open Quote Request Form', action: 'openQuote' },
  },
]

function findCat(id: MainCategory['id']): MainCategory {
  return MAIN_CATEGORIES.find(c => c.id === id)!
}

function findSub(parentId: MainCategory['id'], subId: string): SubItem | undefined {
  return findCat(parentId).items?.find(i => i.id === subId)
}

const btnBase =
  'group relative inline-flex items-center justify-between gap-2 w-full text-left rounded-[18px] border border-[#E9E4DC] bg-white px-4 py-3 text-[11px] md:text-xs font-semibold text-gray-800 shadow-[0_2px_6px_rgba(17,17,17,0.04)] transition-all duration-250 hover:shadow-[0_10px_24px_-8px_rgba(215,25,32,0.18)] hover:-translate-y-[3px] hover:border-[#D71920]/30 active:translate-y-0'

const iconBadge = (size: 'sm' | 'md' | 'lg' = 'md') =>
  `shrink-0 inline-flex items-center justify-center rounded-[12px] bg-[#D71920]/10 text-[#D71920] ${
    size === 'lg' ? 'h-11 w-11 md:h-12 md:w-12' : size === 'sm' ? 'h-8 w-8 md:h-9 md:w-9' : 'h-9 w-9 md:h-10 md:w-10'
  }`

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`rounded-[18px] border border-[#E9E4DC] bg-white shadow-[0_4px_14px_-6px_rgba(17,17,17,0.05),0_1px_2px_0_rgba(17,17,17,0.03)] ${className}`}>
    {children}
  </div>
)

const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-[#E9E4DC] bg-white text-[10px] font-bold uppercase tracking-[0.16em] text-gray-600 px-3 py-1">
    {children}
  </span>
)

const NavButton: React.FC<{ onClick: () => void; children: React.ReactNode; variant?: 'back' | 'primary' | 'ghost'; disabled?: boolean }> = ({
  onClick,
  children,
  variant = 'primary',
  disabled = false,
}) => {
  const base =
    'inline-flex items-center gap-1.5 rounded-[12px] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-200 leading-none'
  const styles =
    variant === 'back'
      ? 'border border-gray-200 text-gray-700 hover:border-[#D71920]/25 hover:text-[#D71920] bg-white'
      : variant === 'primary'
      ? 'bg-[#D71920] text-white hover:bg-[#be1218] shadow-[0_4px_14px_-4px_rgba(215,25,32,0.35)]'
      : 'bg-[#D71920]/10 text-[#D71920] hover:bg-[#D71920]/20'
  return (
    <button type="button" onClick={onClick} disabled={disabled} className={`${base} ${styles} disabled:opacity-50 disabled:cursor-not-allowed`}>
      {children}
    </button>
  )
}

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.045, delayChildren: 0.02 } },
  exit: { opacity: 0, transition: { duration: 0.14 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -4, transition: { duration: 0.14 } },
}

const RobotWithIndicator: React.FC<{ size?: number }> = ({ size = 82 }) => {
  return (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      {/* Comic-style 3-dot speech indicator above-left of the robot's head */}
      <motion.div
        aria-hidden
        className="absolute z-20 flex items-end gap-1"
        style={{ top: -10, left: -6 }}
        initial="hidden"
        animate="show"
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="block rounded-full bg-[#D71920] shadow-[0_1px_4px_rgba(215,25,32,0.35)]"
            style={{ width: 7, height: 7 }}
            variants={{
              hidden: { opacity: 0.2, y: 0 },
              show: {
                opacity: [0.25, 1, 0.25],
                y: [0, -4, 0],
                transition: {
                  duration: 1.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.16,
                },
              },
            }}
          />
        ))}
      </motion.div>

      {/* Soft halo behind robot */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-[22px] bg-[radial-gradient(circle_at_center,rgba(215,25,32,0.14)_0%,rgba(215,25,32,0)_68%)]"
        style={{ transform: 'scale(1.18)' }}
      />

      {/* Robot */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 h-full w-full rounded-[20px] bg-[#D71920]/10 border border-[#D71920]/15 flex items-center justify-center"
      >
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[68%] h-[68%] text-[#D71920]">
          <path d="M6 22H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1M42 22h1a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-1" />
          <rect x="6" y="12" width="36" height="26" rx="8" />
          <path d="M24 12V7" />
          <circle cx="24" cy="5" r="2.2" fill="currentColor" stroke="none" />
          <circle cx="17.5" cy="24" r="2.6" fill="currentColor" stroke="none" />
          <circle cx="30.5" cy="24" r="2.6" fill="currentColor" stroke="none" />
          <path d="M18 31c3 2 9 2 12 0" strokeWidth="2.3" />
        </svg>
      </motion.div>
    </div>
  )
}

const WelcomeScreen: React.FC<{ onSelect: (id: MainCategory['id']) => void }> = ({ onSelect }) => (
  <motion.div
    key="welcome"
    variants={staggerContainer}
    initial="hidden"
    animate="show"
    exit="exit"
    className="flex flex-col gap-3"
  >
    <motion.div variants={fadeUp} className="flex flex-col items-center text-center gap-2 px-1 pt-1">
      <RobotWithIndicator size={82} />
      <div>
        <Chip>Guided Assistant</Chip>
      </div>
      <h3 className="font-heading text-[17px] md:text-[18px] font-black tracking-tight text-gray-950 leading-tight">
        Hi, we're <span className="text-[#D71920]">Kenmos</span> Engineering
      </h3>
      <p className="text-[11px] md:text-[12px] leading-relaxed text-gray-600 max-w-[250px]">
        Explore our expertise, services and project portfolio — or skip straight to requesting a quote. Tap any topic below.
      </p>
    </motion.div>

    <motion.div variants={fadeUp} className="grid grid-cols-2 gap-2.5">
      {MAIN_CATEGORIES.map((cat) => {
        const Icon = cat.Icon
        return (
          <motion.button
            key={cat.id}
            type="button"
            onClick={() => onSelect(cat.id)}
            variants={fadeUp}
            className={btnBase}
          >
            <span className="flex items-center gap-2 min-w-0">
              <span className={iconBadge('sm')}>
                <Icon className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={2} />
              </span>
              <span className="truncate">{cat.label}</span>
            </span>
            <ChevronRight className="h-3.5 w-3.5 text-gray-300 group-hover:text-[#D71920] group-hover:translate-x-0.5 transition-colors duration-200 shrink-0" />
          </motion.button>
        )
      })}
    </motion.div>
  </motion.div>
)

const CategoryScreen: React.FC<{
  id: MainCategory['id']
  onBack: () => void
  onSelectSub: (subId: string) => void
}> = ({ id, onBack, onSelectSub }) => {
  const cat = findCat(id)
  const Icon = cat.Icon
  const items = cat.items
  const handleAction = (action: 'openQuote' | 'url', href?: string) => {
    if (action === 'openQuote') pushQuote()
    else if (href) navigateTo(href)
  }
  const gridMode = cat.id === 'services' || cat.id === 'industries'
  return (
    <motion.div key={`cat-${id}`} variants={staggerContainer} initial="hidden" animate="show" exit="exit" className="flex flex-col gap-3">
      <motion.div variants={fadeUp} className="flex items-center justify-between">
        <NavButton onClick={onBack} variant="back">
          <ChevronLeft className="h-3.5 w-3.5" /> Main
        </NavButton>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500">Home › {cat.label}</span>
      </motion.div>

      <Card className="p-4">
        <motion.div variants={fadeUp} className="flex flex-col gap-2">
          <div className="flex items-start gap-3">
            <span className={iconBadge('lg')}>
              <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#D71920]">{cat.kicker}</p>
              <h3 className="mt-0.5 font-heading text-[15px] md:text-[16px] font-black text-gray-950 leading-tight">{cat.title}</h3>
            </div>
          </div>
          <p className="text-[11.5px] md:text-[12px] leading-relaxed text-gray-600 pt-0.5">
            {cat.intro}
          </p>
        </motion.div>
      </Card>

      {items && items.length > 0 && (
        <motion.div variants={fadeUp} className="flex flex-col gap-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 pl-0.5">
            {cat.id === 'process' ? 'The 4 Phases' : 'Explore Topics'}
          </p>
          <div className={gridMode ? 'grid grid-cols-2 gap-2.5' : 'flex flex-col gap-2'}>
            {items.map((item) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => onSelectSub(item.id)}
                variants={fadeUp}
                className={btnBase}
              >
                <span className="flex flex-col items-start gap-0.5 min-w-0 text-left">
                  <span className="truncate w-full">{item.title}</span>
                  {item.highlight && (
                    <span className="text-[9.5px] font-semibold text-[#D71920] leading-tight">
                      {item.highlight}
                    </span>
                  )}
                </span>
                <ChevronRight className="h-3.5 w-3.5 text-gray-300 group-hover:text-[#D71920] shrink-0" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {(cat.primaryCta || cat.secondaryCta) && (
        <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-0.5">
          {cat.primaryCta && (
            <NavButton onClick={() => handleAction(cat.primaryCta!.action, cat.primaryCta!.href)}>
              {cat.primaryCta.label}
              <ArrowRight className="h-3.5 w-3.5" />
            </NavButton>
          )}
          {cat.secondaryCta && (
            <NavButton onClick={() => handleAction(cat.secondaryCta!.action, cat.secondaryCta!.href)} variant="ghost">
              {cat.secondaryCta.label}
            </NavButton>
          )}
        </motion.div>
      )}
    </motion.div>
  )
}

const SubScreen: React.FC<{
  parentId: MainCategory['id']
  subId: string
  onBack: () => void
  onHome: () => void
}> = ({ parentId, subId, onBack, onHome }) => {
  const cat = findCat(parentId)
  const Icon = cat.Icon
  const sub = findSub(parentId, subId)
  if (!sub) return null
  return (
    <motion.div key={`sub-${parentId}-${subId}`} variants={staggerContainer} initial="hidden" animate="show" exit="exit" className="flex flex-col gap-3">
      <motion.div variants={fadeUp} className="flex items-center justify-between">
        <NavButton onClick={onBack} variant="back">
          <ChevronLeft className="h-3.5 w-3.5" /> {cat.label}
        </NavButton>
        <button
          type="button"
          onClick={onHome}
          className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-gray-500 hover:text-[#D71920]"
        >
          Home
        </button>
      </motion.div>

      <Card className="p-4 flex flex-col gap-2.5">
        <motion.div variants={fadeUp} className="flex items-center gap-2">
          <span className={iconBadge()}>
            <Icon className="w-5 h-5" strokeWidth={2} />
          </span>
          <div className="min-w-0">
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#D71920]">{cat.kicker}</p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className="font-heading text-[15px] md:text-[16px] font-black text-gray-950 leading-tight">
            {sub.title}
          </h3>
          {sub.highlight && (
            <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-[#D71920]/15 bg-[#D71920]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#D71920]">
              <Award className="w-3 h-3" /> {sub.highlight}
            </div>
          )}
        </motion.div>

        <motion.p variants={fadeUp} className="text-[11.5px] md:text-[12px] leading-relaxed text-gray-700 pt-0.5">
          {sub.body}
        </motion.p>

        {parentId === 'contact' && (
          <div className="flex flex-col gap-1.5 pt-0.5">
            {subId === 'hours' && (
              <motion.div variants={fadeUp} className="flex items-center gap-1.5 rounded-[14px] border border-[#E9E4DC] bg-white px-3 py-2.5 text-[11px] text-gray-700">
                <Clock className="w-4 h-4 text-[#D71920]" /> <span>{brand.hours}</span>
              </motion.div>
            )}
            {subId === 'phone-ch' && (
              <motion.a variants={fadeUp} href={`tel:${brand.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 rounded-[14px] border border-[#E9E4DC] bg-white px-3 py-2.5 text-[11px] text-gray-700 hover:border-[#D71920]/30">
                <Phone className="w-4 h-4 text-[#D71920]" /> <span>{brand.phone}</span>
              </motion.a>
            )}
            {subId === 'email' && (
              <motion.a variants={fadeUp} href={`mailto:${brand.email}`} className="flex items-center gap-2 rounded-[14px] border border-[#E9E4DC] bg-white px-3 py-2.5 text-[11px] text-gray-700 hover:border-[#D71920]/30">
                <Mail className="w-4 h-4 text-[#D71920]" /> <span>{brand.email}</span>
              </motion.a>
            )}
            {subId === 'address' && (
              <motion.div variants={fadeUp} className="flex items-start gap-2 rounded-[14px] border border-[#E9E4DC] bg-white px-3 py-2.5 text-[11px] text-gray-700">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-[#D71920]" /> <span>{brand.location}</span>
              </motion.div>
            )}
          </div>
        )}

        {(parentId === 'services' || parentId === 'quote') && (
          <motion.div variants={fadeUp} className="pt-0.5">
            <NavButton onClick={pushQuote}>
              {parentId === 'quote' ? 'Open Quote Request Form' : 'Request This Service'} <ArrowRight className="h-3.5 w-3.5" />
            </NavButton>
          </motion.div>
        )}
      </Card>

      <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
        <NavButton onClick={onBack} variant="back">
          <ChevronLeft className="h-3.5 w-3.5" /> Back to {cat.label}
        </NavButton>
        <NavButton onClick={onHome} variant="ghost">
          <HardHat className="h-3.5 w-3.5" /> Main Menu
        </NavButton>
      </motion.div>
    </motion.div>
  )
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [view, setView] = useState<View>({ kind: 'welcome' })

  const handleOpenChat = () => {
    setIsOpen(true)
    setView({ kind: 'welcome' })
  }

  const goCategory = (id: MainCategory['id']) => setView({ kind: 'category', id })
  const goSub = (parentId: MainCategory['id'], subId: string) => setView({ kind: 'sub', parentId, subId })
  const goWelcome = () => setView({ kind: 'welcome' })
  const goBack = () => {
    if (view.kind === 'sub') {
      setView({ kind: 'category', id: view.parentId })
    } else {
      setView({ kind: 'welcome' })
    }
  }

  const dotDiameter = 5
  const dotGap = 4

  const typingDotVariants = {
    idle: (i: number) => ({
      y: 0,
      opacity: 0.28,
      scale: 0.85,
      transition: {
        duration: 0.25,
        ease: 'easeOut',
        delay: i * 0.03,
      },
    }),
    typing: (i: number) => ({
      y: [0, -4, 0],
      opacity: [0.28, 1, 0.28],
      scale: [0.85, 1.15, 0.85],
      transition: {
        duration: 1.25,
        ease: 'easeInOut',
        delay: i * 0.18,
        repeat: Infinity,
        repeatType: 'loop' as const,
      },
    }),
  }

  return (
    <div className="fixed bottom-[150px] md:bottom-6 right-4 md:right-6 lg:right-6 z-50 flex flex-col items-end">
      <div className="relative">
        <motion.div
          className="absolute z-20 flex items-end"
          style={{
            gap: `${dotGap}px`,
            top: -((dotDiameter * 2) + 2),
            left: -6,
          }}
          initial={false}
          animate={isOpen ? 'idle' : 'typing'}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              custom={i}
              variants={typingDotVariants}
              className="block rounded-full bg-[#D71920]"
              style={{
                width: dotDiameter,
                height: dotDiameter,
                boxShadow: '0 1px 3px rgba(215,25,32,0.3)',
              }}
            />
          ))}
        </motion.div>

        <motion.button
          onClick={handleOpenChat}
          initial={{ scale: 0.6, y: 20, opacity: 0 }}
          animate={{
            scale: 1,
            y: 0,
            opacity: 1,
            boxShadow: '0 4px 12px -2px rgba(215,25,32,0.18), 0 0 0 0 rgba(215,25,32,0)',
          }}
          transition={{
            initial: { duration: 0 },
            scale: { type: 'spring', stiffness: 260, damping: 16, mass: 0.8 },
            opacity: { delay: 0.05, duration: 0.45, ease: 'easeOut' },
          }}
          whileHover={{
            scale: 1.05,
            y: -2,
            boxShadow: '0 8px 24px -4px rgba(215,25,32,0.45)',
            transition: {
              scale: { duration: 0.2, ease: 'easeInOut' },
              y: { duration: 0.2, ease: 'easeInOut' },
              boxShadow: { duration: 0.2, ease: 'easeInOut' },
            },
          }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 bg-[#D71920] text-white flex items-center justify-center shadow-lg rounded-full relative focus:outline-none"
          aria-label="Open Kenmos guided assistant"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 relative z-10 text-white">
            <path d="M3 11h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1M21 11h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1" />
            <rect x="3" y="6" width="18" height="13" rx="4" />
            <path d="M12 6V3" />
            <circle cx="12" cy="2" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="8.5" cy="12" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="15.5" cy="12" r="1.5" fill="currentColor" stroke="none" />
            <path d="M9 15.5c1.5 1 4.5 1 6 0" strokeWidth="1.8" />
          </svg>
        </motion.button>
      </div>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22, mass: 0.75 }}
            className="chatbot-window absolute bottom-[60px] right-0 w-[calc(100vw-2.5rem)] sm:w-[320px] md:w-[350px] max-h-[78vh] sm:h-[540px] md:h-[580px] bg-[#FAFAF7] border border-[#E9E4DC] shadow-[0_16px_50px_-10px_rgba(17,17,17,0.18),0_6px_18px_-10px_rgba(17,17,17,0.08)] flex flex-col z-50 rounded-[20px] overflow-hidden"
          >
            {/* Header with thin red top accent */}
            <div className="bg-[#0f0f10] text-white px-4 py-2.5 flex justify-between items-center border-b border-gray-800 relative">
              <span aria-hidden className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-[#D71920] via-[#D71920]/80 to-[#D71920]" />
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <h4 className="text-[11px] md:text-xs font-semibold leading-tight font-heading tracking-wide">Kenmos Guided Assistant</h4>
                  <p className="text-[8px] text-gray-400 uppercase tracking-[0.22em] leading-none mt-0.5">Structural Information</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors"
                aria-label="Close assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content area with animated navigation screens */}
            <div className="flex-1 overflow-y-auto px-3.5 py-3.5">
              <AnimatePresence mode="wait">
                {view.kind === 'welcome' && <WelcomeScreen key="w" onSelect={goCategory} />}
                {view.kind === 'category' && (
                  <CategoryScreen key={`c-${view.id}`} id={view.id} onBack={goBack} onSelectSub={(sid) => goSub(view.id, sid)} />
                )}
                {view.kind === 'sub' && (
                  <SubScreen key={`s-${view.parentId}-${view.subId}`} parentId={view.parentId} subId={view.subId} onBack={goBack} onHome={goWelcome} />
                )}
              </AnimatePresence>
            </div>

            {/* Footer bar with brand + quick quote pill */}
            <div className="border-t border-[#E9E4DC] bg-white/60 px-3.5 py-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <HardHat className="w-3.5 h-3.5 text-[#D71920]" />
                <span className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  {brand.shortName} · Est. 2009
                </span>
              </div>
              <button
                type="button"
                onClick={() => pushQuote()}
                className="inline-flex items-center gap-1 rounded-full bg-[#D71920]/10 hover:bg-[#D71920]/20 text-[#D71920] px-2.5 py-1.5 text-[9.5px] font-bold uppercase tracking-[0.18em] transition-colors"
              >
                <FileText className="w-3 h-3" />
                Free Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Chatbot
