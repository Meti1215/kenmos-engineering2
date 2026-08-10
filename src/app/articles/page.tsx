'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowRight, HardHat, Compass, Building2, CheckCircle, Newspaper, BookOpen, Download } from 'lucide-react'
import { supabase, AnnualReport } from '@/lib/supabase'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { brand } from '@/lib/brand'

interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date?: string
  created_at?: string
  readTime?: string
  read_time?: string
  category: string
  image_url?: string
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [activeCategory, setActiveCategory] = useState<string>('All News')
  const [visibleCount, setVisibleCount] = useState<number>(6)
  const [annualReports, setAnnualReports] = useState<AnnualReport[]>([])
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .eq('status', 'published')
          .order('created_at', { ascending: false })
          .limit(50)
        
        if (data && data.length > 0) {
          const fetchedArticles: Article[] = data.map(article => ({
            id: article.id,
            title: article.title,
            excerpt: article.excerpt,
            content: article.content,
            author: article.author,
            date: new Date(article.created_at).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            }),
            readTime: article.read_time || '5 min read',
            category: article.category,
            image_url: article.image_url
          }))

          setFeaturedArticle(fetchedArticles[0])
          setArticles(fetchedArticles.slice(1))
        }
      } catch (error) {
        console.log("Using default articles (Supabase offline or empty)", error)
      }
    }

    fetchArticles()

    const fetchAnnualReports = async () => {
      try {
        const { data } = await supabase
          .from('annual_reports')
          .select('*')
          .order('year', { ascending: false })

        if (data) setAnnualReports(data)
      } catch (error) {
        console.log("Annual reports fetch failed", error)
      }
    }
    fetchAnnualReports()
  }, [])

  useEffect(() => {
    setVisibleCount(6)
  }, [activeCategory])

  const openArticle = (id: string) => {
    window.location.href = `/articles/view/?id=${encodeURIComponent(id)}`
  }

  const allArticles = useMemo(() => featuredArticle ? [featuredArticle, ...articles] : articles, [featuredArticle, articles])
  
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const a of allArticles) {
      counts[a.category] = (counts[a.category] || 0) + 1
    }
    return counts
  }, [allArticles])

  const categories = useMemo(() => {
    const iconByName: Record<string, any> = {
      'Structural Design': Building2,
      'Steel Detailing': HardHat,
      'Value Engineering': Compass,
      'Site Supervision': CheckCircle,
      'Company News': Newspaper,
      'General News': Newspaper,
      'Annual Reports': BookOpen,
    }

    const unique = Object.keys(categoryCounts).sort((a, b) => a.localeCompare(b))
    return [
      { name: 'All News', icon: Newspaper, count: allArticles.length },
      ...unique.map((name) => ({
        name,
        icon: iconByName[name] || Newspaper,
        count: categoryCounts[name] || 0,
      })),
      { name: 'Annual Reports', icon: BookOpen, count: annualReports.length },
    ]
  }, [allArticles.length, categoryCounts, annualReports.length])

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'All News') return articles
    return allArticles.filter((a) => a.category === activeCategory)
  }, [activeCategory, articles, allArticles])

  const visibleArticles = useMemo(
    () => filteredArticles.slice(0, visibleCount),
    [filteredArticles, visibleCount]
  )

  const hasMore = visibleCount < filteredArticles.length

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-10 md:pb-16 px-4 sm:px-6 lg:px-8 bg-[#111112] text-white">
        <div className="relative max-w-7xl mx-auto text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-[#D71920] text-xs font-bold uppercase tracking-wider">
            <Newspaper className="w-4 h-4" />
            Company News
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#D71920] font-heading uppercase leading-none mt-2">
            News & Insights
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl leading-relaxed mt-2 font-light">
            Insights on structural design trends, steel detailing standards, value engineering case studies, and corporate news from {brand.name}.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {activeCategory === 'All News' && featuredArticle && (
        <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div
            className="relative border border-gray-100 bg-white cursor-pointer group shadow-sm hover:shadow-lg transition-shadow duration-300"
            onClick={() => openArticle(featuredArticle.id)}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="relative lg:w-1/2 aspect-[16/9] lg:aspect-auto overflow-hidden bg-gray-50">
                {featuredArticle.image_url ? (
                  <img
                    src={featuredArticle.image_url}
                    alt={featuredArticle.title}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 bg-red-50/30 flex items-center justify-center">
                    <Newspaper className="w-20 h-20 text-[#D71920]/45" />
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1.5 text-xs font-bold text-white bg-[#D71920]">
                    Featured Article
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                <span className="inline-flex items-center px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-[#D71920] bg-red-50 w-fit">
                  {featuredArticle.category}
                </span>
                <h2 className="text-xl md:text-3xl font-black font-heading text-black mb-3 leading-snug group-hover:text-[#D71920] transition-colors uppercase tracking-tight">
                  {featuredArticle.title}
                </h2>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed font-light line-clamp-3">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400 mb-6 font-light">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#D71920]" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#D71920]" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-[#D71920]" />
                    <span>{featuredArticle.author}</span>
                  </div>
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); openArticle(featuredArticle.id) }}
                  className="inline-flex items-center gap-2 bg-[#D71920] hover:bg-[#be1218] text-white text-xs font-bold uppercase tracking-wider px-5 py-3.5 w-fit transition-colors"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid & Sidebar */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar categories */}
          <div className="lg:col-span-1">
            <div className="border border-gray-100 p-6 sticky top-24 bg-white shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6 border-b border-gray-100 pb-3">Categories</h3>
              <div className="flex flex-col gap-2">
                {categories.map((category, index) => {
                  const IconComponent = category.icon
                  const selected = activeCategory === category.name
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(category.name)}
                      className={`w-full flex items-center justify-between p-3 transition-colors text-left text-xs font-bold uppercase tracking-wider ${
                        selected 
                          ? 'bg-red-50 text-[#D71920]' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-4.5 h-4.5" />
                        <span>{category.name}</span>
                      </div>
                      <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5">
                        {category.count}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {activeCategory === 'Annual Reports' ? (
              /* Annual Reports Bookshelf */
              <div>
                <div className="mb-8 pb-4 border-b border-gray-100">
                  <h2 className="text-xl font-black font-heading text-black uppercase tracking-tight flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-[#D71920]" />
                    Annual Publications
                  </h2>
                </div>

                {annualReports.length === 0 ? (
                  <div className="text-center py-20 border border-gray-100 bg-gray-50/50">
                    <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-sm text-gray-500 font-light">No publications available yet.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {annualReports.map((report) => (
                      <div
                        key={report.id}
                        className="group cursor-pointer flex flex-col h-full border border-gray-100 p-4 hover:shadow-lg transition-shadow bg-white"
                        onClick={() => {
                          window.location.href = `/articles/report/?id=${encodeURIComponent(report.id)}`
                        }}
                      >
                        <div className="relative aspect-[3/4] overflow-hidden bg-gray-900 shadow-md">
                          {report.cover_image_url ? (
                            <img
                              src={report.cover_image_url}
                              alt={report.title}
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform"
                            />
                          ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-[#111112]">
                              <BookOpen className="w-8 h-8 text-[#D71920] mb-3" />
                              <span className="text-[10px] text-white/90 font-bold uppercase tracking-wider">{report.year}</span>
                              <span className="text-[8px] text-gray-500 text-center mt-2 uppercase tracking-widest">{brand.shortName}</span>
                            </div>
                          )}
                        </div>
                        <h3 className="font-bold text-black text-sm mt-4 group-hover:text-[#D71920] transition-colors leading-tight">
                          {report.title}
                        </h3>
                        <div className="mt-4 pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                          <span className="text-gray-400">{report.year}</span>
                          <a
                            href={report.pdf_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[#D71920] font-bold uppercase tracking-wider hover:underline"
                          >
                            PDF
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              /* Articles list grid */
              <>
                {visibleArticles.length === 0 && !featuredArticle && activeCategory === 'All News' ? (
                  <div className="text-center py-20 border border-gray-100 bg-gray-50/50">
                    <Newspaper className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-sm text-gray-500 font-light">No insights published yet.</p>
                  </div>
                ) : visibleArticles.length === 0 && activeCategory !== 'All News' ? (
                  <div className="text-center py-12">
                    <p className="text-sm text-gray-500 font-light">No articles in this category.</p>
                  </div>
                ) : null}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {visibleArticles.map((article, index) => (
                    <motion.article
                      key={article.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      onClick={() => openArticle(article.id)}
                      className="border border-gray-100 hover:shadow-lg transition-shadow duration-300 group cursor-pointer overflow-hidden flex flex-col bg-white"
                    >
                      <div className="relative w-full aspect-video overflow-hidden bg-gray-50">
                        {article.image_url ? (
                          <img
                            src={article.image_url}
                            alt={article.title}
                            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-red-50/20 flex items-center justify-center">
                            <Newspaper className="w-10 h-10 text-[#D71920]/45" />
                          </div>
                        )}
                        <div className="absolute top-3 left-3 bg-[#D71920] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 shadow-sm">
                          {article.category}
                        </div>
                      </div>

                      <div className="p-6 flex flex-col justify-between flex-grow">
                        <div>
                          <h3 className="text-base font-bold text-black mb-2 group-hover:text-[#D71920] transition-colors leading-tight line-clamp-2 uppercase tracking-tight">
                            {article.title}
                          </h3>
                          <p className="text-xs text-gray-500 leading-relaxed font-light line-clamp-2">
                            {article.excerpt}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 mt-6 border-t border-gray-100 text-xs text-gray-400">
                          <span className="truncate max-w-[140px] font-light">{article.author}</span>
                          <span className="text-[#D71920] font-bold uppercase tracking-wider flex items-center gap-1">
                            Read
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {filteredArticles.length > 0 && hasMore && (
                  <div className="text-center mt-12">
                    <button
                      onClick={() => setVisibleCount((prev) => prev + 6)}
                      className="border border-[#D71920] text-[#D71920] hover:bg-red-50 text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors"
                    >
                      Load More Articles
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Articles
