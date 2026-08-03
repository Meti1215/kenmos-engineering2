'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { brand } from '@/lib/brand'
import { Phone, Mail, MapPin, Clock, FileText, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Structural Design', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactInfo = [
    { icon: Phone, title: 'Phone Number', details: [brand.phone], action: () => window.open(brand.phoneHref) },
    { icon: Mail, title: 'Email Address', details: [brand.email], action: () => window.open(`mailto:${brand.email}`) },
    { icon: MapPin, title: 'Physical Office', details: [brand.location], action: () => window.open('https://www.google.com/maps?q=Enat+Building+Piazza+Addis+Ababa+Ethiopia') },
    { icon: Clock, title: 'Business Hours', details: [brand.hours], action: null },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: 'General Structural Design', message: '' })
    } catch (error) {
      console.error(error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="section-padding bg-white/70">
      <div className="content-container">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D71920] md:text-xs">Get In Touch</span>
          <h2 className="mt-3 text-3xl font-black leading-tight text-black md:text-4xl lg:text-5xl">Discuss Your Next Project</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-gray-500">Contact our Addis Ababa headquarters for structural analysis, steel detailing, value engineering, or site supervision inquiries.</p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((info) => (
                <div key={info.title} onClick={info.action || undefined} className={`flex items-start gap-4 rounded-[1.4rem] border border-[#E9E4DC] bg-white p-6 shadow-[0_16px_40px_rgba(17,17,17,0.06)] transition-all duration-300 ${info.action ? 'cursor-pointer hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(17,17,17,0.12)]' : ''}`}>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem] bg-[#D71920]/10 text-[#D71920]">
                    <info.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">{info.title}</h4>
                    {info.details.map((detail, idx) => <p key={idx} className="text-sm font-light leading-relaxed text-gray-800 break-words">{detail}</p>)}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative h-[300px] overflow-hidden rounded-[1.75rem] border border-[#E9E4DC] bg-gray-50 shadow-[0_18px_44px_rgba(17,17,17,0.06)]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.505677568588!2d38.7516805!3d9.034789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f63118cf97%3A0xc3cfec56bb24bfa!2sPiazza%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Kenmos Engineering Location Map" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }}>
            <Card className="rounded-[2rem] border border-[#E9E4DC] bg-white p-6 shadow-[0_24px_70px_rgba(17,17,17,0.08)] md:p-10">
              <CardHeader className="p-0 pb-6">
                <CardTitle className="flex items-center gap-3 text-xl font-black text-black md:text-2xl">
                  <FileText className="h-6 w-6 text-[#D71920]" strokeWidth={1.5} />
                  Request a Quote
                </CardTitle>
                <p className="mt-2 text-xs font-light leading-relaxed text-gray-500">Provide details about your project. Our structural engineering consultants will review your blueprints and contact you.</p>
              </CardHeader>
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-gray-700">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="luxury-input px-4 py-3" placeholder="e.g. Yonas Abebe" />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-gray-700">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="luxury-input px-4 py-3" placeholder="e.g. name@company.com" />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-gray-700">Project Area *</label>
                    <select name="subject" value={formData.subject} onChange={handleInputChange} required className="luxury-input bg-white px-4 py-3 text-sm">
                      <option value="General Structural Design">General Structural Design</option>
                      <option value="Steel Structure connection Detailing">Steel Structure connection Detailing</option>
                      <option value="Value Engineering / Material Optimization">Value Engineering & Design Optimization</option>
                      <option value="Structural Safety Assessment">Structural Safety Assessment</option>
                      <option value="Construction Supervision & BOQ">Construction Supervision & BOQ</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-gray-700">Project Details / Message *</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={4} className="luxury-input resize-none px-4 py-3" placeholder="Describe the number of stories, structure material (concrete/steel), project location..." />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full rounded-full bg-[#D71920] px-4 py-4 text-xs font-bold uppercase tracking-[0.24em] text-white shadow-[0_14px_30px_rgba(215,25,32,0.2)] transition-all duration-300 hover:bg-[#be1218]">
                    {isSubmitting ? <span className="flex items-center justify-center gap-2"><span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>PROCESSING...</span> : <span className="flex items-center justify-center gap-2"><Send className="h-4 w-4" />SEND REQUEST</span>}
                  </Button>
                  {submitStatus === 'success' && <div className="flex items-start gap-3 rounded-[1rem] border border-green-200 bg-green-50 p-4 text-sm text-green-800"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" /><span>Thank you! Your quote request was sent. Our lead structural engineer will review and contact you.</span></div>}
                  {submitStatus === 'error' && <div className="flex items-start gap-3 rounded-[1rem] border border-red-200 bg-red-50 p-4 text-sm text-red-800"><AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" /><span>There was a problem sending your message. Please verify input and try again.</span></div>}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
