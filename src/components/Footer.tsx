'use client'

import React from 'react'
import { Phone, Mail, MapPin, Clock, ArrowUp, HardHat } from 'lucide-react'
import Link from 'next/link'
import { brand } from '@/lib/brand'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Industries', href: '/industries' },
  ]

  const secondaryLinks = [
    { name: 'Our Process', href: '/process' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const Logo = () => (
    <div className="flex items-center gap-3">
      <svg className="h-8 w-8 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="10" width="16" height="80" fill="#D71920" />
        <path d="M78 15H55L31 46V62L62 25H78V15Z" fill="#D71920" />
        <path d="M31 52V68L68 90H88L48 52H31Z" fill="#D71920" />
        <line x1="31" y1="52" x2="48" y2="52" stroke="#FFFFFF" strokeWidth="4" />
      </svg>
      <div className="flex flex-col text-left">
        <span className="text-lg font-black leading-none tracking-tight text-white">KEN<span className="text-[#D71920]">MOS</span></span>
        <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.3em] text-gray-400 leading-none">Engineering</span>
      </div>
    </div>
  )

  return (
    <footer className="border-t border-gray-900 bg-[#111112] pt-16 pb-8 text-white">
      <div className="content-container">
        <div className="grid gap-10 pb-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="flex flex-col gap-5">
            <Link href="/" prefetch={true}><Logo /></Link>
            <p className="text-sm font-light leading-relaxed text-gray-400">Kenmos Structural Engineering delivers innovative, safe, and cost-optimized structural designs and supervision in Ethiopia since 2009.</p>
            <div className="flex items-center gap-3 text-gray-500"><span className="text-xs font-bold uppercase tracking-[0.24em]">Structural Excellence</span></div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="border-l-2 border-[#D71920] pl-3 text-xs font-bold uppercase tracking-[0.24em] text-[#D71920]">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => <li key={link.name}><Link href={link.href} prefetch={true} className="text-sm text-gray-400 transition-colors duration-200 hover:text-white">{link.name}</Link></li>)}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="border-l-2 border-[#D71920] pl-3 text-xs font-bold uppercase tracking-[0.24em] text-[#D71920]">Our Process & Info</h4>
            <ul className="flex flex-col gap-2.5">
              {secondaryLinks.map((link) => <li key={link.name}><Link href={link.href} prefetch={true} className="text-sm text-gray-400 transition-colors duration-200 hover:text-white">{link.name}</Link></li>)}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="border-l-2 border-[#D71920] pl-3 text-xs font-bold uppercase tracking-[0.24em] text-[#D71920]">Office Details</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D71920]" /><span className="font-light">{brand.location}</span></div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 shrink-0 text-[#D71920]" /><a href={brand.phoneHref} className="font-light transition-colors hover:text-white">{brand.phone}</a></div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 shrink-0 text-[#D71920]" /><a href={`mailto:${brand.email}`} className="font-light transition-colors hover:text-white">{brand.email}</a></div>
              <div className="flex items-center gap-3"><Clock className="h-4 w-4 shrink-0 text-[#D71920]" /><span className="font-light">{brand.hours}</span></div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-6 border-t border-gray-900 pb-8 pt-8 sm:flex-row">
          <div className="flex items-center gap-3 text-left">
            <div className="flex h-10 w-10 items-center justify-center bg-white/5 text-[#D71920]"><HardHat className="h-5 w-5" /></div>
            <div>
              <h5 className="text-sm font-bold text-white">Need structural value engineering?</h5>
              <p className="text-xs font-light text-gray-400">Get in touch with us to optimize your steel or concrete design.</p>
            </div>
          </div>
          <Link href="/contact" prefetch={true} className="shrink-0 rounded-full bg-[#D71920] px-6 py-3 text-xs font-bold uppercase tracking-[0.24em] text-white transition-colors hover:bg-[#be1218]">GET A QUOTE</Link>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-gray-900 pt-8 text-xs text-gray-500 md:flex-row">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <div>© {new Date().getFullYear()} {brand.name}. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <Link href="/privacy" prefetch={true} className="transition-colors hover:text-white">Privacy Policy</Link>
              <Link href="/terms" prefetch={true} className="transition-colors hover:text-white">Terms of Use</Link>
              <Link href="/disclaimer" prefetch={true} className="transition-colors hover:text-white">Disclaimer</Link>
            </div>
          </div>
          <button onClick={scrollToTop} className="flex items-center gap-2 shrink-0 transition-colors hover:text-white"><span>Back to Top</span><ArrowUp className="h-3.5 w-3.5" /></button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
