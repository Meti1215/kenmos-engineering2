'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  FileText,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { brand } from '@/lib/brand'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Structural Design',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Number',
      details: [brand.phone],
      action: () => window.open(brand.phoneHref)
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: [brand.email],
      action: () => window.open(`mailto:${brand.email}`)
    },
    {
      icon: MapPin,
      title: 'Physical Office',
      details: [brand.location],
      action: () => window.open('https://www.google.com/maps?q=Enat+Building+Piazza+Addis+Ababa+Ethiopia')
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [brand.hours],
      action: null
    }
  ]

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
      await new Promise(resolve => setTimeout(resolve, 1500))
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
    <main className="relative min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 bg-[#111112] text-white">
        <div className="relative content-container text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-[#D71920] text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-4 h-4" />
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#D71920] font-heading uppercase leading-none mt-2">
            Contact Us
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl leading-relaxed mt-2 font-light">
            Contact our Addis Ababa headquarters for structural analysis, steel detailing, value engineering, or site supervision inquiries.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 content-container">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          
          {/* Column 1: Contact Details & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  onClick={info.action || undefined}
                  className={`p-6 border border-gray-100 bg-gray-50/50 flex items-start gap-4 transition-all duration-300 ${
                    info.action ? 'cursor-pointer hover:border-red-500/20 hover:shadow-md' : ''
                  }`}
                >
                  <div className="w-10 h-10 bg-red-50 text-[#D71920] flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-gray-800 font-light leading-relaxed break-words">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map wrapper */}
            <div className="h-[360px] md:h-[420px] bg-gray-50 border border-gray-100 overflow-hidden shadow-inner relative">
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
          </motion.div>

          {/* Column 2: Quote/Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="border border-gray-100 shadow-xl bg-white p-6 md:p-10 rounded-none">
              <CardHeader className="p-0 pb-6">
                <CardTitle className="text-xl md:text-2xl font-black font-heading text-black flex items-center gap-3">
                  <FileText className="w-6 h-6 text-[#D71920]" strokeWidth={1.5} />
                  Request a Quote
                </CardTitle>
                <p className="text-xs text-gray-500 mt-2 font-light leading-relaxed">
                  Provide details about your project. Our structural engineering consultants will review your blueprints and contact you.
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="luxury-input px-4 py-3"
                      placeholder="e.g. Yonas Abebe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="luxury-input px-4 py-3"
                      placeholder="e.g. name@company.com"
                    />
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Project Area *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="luxury-input px-4 py-3 bg-white text-sm"
                    >
                      <option value="General Structural Design">General Structural Design</option>
                      <option value="Steel Structure connection Detailing">Steel Structure connection Detailing</option>
                      <option value="Value Engineering / Material Optimization">Value Engineering & Design Optimization</option>
                      <option value="Structural Safety Assessment">Structural Safety Assessment</option>
                      <option value="Construction Supervision & BOQ">Construction Supervision & BOQ</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Project Details / Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="luxury-input px-4 py-3 resize-none"
                      placeholder="Describe the number of stories, structure material (concrete/steel), project location..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#D71920] hover:bg-[#be1218] text-white py-4 font-bold text-xs uppercase tracking-widest rounded-none shadow-md transition-colors"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                        PROCESSING...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-4 h-4" />
                        SEND REQUEST
                      </span>
                    )}
                  </Button>

                  {/* Status Alerts */}
                  {submitStatus === 'success' && (
                    <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 text-green-800 text-sm">
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Thank you! Your quote request was sent. Our lead structural engineer will review and contact you.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 text-red-800 text-sm">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span>There was a problem sending your message. Please verify input and try again.</span>
                    </div>
                  )}

                </form>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
