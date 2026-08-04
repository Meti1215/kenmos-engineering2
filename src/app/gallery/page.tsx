'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Image as ImageIcon, Camera } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { projects } from '@/lib/brand'

export default function GalleryPage() {
  const images = [
    { src: '/images/hero_building.png', title: 'Curved Facade Steel Design' },
    { src: '/images/about_collage_1.png', title: 'High-Rise Steel Framing' },
    { src: '/images/about_collage_2.png', title: 'Truss Structural Connection' },
    { src: '/images/project_zemen.png', title: 'Zemen Bank HQ Structure' },
    { src: '/images/project_stadium.png', title: 'Sports Stadium Roof Detailing' },
    { src: '/images/project_memorial.png', title: 'Commemorative Monument Concrete Design' },
  ]

  return (
    <main className="relative min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-[#111112] text-white">
        <div className="relative max-w-7xl mx-auto text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-[#D71920] text-xs font-bold uppercase tracking-wider">
            <ImageIcon className="w-4 h-4" />
            Project Gallery
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#D71920] font-heading uppercase leading-none mt-2">
            Engineering Gallery
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl leading-relaxed mt-2 font-light">
            Blueprints, structural analysis screenshots, and construction site inspection photography.
          </p>
        </div>
      </section>

      {/* Grid of Images */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="group flex flex-col overflow-hidden bg-white border border-gray-200 shadow-sm rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="relative h-36 w-full overflow-hidden bg-gray-50 flex items-center justify-center border-b border-gray-100 p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col p-4 bg-white">
                <div className="flex items-center gap-1.5 text-[#D71920]/80 text-[9px] font-bold uppercase tracking-wider">
                  <Camera className="w-3.5 h-3.5" />
                  <span>Structural Detailing</span>
                </div>
                <h3 className="text-xs font-black font-heading tracking-tight leading-tight text-[#111112] mt-2 uppercase line-clamp-1">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
