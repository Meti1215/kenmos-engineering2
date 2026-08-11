import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { industries } from '@/data/industries'
import { projects } from '@/data/projects'
import Footer from '@/components/Footer'

type Params = { slug: string }

export default function IndustryPage({ params }: { params: Params }) {
  const industry = industries.find((item) => item.id === params.slug)
  if (!industry) return notFound()

  const relatedProjects = projects.filter((project) => project.category.toLowerCase() === industry.title.split(' ')[0].toLowerCase() || project.category.toLowerCase() === industry.id)

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <nav className="text-sm text-gray-600 mb-3">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/industries">Industries</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{industry.title}</span>
        </nav>
        <div className="mb-4">
          <Link href="/industries" className="inline-flex items-center rounded bg-gray-100 px-3 py-2 text-sm font-semibold text-[#111112] hover:bg-gray-200">
            Back to Industries
          </Link>
        </div>
      </div>

      <div className="w-full bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Image
            src={industry.image}
            alt={industry.title}
            width={1800}
            height={1200}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="font-heading text-3xl font-black uppercase tracking-tight text-[#111112] mb-3">{industry.title}</h1>
            <div className="mb-6 text-sm text-gray-600 space-y-2">
              <p><span className="font-semibold">Market:</span> {industry.market}</p>
              <p><span className="font-semibold">Typical Project Types:</span> {industry.projectTypes.join(', ')}</p>
              <p><span className="font-semibold">Services Provided:</span> {industry.services.join(', ')}</p>
              <p><span className="font-semibold">Structural Systems:</span> {industry.structuralSystems.join(', ')}</p>
              <p><span className="font-semibold">Project Scale:</span> {industry.scale}</p>
              <p><span className="font-semibold">Design Standards:</span> {industry.standards}</p>
            </div>

            <section className="space-y-6 text-gray-700">
              {industry.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed">{paragraph}</p>
              ))}
            </section>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[#111112] mb-6">Related Projects</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {relatedProjects.map((project) => (
                  <div key={project.id} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="overflow-hidden rounded-xl bg-gray-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
                    </div>
                    <h3 className="mt-4 text-lg font-black text-[#111112]">{project.title}</h3>
                    <p className="mt-2 text-sm text-gray-500">{project.description}</p>
                    <Link href={`/projects/${project.id}`} className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#D71920]">
                      View Project
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-gray-600">Engineering Capabilities</h3>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Structural Design',
                  'Construction Supervision',
                  'Project Management',
                  'Assessment & Retrofitting',
                  'BIM / Digital Engineering',
                  'Foundation Engineering',
                  'Seismic Design',
                ].map((capability) => (
                  <div key={capability} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-[#111112]">
                    {capability}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
              <h3 className="text-xl font-bold text-[#111112]">Planning a project in this industry?</h3>
              <p className="mt-3 text-sm text-gray-600">Work with Kenmos Engineering for structural design, review, and construction supervision tailored to your sector.</p>
              <Link href="/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#D71920] px-5 py-3 text-sm font-bold uppercase tracking-[0.24em] text-white transition-colors hover:bg-[#be1218]">
                Contact Us
              </Link>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.id }))
}
