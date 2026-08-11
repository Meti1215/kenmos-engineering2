'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Folder, MapPin, Eye } from 'lucide-react'
import { projects } from '@/lib/brand'

const ProjectsShowcase = () => {
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Commercial', 'Institutional', 'Hospitality', 'Specialized']

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-20 md:py-32 bg-[#F9FAFB] border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#D71920]">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-black mt-2 leading-tight">
            Featured Engineering Projects
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-200 border ${
                filter === cat 
                  ? 'bg-[#D71920] border-[#D71920] text-white shadow-sm' 
                  : 'bg-white border-gray-200 text-gray-600 hover:border-[#D71920] hover:text-[#D71920]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid - 4 columns on desktop */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group h-full flex flex-col overflow-hidden bg-white border border-gray-200 shadow-sm rounded-lg hover:shadow-lg transition-all duration-300"
              >
                {/* Project Image - Fixed container with object-contain */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-50 flex items-center justify-center border-b border-gray-100 p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Content Box */}
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex w-fit items-center rounded-none bg-[#D71920]/10 px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.24em] text-[#D71920]">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1 text-gray-400 text-[9px]">
                      <MapPin className="w-2.5 h-2.5 text-[#D71920]" />
                      <span>Addis Ababa</span>
                    </div>
                  </div>
                  
                  <h3 className="mt-2.5 text-sm font-black font-heading uppercase tracking-tight leading-tight text-[#111112] line-clamp-1 group-hover:text-[#D71920] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="mt-1.5 text-[11px] text-gray-500 font-light leading-relaxed line-clamp-2 min-h-[2.2rem]">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#D71920]/80 text-[9px] font-bold uppercase tracking-wider">
                      <Folder className="w-3 h-3 text-[#D71920]" />
                      <span>Kenmos Project</span>
                    </div>
                    <div className="w-6 h-6 bg-[#D71920] text-white flex items-center justify-center shadow-sm rounded transition-all duration-300 opacity-80 group-hover:opacity-100">
                      <Eye className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

export default ProjectsShowcase
