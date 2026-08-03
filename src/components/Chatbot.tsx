'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, HardHat, ShieldCheck, Mail, Phone, Calendar } from 'lucide-react'
import { brand } from '@/lib/brand'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [showWelcomePopup, setShowWelcomePopup] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Show welcome popup after 3 seconds
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowWelcomePopup(true)
      }
    }, 3000)

    // Initial bot message
    setMessages([
      {
        id: 'initial',
        text: `Hello! I'm the ${brand.shortName} assistant. I can answer questions about our structural design services, steel structures, value engineering, physical location, and quote request process. How can I help you today?`,
        sender: 'bot',
        timestamp: new Date()
      }
    ])

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  const handleOpenChat = () => {
    setShowWelcomePopup(false)
    setIsOpen(true)
  }

  const companyInfo = {
    hours: `We are available ${brand.hours}.`,
    services: 'Kenmos Engineering specializes in Structural Design (reinforced concrete & steel frames), Construction Supervision, Project Management, Structural Assessment & Retrofitting, and Tender & BOQ Preparation.',
    founder: 'Our Founder and General Manager, Kenmos Tesfaye, has over 20 years of experience in structural design and steel structures in Ethiopia, leading over 800 successful projects.',
    steel: 'We are steel structure specialists, with a proven track record designing connection nodes, steel warehouses, university stadiums, and factory trusses.',
    value: 'Cost and Value Optimization is our core design philosophy. Through detailed analysis and material sizing, we help developers reduce structural material costs by 10% to 15% without compromising safety.',
    location: `${brand.name} office is located at Enat Building, 7th Floor, Piazza, Addis Ababa, Ethiopia.`,
    contact: `Phone: ${brand.phone} | Email: ${brand.email} | Address: ${brand.location}`,
    requestInfo: 'To request a structural review or project quote, please complete the contact/quote form in the Contact Us section or call us directly at ' + brand.phone + '.'
  }

  const calculateScore = (input: string, keywords: string[]): number => {
    let score = 0
    const lowerInput = input.toLowerCase()
    
    keywords.forEach(keyword => {
      if (lowerInput.includes(keyword)) score += 2
    })
    return score
  }

  type Intent = {
    keywords: string[]
    response: string
    replies: string[]
  }

  const intents: Record<string, Intent> = {
    hours: {
      keywords: ['hour', 'time', 'open', 'close', 'when', 'schedule', 'available', 'weekend', 'saturday', 'monday', 'friday'],
      response: companyInfo.hours,
      replies: ["Our Services", "Request a Quote", "Location & Contact"]
    },
    services: {
      keywords: ['service', 'services', 'what do you do', 'what do you offer', 'structural design', 'supervision', 'detailing'],
      response: companyInfo.services,
      replies: ["Value Engineering", "Steel Structures", "Founder & Experience"]
    },
    steel: {
      keywords: ['steel', 'truss', 'warehouse', 'roof', 'detailing', 'joints', 'fabrication'],
      response: companyInfo.steel,
      replies: ["Our Services", "Value Engineering", "Request a Quote"]
    },
    value: {
      keywords: ['value', 'optimization', 'cost', 'save', 'material', 'saving', 'concrete'],
      response: companyInfo.value,
      replies: ["Our Services", "Request a Quote", "Location & Contact"]
    },
    founder: {
      keywords: ['founder', 'kenmos', 'tesfaye', 'manager', 'lead engineer', 'experience', 'history'],
      response: companyInfo.founder,
      replies: ["Our Services", "Value Engineering", "Location & Contact"]
    },
    location: {
      keywords: ['location', 'address', 'where', 'piazza', 'enat building', 'office', 'map', 'place'],
      response: companyInfo.location,
      replies: ["Operating Hours", "Request a Quote", "Our Services"]
    },
    contact: {
      keywords: ['contact', 'phone', 'call', 'email', 'number', 'reach', 'mail'],
      response: companyInfo.contact,
      replies: ["Operating Hours", "Request a Quote", "Our Services"]
    },
    requestInfo: {
      keywords: ['quote', 'request', 'price', 'pricing', 'cost estimation', 'inquiry', 'blueprint'],
      response: companyInfo.requestInfo,
      replies: ["Location & Contact", "Operating Hours", "Our Services"]
    }
  }

  const getResponse = (userMessage: string): { text: string; quickReplies?: string[] } => {
    const message = userMessage.toLowerCase()

    if (message.match(/^(hi|hello|hey|greetings)/)) {
       return {
        text: `Hello! Welcome to ${brand.shortName}. How can I assist you today?`,
        quickReplies: ["Our Services", "Value Engineering", "Steel Structures", "Location & Contact"]
      }
    }

    if (message.includes('thank')) {
      return {
        text: "You are welcome! Let us know if you need any other structural advice.",
        quickReplies: ["Our Services", "Request a Quote", "Location & Contact"]
      }
    }

    let bestIntent: Intent | null = null
    let maxScore = 0

    Object.values(intents).forEach(intent => {
      const score = calculateScore(message, intent.keywords)
      if (score > maxScore) {
        maxScore = score
        bestIntent = intent
      }
    })

    if (bestIntent && maxScore > 0) {
      return {
        text: (bestIntent as Intent).response,
        quickReplies: (bestIntent as Intent).replies
      }
    }

    return {
      text: "I didn't quite catch that. Would you like to check our structural services, ask about value engineering, or request contact details?",
      quickReplies: ["Our Services", "Value Engineering", "Location & Contact", "Request a Quote"]
    }
  }

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputMessage
    if (!text.trim()) return

    const userMsg: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMsg])
    setInputMessage('')

    setTimeout(() => {
      const botReply = getResponse(text)
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: botReply.text,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMsg])
    }, 800)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <div className="fixed bottom-[150px] md:bottom-6 right-4 md:right-6 lg:right-6 z-50 flex flex-col items-end">
      
      {/* Welcome Popup Bubble */}
      <AnimatePresence>
        {showWelcomePopup && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="mb-2.5 bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-3 max-w-[15rem] cursor-pointer rounded-xl"
            onClick={handleOpenChat}
          >
            <div className="flex justify-between items-start mb-0.5">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#D71920]">Kenmos Engineering</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  setShowWelcomePopup(false)
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
            <p className="text-[11px] leading-relaxed text-gray-700 font-light">
              Hi! Need structural cost optimization advice? Ask me here.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Trigger Button (48px Circular Robot Icon) */}
      <motion.button
        onClick={handleOpenChat}
        initial={{ scale: 0.6, y: 20, opacity: 0 }}
        animate={{
          scale: 1,
          y: [0, -4, 0, -2, 0],
          opacity: 1,
          boxShadow: [
            '0 4px 12px -2px rgba(215,25,32,0.1), 0 0 0 0 rgba(215,25,32,0)',
            '0 4px 12px -2px rgba(215,25,32,0.18), 0 0 0 0 rgba(215,25,32,0)',
            '0 4px 12px -2px rgba(215,25,32,0.3), 0 0 16px 3px rgba(215,25,32,0.2)',
            '0 4px 12px -2px rgba(215,25,32,0.18), 0 0 0 0 rgba(215,25,32,0)',
            '0 4px 12px -2px rgba(215,25,32,0.1), 0 0 0 0 rgba(215,25,32,0)',
          ],
        }}
        transition={{
          initial: { duration: 0 },
          scale: {
            type: 'spring',
            stiffness: 260,
            damping: 16,
            mass: 0.8,
          },
          y: {
            duration: 4.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          },
          opacity: {
            delay: 0.05,
            duration: 0.45,
            ease: 'easeOut',
          },
          boxShadow: {
            duration: 5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          },
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 8px 24px -4px rgba(215,25,32,0.45)',
          transition: {
            scale: { duration: 0.2, ease: 'easeInOut' },
            boxShadow: { duration: 0.2, ease: 'easeInOut' },
          },
        }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 bg-[#D71920] text-white flex items-center justify-center shadow-lg rounded-full relative focus:outline-none will-change-transform"
      >
        {/* Animated glow ring behind the button */}
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full pointer-events-none"
          animate={{
            boxShadow: [
              '0 0 0 0 rgba(215,25,32,0)',
              '0 0 0 0 rgba(215,25,32,0)',
              '0 0 0 6px rgba(215,25,32,0.18)',
              '0 0 0 10px rgba(215,25,32,0)',
              '0 0 0 0 rgba(215,25,32,0)',
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
        <motion.span
          aria-hidden
          className="absolute -inset-1 rounded-full pointer-events-none"
          animate={{ opacity: [0, 0.08, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            background: 'radial-gradient(circle at center, rgba(215,25,32,0.35) 0%, rgba(215,25,32,0) 70%)',
            filter: 'blur(6px)',
          }}
        />
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-6 h-6 relative z-10 text-white"
        >
          {/* Ears/Side Connectors */}
          <path d="M3 11h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1M21 11h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1" />
          
          {/* Head Outline */}
          <rect x="3" y="6" width="18" height="13" rx="4" />
          
          {/* Antenna */}
          <path d="M12 6V3" />
          <circle cx="12" cy="2" r="1.5" fill="currentColor" stroke="none" />
          
          {/* Eyes */}
          <circle cx="8.5" cy="12" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="15.5" cy="12" r="1.5" fill="currentColor" stroke="none" />
          
          {/* Mouth */}
          <path d="M9 15.5c1.5 1 4.5 1 6 0" strokeWidth="1.8" />
        </svg>
      </motion.button>

      {/* Chat Window Panel (Super Slim, rounded-2xl ChatGPT style) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.96 }}
            className="absolute bottom-[60px] right-0 w-[calc(100vw-2.5rem)] sm:w-[290px] md:w-[310px] max-h-[70vh] sm:h-[420px] md:h-[440px] bg-white border border-gray-100 shadow-[0_12px_40px_-4px_rgba(0,0,0,0.08),0_8px_20px_-6px_rgba(0,0,0,0.04)] flex flex-col z-50 rounded-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#0f0f10] text-white px-3.5 py-2.5 flex justify-between items-center border-b border-gray-800">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="text-xs font-semibold leading-tight">Kenmos Assistant</h4>
                  <p className="text-[8px] text-gray-400 uppercase tracking-wider leading-none mt-0.5">Structural Consultant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message History area */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2.5 bg-gray-50/50">
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] px-3 py-2 text-[11px] md:text-xs leading-relaxed ${
                      msg.sender === 'user' 
                        ? 'bg-[#D71920] text-white rounded-[14px]' 
                        : 'bg-white border border-gray-100 text-gray-800 rounded-[14px] shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form Area */}
            <div className="p-2 border-t border-gray-100 flex items-center gap-1.5 bg-white">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                className="flex-1 px-3 py-1.5 text-[11px] md:text-xs border border-gray-200 focus:outline-none focus:border-[#D71920] rounded-lg"
                placeholder="Ask about value engineering, steel, hours..."
              />
              <button
                onClick={() => handleSend()}
                className="p-1.5 bg-[#D71920] text-white hover:bg-[#be1218] transition-colors rounded-lg"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Chatbot
