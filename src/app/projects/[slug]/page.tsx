import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import ProjectGallery from '@/components/ProjectGallery'

type Params = { slug: string }

export default function ProjectPage({ params }: { params: Params }) {
  const project = projects.find((p) => p.id === params.slug)
  if (!project) return notFound()

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb & Back */}
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <nav className="text-sm text-gray-600 mb-3">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/projects">Projects</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{project.title}</span>
        </nav>
        <div className="mb-4">
          <Link href="/projects" className="inline-flex items-center rounded bg-gray-100 px-3 py-2 text-sm font-semibold text-[#111112] hover:bg-gray-200">
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Image - show full image without cropping */}
      <div className="w-full bg-black">
        <Image
          src={project.image}
          alt={project.title}
          width={1800}
          height={1200}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="font-heading text-3xl font-black uppercase text-[#111112] mb-2">{project.title}</h1>
            <div className="mb-4 text-sm text-gray-600">
              <span className="inline-block mr-4 font-semibold">Category:</span> {project.category}
              <span className="inline-block ml-4 mr-2 font-semibold">Location:</span> {project.location || 'Addis Ababa'}
            </div>

            <section className="prose max-w-none mb-8 text-gray-700">
              {project.longDescription.split('\n\n').map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </section>

            <h3 className="text-xl font-bold text-[#111112] mb-4">Image Gallery</h3>
            <ProjectGallery images={project.gallery || [project.image]} />
          </div>

          <aside className="space-y-4">
            <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
              <h4 className="text-sm font-bold uppercase text-gray-600">Project Information</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li><span className="font-semibold">Client:</span> {project.client || '—'}</li>
                <li><span className="font-semibold">Architect:</span> {project.architect || '—'}</li>
                <li><span className="font-semibold">Structural Consultant:</span> {project.structuralConsultant || 'Kenmos Engineering'}</li>
                <li><span className="font-semibold">Status:</span> {project.status || '—'}</li>
                <li><span className="font-semibold">Year:</span> {project.year || '—'}</li>
                <li><span className="font-semibold">Services:</span> {(project.services || []).join(', ')}</li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
              <h4 className="text-sm font-bold uppercase text-gray-600">Engineering Highlights</h4>
              <div className="mt-3 grid grid-cols-1 gap-3">
                {project.highlights && Object.entries(project.highlights).map(([k,v]) => (
                  <div key={k} className="rounded-md border border-gray-100 bg-gray-50 p-3 text-sm">
                    <div className="text-xs text-gray-500 uppercase font-semibold mb-1">{k.replace(/([A-Z])/g, ' $1')}</div>
                    <div className="font-medium text-gray-900">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm text-center">
              <h4 className="text-lg font-bold">Interested in a similar project?</h4>
              <p className="text-sm text-gray-600 mt-2">Talk to our team about design, analysis, and supervision.</p>
              <Link href="/contact" className="mt-4 inline-block rounded bg-[#D71920] px-4 py-2 text-sm font-bold text-white">Contact Us</Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }))
}
