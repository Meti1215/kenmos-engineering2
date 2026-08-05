'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { brand } from '@/lib/brand'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: [brand.phone],
    action: () => window.open(brand.phoneHref)
  },
  {
    icon: Mail,
    title: 'Email',
    details: [brand.email],
    action: () => window.open(`mailto:${brand.email}`)
  },
  {
    icon: MapPin,
    title: 'Office',
    details: [brand.location],
    action: () => window.open('https://www.google.com/maps?q=Enat+Building+Piazza+Addis+Ababa+Ethiopia')
  },
  {
    icon: Clock,
    title: 'Hours',
    details: ['Mon–Fri: 8:00 AM – 6:00 PM', 'Sat: 8:00 AM – 12:00 PM'],
    action: null
  }
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Structural Design',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1200))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: 'General Structural Design',
        message: ''
      })
    } catch (error) {
      console.error(error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="py-14 md:py-16 lg:py-20 bg-[#FAFAF7]">
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-center lg:text-left"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D71920] md:text-xs">Get In Touch</span>
              <h2 className="mt-3 text-3xl font-black leading-tight text-black md:text-4xl lg:text-5xl">Discuss Your Next Project</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-gray-500 lg:mx-0">
                Partner with our structural engineering team to design, review, or supervise your next project with confidence.
              </p>

              <div className="mt-6 grid gap-5">
                <div className="rounded-[8px] border border-gray-100/80 bg-white p-4 md:p-5 shadow-[0_2px_14px_rgba(17,17,17,0.04)]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {contactInfo.map((info) => (
                      <button
                        key={info.title}
                        type="button"
                        onClick={info.action || undefined}
                        className={`w-full text-left ${info.action ? 'cursor-pointer' : ''}`}
                      >
                        <div className="flex items-start gap-2.5">
                          <div className="w-7 h-7 shrink-0 flex items-center justify-center text-[#D71920]">
                            <info.icon className="w-4 h-4" strokeWidth={1.7} />
                          </div>
                          <div className="min-w-0">
                            <h5 className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400 mb-0.5">
                              {info.title}
                            </h5>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-[12px] md:text-[13px] text-gray-700 font-normal leading-snug break-words">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="w-full h-[220px] rounded-[16px] overflow-hidden border border-gray-100/80 shadow-[0_4px_18px_rgba(17,17,17,0.06)] bg-gray-50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.505677568588!2d38.7516805!3d9.034789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f63118cf97%3A0xc3cfec56bb24bfa!2sPiazza%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kenmos Engineering Location Map"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-2 text-center lg:text-left">
                <h2 className="font-heading font-black text-gray-900 leading-[1.05] tracking-tight text-2xl md:text-3xl lg:text-[36px] xl:text-[40px]">
                  Contact Us
                </h2>
                <p className="text-[13px] md:text-[14px] lg:text-[15px] text-gray-500 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Fill in your details and we’ll get back to you once our team has processed your message.
                </p>
              </div>

              <div className="relative bg-white border border-gray-100/80 rounded-[10px] shadow-[0_10px_32px_-14px_rgba(17,17,17,0.18)] p-4 md:p-5 overflow-hidden">
                <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-[radial-gradient(circle_at_top_right,rgba(215,25,32,0.08),transparent_65%)] pointer-events-none" />
                <form onSubmit={handleSubmit} className="relative flex flex-col gap-3">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">
                        Name <span className="text-[#D71920]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 text-[13px] md:text-[14px] text-gray-900 bg-[#FAFAF7] border border-gray-200/90 rounded-[6px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D71920]/25 focus:border-[#D71920]/50 transition-all duration-200"
                        placeholder="e.g. Yonas Abebe"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">
                        Email address <span className="text-[#D71920]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 text-[13px] md:text-[14px] text-gray-900 bg-[#FAFAF7] border border-gray-200/90 rounded-[6px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D71920]/25 focus:border-[#D71920]/50 transition-all duration-200"
                        placeholder="e.g. name@company.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">
                      Message <span className="text-[#D71920]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 text-[13px] md:text-[14px] text-gray-900 bg-[#FAFAF7] border border-gray-200/90 rounded-[6px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D71920]/25 focus:border-[#D71920]/50 transition-all duration-200 resize-none leading-relaxed"
                      placeholder="Type your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full inline-flex items-center justify-center gap-2 bg-[#D71920] hover:bg-[#be1218] disabled:opacity-70 disabled:cursor-not-allowed text-white rounded-[6px] px-5 py-2.5 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.22em] shadow-[0_10px_22px_rgba(215,25,32,0.26)] hover:shadow-[0_14px_32px_rgba(215,25,32,0.34)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="animate-spin rounded-full h-[15px] w-[15px] md:h-[17px] md:w-[17px] border-2 border-white border-t-transparent"></span>
                        PROCESSING...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                        SEND MESSAGE
                      </span>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                      className="flex items-start gap-2.5 p-3 bg-green-50/80 border border-green-200 rounded-[6px] text-green-800 text-[12px] md:text-[13px] leading-relaxed"
                    >
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" strokeWidth={2} />
                      <span>Thank you! Your request was sent. Our lead engineer will contact you.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                      className="flex items-start gap-2.5 p-3 bg-red-50/80 border border-red-200 rounded-[6px] text-red-800 text-[12px] md:text-[13px] leading-relaxed"
                    >
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" strokeWidth={2} />
                      <span>There was a problem sending. Please try again.</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
