'use client'

import React, { useEffect, useMemo, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Newspaper, Tag } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'

interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  image_url?: string
}

function ArticleViewContent() {
  const searchParams = useSearchParams()
  const id = useMemo(() => searchParams.get('id') || '', [searchParams])

  const [article, setArticle] = useState<Article | null>(null)
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const run = async () => {
      setLoading(true)
      setNotFound(false)

      if (!id) {
        setNotFound(true)
        setLoading(false)
        return
      }

      try {
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .eq('id', id)
          .single()

        if (data && !error) {
          const mapped: Article = {
            id: data.id,
            title: data.title,
            excerpt: data.excerpt,
            content: data.content,
            author: data.author,
            date: new Date(data.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
            readTime: data.read_time || '5 min read',
            category: data.category,
            image_url: data.image_url,
          }
          setArticle(mapped)

          // Fetch related articles from same category
          const { data: related } = await supabase
            .from('articles')
            .select('*')
            .eq('category', data.category)
            .neq('id', data.id)
            .order('created_at', { ascending: false })
            .limit(3)

          if (related && related.length > 0) {
            setRelatedArticles(
              related.map((r: any) => ({
                id: r.id,
                title: r.title,
                excerpt: r.excerpt,
                content: r.content,
                author: r.author,
                date: new Date(r.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }),
                readTime: r.read_time || '5 min read',
                category: r.category,
                image_url: r.image_url,
              }))
            )
          }
          return
        }

        setNotFound(true)
      } catch {
        setNotFound(true)
      } finally {
        setLoading(false)
      }
    }

    void run()
  }, [id])

  const openArticle = (articleId: string) => {
    window.location.href = `/articles/view/?id=${encodeURIComponent(articleId)}`
  }

  if (loading) {
    return (
      <section className="pt-32 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white border border-gray-100 p-10">
          <div className="flex items-center gap-3 text-gray-500">
            <div className="w-5 h-5 border-2 border-[#D71920] border-t-transparent rounded-full animate-spin" />
            Loading article...
          </div>
        </div>
      </section>
    )
  }

  if (notFound || !article) {
    return (
      <section className="pt-32 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white border border-gray-100 p-10 text-center">
          <Newspaper className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
          <p className="text-gray-600 mt-2">The requested article does not exist or is unavailable.</p>
          <div className="mt-6">
            <Button onClick={() => (window.location.href = '/articles/')} className="bg-[#D71920] hover:bg-[#be1218]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to News
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Hero Image Section */}
      <section className="relative w-full h-[35vh] md:h-[50vh] min-h-[250px] md:min-h-[350px] max-h-[550px] overflow-hidden bg-[#111112]">
        {article.image_url ? (
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            src={article.image_url}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* Back button */}
        <div className="absolute top-24 left-4 sm:left-6 lg:left-8 z-10">
          <button
            onClick={() => (window.location.href = '/articles/')}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/90 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </button>
        </div>

        {/* Title overlay on hero */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-5 md:pb-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 text-xs font-bold text-white bg-[#D71920]">
                <Tag className="w-3 h-3 mr-1" />
                {article.category}
              </span>
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-white/80 bg-white/10 backdrop-blur-sm">
                <Clock className="w-3 h-3 mr-1" />
                {article.readTime}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-white leading-tight uppercase tracking-tight">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Author Bar */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-100 px-6 py-4 flex flex-wrap items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-red-50 text-[#D71920] flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{article.author}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400 mt-0.5 font-light">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          {article.excerpt && (
            <p className="text-base md:text-xl text-gray-600 leading-relaxed mb-8 font-light border-l-4 border-[#D71920] pl-5">
              {article.excerpt}
            </p>
          )}

          {article.content && article.content.includes('<') ? (
            <div
              className="prose prose-lg prose-gray max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold prose-headings:leading-snug
                prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                prose-p:text-gray-700 prose-p:leading-relaxed font-light
                prose-a:text-[#D71920] prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900
                prose-blockquote:border-l-[#D71920] prose-blockquote:bg-gray-50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:not-italic
                prose-img:rounded-none prose-img:shadow-lg
                prose-li:text-gray-700
                prose-ul:list-disc prose-ol:list-decimal"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          ) : (
            <div className="text-gray-700 text-base leading-relaxed whitespace-pre-line font-light">
              {article.content || article.excerpt}
            </div>
          )}
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-3xl mx-auto border-t border-gray-100 pt-6">
          <Button
            variant="ghost"
            onClick={() => (window.location.href = '/articles/')}
            className="text-[#D71920] hover:bg-red-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All News
          </Button>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-5xl mx-auto">
          <div className="border-t border-gray-100 pt-12">
            <h2 className="text-lg md:text-2xl font-black font-heading text-black mb-8 uppercase tracking-tight">
              More in <span className="text-[#D71920]">{article.category}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <div
                  key={related.id}
                  onClick={() => openArticle(related.id)}
                  className="bg-white border border-gray-100 hover:shadow-md transition-shadow cursor-pointer overflow-hidden flex flex-col group"
                >
                  <div className="relative w-full aspect-video overflow-hidden bg-gray-50">
                    {related.image_url ? (
                      <img
                        src={related.image_url}
                        alt={related.title}
                        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-red-50/10 flex items-center justify-center">
                        <Newspaper className="w-8 h-8 text-[#D71920]/45" />
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-black text-sm leading-tight group-hover:text-[#D71920] transition-colors line-clamp-2 uppercase tracking-tight">
                        {related.title}
                      </h3>
                      <p className="text-gray-500 text-xs mt-2 font-light line-clamp-2 leading-relaxed">
                        {related.excerpt}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#D71920] mt-4 uppercase tracking-wider">
                      Read More
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default function ArticleViewPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Suspense fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-[#D71920] border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <ArticleViewContent />
      </Suspense>
      <Footer />
    </main>
  )
}
