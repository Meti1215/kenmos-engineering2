'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, FileText, CheckCircle2 } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type ProjectType = 'Residential' | 'Commercial' | 'Industrial' | 'Infrastructure' | 'Other' | ''

interface QuoteFormValues {
  fullName: string
  email: string
  phone: string
  company: string
  projectType: ProjectType
  budget: string
  consultDate: string
  description: string
}

const emptyForm: QuoteFormValues = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  budget: '',
  consultDate: '',
  description: '',
}

const PROJECT_TYPES: ProjectType[] = ['Residential', 'Commercial', 'Industrial', 'Infrastructure', 'Other']

const Navigation = () => {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [form, setForm] = useState<QuoteFormValues>(emptyForm)
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormValues, string>>>({})
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success'>('idle')
  const firstErrorRef = useRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null>(null)

  const navItems = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About Us', href: '/about', id: 'about' },
    { name: 'Services', href: '/services', id: 'services' },
    { name: 'Projects', href: '/projects', id: 'projects' },
    { name: 'Industries', href: '/industries', id: 'industries' },
    { name: 'Our Process', href: '/process', id: 'process' },
    { name: 'Careers', href: '/careers', id: 'careers' },
    { name: 'Contact Us', href: '/contact', id: 'contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname === href || pathname.startsWith(href + '/')
  }

  useEffect(() => {
    const handleScroll = () => {
      const isHomePage = pathname === '/'
      const heroElement = document.getElementById('home')
      const heroBottomVisible = heroElement ? heroElement.getBoundingClientRect().bottom > 0 : false

      setScrolled(window.scrollY > 20)
      setIsHeroVisible(isHomePage && heroBottomVisible)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const openQuoteModal = () => {
    setMobileMenuOpen(false)
    setIsQuoteModalOpen(true)
    setSubmitState('idle')
  }

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false)
    setTimeout(() => {
      setForm(emptyForm)
      setErrors({})
      setSubmitState('idle')
    }, 220)
  }

  useEffect(() => {
    if (!isQuoteModalOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeQuoteModal()
    }
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = originalOverflow
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isQuoteModalOpen])

  const validate = (): Partial<Record<keyof QuoteFormValues, string>> => {
    const next: Partial<Record<keyof QuoteFormValues, string>> = {}
    if (!form.fullName.trim()) next.fullName = 'Please enter your full name.'
    if (!form.email.trim()) {
      next.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Please enter a valid email address.'
    }
    if (!form.phone.trim()) {
      next.phone = 'Please enter your phone number.'
    } else if (!/^[+()\d\s-]{6,}$/.test(form.phone.trim())) {
      next.phone = 'Please enter a valid phone number.'
    }
    if (!form.projectType) next.projectType = 'Please select a project type.'
    if (!form.consultDate) next.consultDate = 'Please select a preferred consultation date.'
    if (!form.description.trim()) {
      next.description = 'Please describe your project briefly.'
    } else if (form.description.trim().length < 15) {
      next.description = 'Please provide at least 15 characters of detail.'
    }
    return next
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      const firstField = (Object.keys(nextErrors) as (keyof QuoteFormValues)[])[0]
      const el = document.querySelector<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
        `[data-quote-field="${firstField}"]`
      )
      el?.focus()
      return
    }
    setSubmitState('submitting')
    setTimeout(() => {
      setSubmitState('success')
    }, 900)
  }

  const update = <K extends keyof QuoteFormValues>(key: K, value: QuoteFormValues[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const Logo = ({ light = false }: { light?: boolean }) => (
    <div className="flex items-center gap-3 flex-shrink-0">
      <svg className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="10" width="16" height="80" fill="#D71920" />
        <path d="M78 15H55L31 46V62L62 25H78V15Z" fill="#D71920" />
        <path d="M31 52V68L68 90H88L48 52H31Z" fill="#D71920" />
        <line x1="31" y1="52" x2="48" y2="52" stroke="#FFFFFF" strokeWidth="4" />
      </svg>
      <div className="flex flex-col select-none">
        <span className={cn('text-xl md:text-2xl font-black font-heading tracking-tight leading-[0.95]', light ? 'text-white' : 'text-black')}>
          KEN<span className="text-[#D71920]">MOS</span>
        </span>
        <span className={cn('text-[9px] md:text-[10px] font-bold tracking-[0.35em] uppercase leading-none mt-1', light ? 'text-white/75' : 'text-gray-500')}>
          Engineering
        </span>
      </div>
    </div>
  )

  const field =
    'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D71920]/30 focus:border-[#D71920] transition-colors'

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300',
          isHeroVisible
            ? 'bg-transparent border-transparent shadow-none backdrop-blur-none'
            : 'bg-white border-b border-gray-200',
          scrolled && !isHeroVisible ? 'shadow-lg' : ''
        )}
      >
        {/* Inner container: max-width 1400px, 100% width, 0 auto.
            Inner horizontal padding px-12 = 48px (within 40–60px spec). */}
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* DESKTOP (≥ lg): THREE-COLUMN CSS GRID.
              grid-template-columns: auto 1fr auto
                • col 1 (auto): logo pinned far left
                • col 2 (1fr):  nav group flex+justify-center → EXACT center of header
                • col 3 (auto): CTA button pinned far right                     */}
          <div
            className={cn(
              'hidden lg:grid w-full items-center',
              scrolled ? 'min-h-[80px]' : 'min-h-[84px]'
            )}
            style={{ gridTemplateColumns: 'auto 1fr auto' }}
          >
            {/* COLUMN 1 — Logo (far left, ~48px from left edge via container px-12) */}
            <Link href="/" prefetch={true} className="cursor-pointer flex-shrink-0">
              <Logo light={isHeroVisible} />
            </Link>

            {/* COLUMN 2 — Navigation (center column, flex justify-center to pin nav group in exact middle)
                gap-x-7 (28px) → xl:gap-x-9 (36px) = 28–36px between items per spec */}
            <nav className="flex items-center justify-center gap-x-7 xl:gap-x-9">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  prefetch={true}
                  className={cn(
                    'relative whitespace-nowrap text-[13px] xl:text-[14px] font-semibold uppercase tracking-wider transition-colors py-2 inline-flex items-center',
                    isHeroVisible ? 'text-white hover:text-white' : 'text-gray-700 hover:text-[#D71920]',
                    isActive(item.href) && (isHeroVisible ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#D71920]' : 'text-[#D71920] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#D71920]')
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* COLUMN 3 — CTA Button (far right, ~48px from right edge via container px-12) */}
            <button
              type="button"
              onClick={openQuoteModal}
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#D71920] hover:bg-[#be1218] text-white text-xs font-bold uppercase tracking-wider px-5 xl:px-6 py-2.5 xl:py-3 transition-colors duration-200"
            >
              GET A QUOTE
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* TABLET / MOBILE (< lg): logo left, hamburger right */}
          <div
            className={cn(
              'lg:hidden flex items-center justify-between w-full',
              scrolled ? 'min-h-[72px]' : 'min-h-[76px]'
            )}
          >
            <Link href="/" prefetch={true} className="cursor-pointer flex-shrink-0">
              <Logo light={isHeroVisible} />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn('p-1 focus:outline-none', isHeroVisible ? 'text-white' : 'text-[#D71920]')}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    prefetch={true}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'block w-full text-left py-3 px-4 text-sm font-semibold uppercase tracking-wider text-gray-700 hover:bg-gray-50 hover:text-[#D71920] transition-colors',
                      isActive(item.href) && 'text-[#D71920] bg-red-50/50 border-l-4 border-[#D71920]'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 px-4">
                  <button
                    type="button"
                    onClick={openQuoteModal}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#D71920] hover:bg-[#be1218] text-white text-sm font-bold uppercase tracking-wider py-3 transition-colors shadow-sm"
                  >
                    GET A QUOTE
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Get a Quote Modal */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6 py-6 sm:py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
          >
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close quote modal"
              onClick={closeQuoteModal}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
            />

            {/* Modal Panel */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="quote-modal-title"
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden bg-white rounded-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] ring-1 ring-black/5 flex flex-col"
            >
              {/* Accent top bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#D71920] via-[#1a1a1a] to-[#D71920]" />

              {/* Header */}
              <div className="px-6 sm:px-8 pt-7 pb-5 border-b border-gray-100 flex items-start justify-between gap-6">
                <div className="flex items-start gap-4 min-w-0">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#D71920]/10 border border-[#D71920]/20 flex items-center justify-center text-[#D71920]">
                    <FileText className="w-6 h-6" strokeWidth={2.1} />
                  </div>
                  <div className="min-w-0">
                    <h2
                      id="quote-modal-title"
                      className="text-2xl sm:text-[28px] font-black font-heading leading-tight tracking-tight text-[#111112]"
                    >
                      Request a Quote
                    </h2>
                    <p className="mt-2 text-[14px] sm:text-[15px] leading-relaxed text-gray-600">
                      Tell us about your structural engineering project and our team will contact you shortly.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={closeQuoteModal}
                  className="flex-shrink-0 -m-1 p-2 rounded-lg text-gray-400 hover:text-[#111112] hover:bg-gray-100 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6">
                {submitState === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-8 sm:py-10 flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                      <CheckCircle2 className="w-9 h-9" strokeWidth={2.2} />
                    </div>
                    <h3 className="mt-5 text-[22px] font-heading font-black tracking-tight text-[#111112]">
                      Request Received
                    </h3>
                    <p className="mt-3 max-w-md text-[15px] leading-relaxed text-gray-600">
                      Thank you — one of our senior structural engineers will review your project details and reach out within one business day.
                    </p>
                    <div className="mt-7 flex flex-wrap justify-center gap-3">
                      <button
                        type="button"
                        onClick={closeQuoteModal}
                        className="inline-flex items-center gap-2 rounded-lg bg-[#111112] hover:bg-black text-white text-[13px] font-bold uppercase tracking-wider px-5 py-3 transition-colors"
                      >
                        Close
                      </button>
                      <Link
                        href="/projects"
                        prefetch={true}
                        onClick={closeQuoteModal}
                        className="inline-flex items-center gap-2 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-[#111112] text-[13px] font-bold uppercase tracking-wider px-5 py-3 transition-colors"
                      >
                        View Projects
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="q-fullName" className="block text-[12px] font-bold uppercase tracking-wider text-[#111112] mb-1.5">
                          Full Name <span className="text-[#D71920]">*</span>
                        </label>
                        <input
                          id="q-fullName"
                          data-quote-field="fullName"
                          type="text"
                          autoComplete="name"
                          value={form.fullName}
                          onChange={(e) => update('fullName', e.target.value)}
                          placeholder="Jane Doe"
                          className={cn(field, errors.fullName && 'border-red-400 focus:ring-red-500/20 focus:border-red-500')}
                        />
                        {errors.fullName && <p className="mt-1.5 text-[12px] text-[#D71920]">{errors.fullName}</p>}
                      </div>
                      <div>
                        <label htmlFor="q-email" className="block text-[12px] font-bold uppercase tracking-wider text-[#111112] mb-1.5">
                          Email Address <span className="text-[#D71920]">*</span>
                        </label>
                        <input
                          id="q-email"
                          data-quote-field="email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={(e) => update('email', e.target.value)}
                          placeholder="jane@company.com"
                          className={cn(field, errors.email && 'border-red-400 focus:ring-red-500/20 focus:border-red-500')}
                        />
                        {errors.email && <p className="mt-1.5 text-[12px] text-[#D71920]">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="q-phone" className="block text-[12px] font-bold uppercase tracking-wider text-[#111112] mb-1.5">
                          Phone Number <span className="text-[#D71920]">*</span>
                        </label>
                        <input
                          id="q-phone"
                          data-quote-field="phone"
                          type="tel"
                          autoComplete="tel"
                          value={form.phone}
                          onChange={(e) => update('phone', e.target.value)}
                          placeholder="+251 911 123 456"
                          className={cn(field, errors.phone && 'border-red-400 focus:ring-red-500/20 focus:border-red-500')}
                        />
                        {errors.phone && <p className="mt-1.5 text-[12px] text-[#D71920]">{errors.phone}</p>}
                      </div>
                      <div>
                        <label htmlFor="q-company" className="block text-[12px] font-bold uppercase tracking-wider text-[#111112] mb-1.5">
                          Company Name <span className="text-gray-400 font-normal tracking-normal normal-case">(optional)</span>
                        </label>
                        <input
                          id="q-company"
                          data-quote-field="company"
                          type="text"
                          autoComplete="organization"
                          value={form.company}
                          onChange={(e) => update('company', e.target.value)}
                          placeholder="Acme Construction"
                          className={field}
                        />
                      </div>
                      <div>
                        <label htmlFor="q-projectType" className="block text-[12px] font-bold uppercase tracking-wider text-[#111112] mb-1.5">
                          Project Type <span className="text-[#D71920]">*</span>
                        </label>
                        <select
                          id="q-projectType"
                          data-quote-field="projectType"
                          value={form.projectType}
                          onChange={(e) => update('projectType', e.target.value as ProjectType)}
                          className={cn(field, errors.projectType && 'border-red-400 focus:ring-red-500/20 focus:border-red-500')}
                        >
                          <option value="">Select project type…</option>
                          {PROJECT_TYPES.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                        {errors.projectType && <p className="mt-1.5 text-[12px] text-[#D71920]">{errors.projectType}</p>}
                      </div>
                      <div>
                        <label htmlFor="q-budget" className="block text-[12px] font-bold uppercase tracking-wider text-[#111112] mb-1.5">
                          Estimated Budget <span className="text-gray-400 font-normal tracking-normal normal-case">(optional)</span>
                        </label>
                        <input
                          id="q-budget"
                          data-quote-field="budget"
                          type="text"
                          value={form.budget}
                          onChange={(e) => update('budget', e.target.value)}
                          placeholder="e.g. $250K – $500K"
                          className={field}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="q-consultDate" className="block text-[12px] font-bold uppercase tracking-wider text-[#111112] mb-1.5">
                          Preferred Consultation Date <span className="text-[#D71920]">*</span>
                        </label>
                        <input
                          id="q-consultDate"
                          data-quote-field="consultDate"
                          type="date"
                          value={form.consultDate}
                          onChange={(e) => update('consultDate', e.target.value)}
                          className={cn(field, errors.consultDate && 'border-red-400 focus:ring-red-500/20 focus:border-red-500')}
                        />
                        {errors.consultDate && <p className="mt-1.5 text-[12px] text-[#D71920]">{errors.consultDate}</p>}
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="q-description" className="block text-[12px] font-bold uppercase tracking-wider text-[#111112] mb-1.5">
                          Project Description <span className="text-[#D71920]">*</span>
                        </label>
                        <textarea
                          id="q-description"
                          data-quote-field="description"
                          rows={5}
                          value={form.description}
                          onChange={(e) => update('description', e.target.value)}
                          placeholder="Briefly describe scope, location, size, timeline, and any special structural requirements (e.g. steel trusses, seismic, cost optimization)."
                          className={cn(field, 'resize-y min-h-[120px]', errors.description && 'border-red-400 focus:ring-red-500/20 focus:border-red-500')}
                        />
                        {errors.description && <p className="mt-1.5 text-[12px] text-[#D71920]">{errors.description}</p>}
                      </div>
                    </div>

                    {/* Footer actions */}
                    <div className="pt-2 mt-2 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-3 border-t border-gray-100 -mx-6 sm:-mx-8 px-6 sm:px-8 py-5 -mb-6 -pb-6">
                      <button
                        type="button"
                        onClick={closeQuoteModal}
                        className="inline-flex items-center justify-center rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-[#111112] text-[13px] font-bold uppercase tracking-wider px-5 py-3 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={submitState === 'submitting'}
                        className={cn(
                          'inline-flex items-center justify-center gap-2 rounded-lg text-white text-[13px] font-bold uppercase tracking-wider px-6 py-3 transition-colors',
                          submitState === 'submitting'
                            ? 'bg-[#D71920]/80 cursor-not-allowed'
                            : 'bg-[#D71920] hover:bg-[#be1218]'
                        )}
                      >
                        {submitState === 'submitting' ? (
                          <>
                            <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            Request Quote
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
