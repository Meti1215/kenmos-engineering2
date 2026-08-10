'use client'

import React from 'react'
import { Image as ImageIcon, Camera } from 'lucide-react'
import Footer from '@/components/Footer'

export default function GalleryPage() {
  const images = [
    { src: '/images/hero_building.png', title: 'Engineering facade and structure', category: 'Project highlight' },
    { src: '/images/project_airforce.jpg', title: 'Air Force project structure', category: 'Engineering project' },
    { src: '/images/project_capital_hotel.jpg', title: 'Capital hotel construction work', category: 'Site activity' },
    { src: '/images/project_stadium.png', title: 'Stadium structural design', category: 'Large-scale work' },
    { src: '/images/project_hilton_under_design.jpg', title: 'Design development stage', category: 'Structural design' },
    { src: '/images/team_kenmos.png', title: 'Kenmos engineering team', category: 'Company moment' },
    { src: '/images/project_manson_arada.jpg', title: 'Manson Arada project', category: 'Construction activity' },
    { src: '/images/project_parliament.jpg', title: 'Parliament structure project', category: 'Major engineering project' },
  ]

  return (
    <main className="relative min-h-screen bg-white">

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
            A curated collection of structural design, construction work, and company moments from our ongoing portfolio.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="group overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative h-72 overflow-hidden bg-gray-50">
                <img
                  src={img.src}
                  alt={img.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#D71920]">
                  <Camera className="w-3.5 h-3.5" />
                  <span>{img.category}</span>
                </div>
                <h3 className="mt-2 text-sm font-black font-heading text-black uppercase tracking-tight leading-tight">
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
