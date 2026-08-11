import Link from 'next/link'
import React from 'react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeroProps {
  title: string
  badge?: string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
  imageSrc?: string
}

export default function PageHero({
  title,
  badge,
  description,
  breadcrumbs,
  imageSrc = '/images/hero-new.jpg',
}: PageHeroProps) {
  const specialHeroTitles = new Set([
    'Consultancy Services',
    'Engineering Projects',
    'Industries',
    'Our Process',
    'News & Articles',
    'Join Our Team',
    'Engineering Events',
    'Contact Us',
  ])
  const isSpecialHeroTitle = specialHeroTitles.has(title)
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt="Kenmos Engineering hero background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative mx-auto flex min-h-[40vh] items-center justify-center px-5 py-20 text-center sm:px-6 lg:px-8 md:min-h-[45vh]">
        <div className="max-w-5xl">
          {badge ? (
            <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.35em] text-white">
              {badge}
            </div>
          ) : null}

          <h1 className={`text-4xl font-black uppercase leading-tight tracking-tight ${isSpecialHeroTitle ? 'text-[#D71920]' : 'text-white'} sm:text-5xl md:text-6xl lg:text-7xl`}>
            {title}
          </h1>

          {description ? (
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
              {description}
            </p>
          ) : null}

          {breadcrumbs && breadcrumbs.length > 0 ? (
            <div className="mt-6 text-sm text-white/70">
              {breadcrumbs.map((item, index) => (
                <span key={item.label} className="inline-flex items-center gap-1">
                  {item.href ? (
                    <Link href={item.href} className="text-white/80 transition-colors duration-200 hover:text-white">
                      {item.label}
                    </Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                  {index < breadcrumbs.length - 1 ? <span className="opacity-60">/</span> : null}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
