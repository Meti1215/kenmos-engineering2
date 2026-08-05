'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { brand } from '@/lib/brand'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-14 md:py-16 lg:py-20 bg-white/70">
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-center lg:text-left"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D71920] md:text-xs">Get In Touch</span>
              <h2 className="mt-3 text-3xl font-black leading-tight text-black md:text-4xl lg:text-5xl">Discuss Your Next Project</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-gray-500 lg:mx-0">Partner with our structural engineering team to design, review, or supervise your next project with confidence.</p>

              <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-[#E9E4DC] bg-gray-50 shadow-[0_18px_44px_rgba(17,17,17,0.06)]">
                <div className="relative h-[300px] w-full">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.505677568588!2d38.7516805!3d9.034789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f63118cf97%3A0xc3cfec56bb24bfa!2sPiazza%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Kenmos Engineering Location Map" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col items-center gap-4 lg:items-start"
            >
              <motion.a
                whileHover={{ scale: 1.03, x: 4 }}
                whileTap={{ scale: 0.97 }}
                href={brand.phoneHref}
                className="luxury-btn inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.24em] shadow-[0_14px_30px_rgba(215,25,32,0.22)]"
              >
                Contact Us
              </motion.a>

              <div className="flex w-full max-w-md flex-col items-center gap-2 text-center lg:items-start lg:text-left">
                <a href={brand.phoneHref} className="flex items-center gap-2 text-sm font-light text-gray-700 transition-colors duration-300 hover:text-[#D71920]">
                  <Phone className="h-4 w-4 text-[#D71920]" strokeWidth={1.8} />
                  <span>{brand.phone}</span>
                </a>
                <a href={`mailto:${brand.email}`} className="flex items-center gap-2 text-sm font-light text-gray-700 transition-colors duration-300 hover:text-[#D71920]">
                  <Mail className="h-4 w-4 text-[#D71920]" strokeWidth={1.8} />
                  <span>{brand.email}</span>
                </a>
                <div className="flex items-center gap-2 text-sm font-light text-gray-700">
                  <MapPin className="h-4 w-4 text-[#D71920]" strokeWidth={1.8} />
                  <span>{brand.location}</span>
                </div>
                <div className="mt-1 flex w-full items-start gap-2 rounded-[1rem] border border-[#E9E4DC] bg-white p-3 text-sm font-light text-gray-700 shadow-[0_12px_24px_rgba(17,17,17,0.04)]">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#D71920]" strokeWidth={1.8} />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Business Hours</div>
                    <div className="mt-1">Mon–Fri: 8:00 AM – 6:00 PM</div>
                    <div>Sat: 8:00 AM – 12:00 PM</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
