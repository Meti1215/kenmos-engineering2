'use client'

import React, { useEffect, useMemo, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Download, BookOpen, Calendar, FileText, Maximize2, Minimize2 } from 'lucide-react'
import { supabase, AnnualReport } from '@/lib/supabase'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { brand } from '@/lib/brand'

function ReportViewContent() {
  const searchParams = useSearchParams()
  const id = useMemo(() => searchParams.get('id') || '', [searchParams])

  const [report, setReport] = useState<AnnualReport | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const fetchReport = async () => {
      setLoading(true)
      setNotFound(false)

      if (!id) {
        setNotFound(true)
        setLoading(false)
        return
      }

      try {
        const { data, error } = await supabase
          .from('annual_reports')
          .select('*')
          .eq('id', id)
          .single()

        if (error || !data) {
          setNotFound(true)
        } else {
          setReport(data)
        }
      } catch {
        setNotFound(true)
      } finally {
        setLoading(false)
      }
    }

    fetchReport()
  }, [id])

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  if (isFullscreen && report) {
    return (
      <div className="fixed inset-0 z-50 bg-[#111112] flex flex-col">
        {/* Fullscreen toolbar */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-[#D71920]" />
            <div>
              <h1 className="text-white font-semibold text-sm">{report.title}</h1>
              <p className="text-gray-400 text-xs">{report.year}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={report.pdf_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#D71920] hover:bg-[#be1218] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Download
            </a>
            <button
              onClick={toggleFullscreen}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <Minimize2 className="w-3.5 h-3.5" />
              Exit Fullscreen
            </button>
          </div>
        </div>

        {/* Fullscreen PDF */}
        <div className="flex-1">
          <iframe
            src={`${report.pdf_url}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
            className="w-full h-full border-0"
            title={report.title}
          />
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="border border-gray-100 shadow-lg p-10 bg-white">
        <div className="flex items-center gap-3 text-gray-500">
          <div className="w-5 h-5 border-2 border-[#D71920] border-t-transparent rounded-full animate-spin" />
          Loading report...
        </div>
      </div>
    )
  }

  if (notFound || !report) {
    return (
      <div className="border border-gray-100 shadow-lg p-10 bg-white">
        <h1 className="text-2xl font-bold text-gray-900">Report not found</h1>
        <p className="text-gray-600 mt-2">
          The requested annual report does not exist or is unavailable.
        </p>
        <div className="mt-6">
          <Button onClick={() => (window.location.href = '/articles/')} className="bg-[#D71920] hover:bg-[#be1218]">
            Return to Articles
          </Button>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      {/* Report Header */}
      <div className="border border-gray-100 shadow-xl overflow-hidden mb-6 bg-white">
        <div className="bg-[#111112] p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-[#D71920]">
                  <BookOpen className="w-3 h-3 mr-1" />
                  Annual Report
                </span>
                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-white/80 bg-white/10">
                  <Calendar className="w-3 h-3 mr-1" />
                  {report.year}
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-black font-heading text-white leading-snug">
                {report.title}
              </h1>

              {report.description && (
                <p className="text-gray-400 mt-3 leading-relaxed max-w-2xl font-light text-sm">
                  {report.description}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-3 mt-6">
                <a
                  href={report.pdf_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#D71920] hover:bg-[#be1218] transition-colors shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
                <button
                  onClick={toggleFullscreen}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Maximize2 className="w-4 h-4" />
                  Fullscreen
                </button>
              </div>
            </div>

            {report.cover_image_url && (
              <div className="hidden md:block w-36 flex-shrink-0">
                <div className="aspect-[3/4] overflow-hidden shadow-2xl border border-white/10">
                  <img
                    src={report.cover_image_url}
                    alt={report.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="border border-gray-100 shadow-xl overflow-hidden bg-white">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FileText className="w-4 h-4 text-[#D71920]" />
            <span className="font-medium">Document Viewer</span>
          </div>
          <button
            onClick={toggleFullscreen}
            className="text-xs text-gray-500 hover:text-[#D71920] flex items-center gap-1 transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            Fullscreen
          </button>
        </div>

        <div className="relative" style={{ height: '80vh' }}>
          <iframe
            src={`${report.pdf_url}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
            className="w-full h-full border-0"
            title={report.title}
          />
        </div>
      </div>

      <div className="flex items-center justify-between mt-6 px-2">
        <Button
          variant="ghost"
          onClick={() => (window.location.href = '/articles/')}
          className="text-[#D71920] hover:bg-red-50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Reports
        </Button>
        <a
          href={report.pdf_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[#D71920] hover:underline font-medium"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </a>
      </div>
    </motion.div>
  )
}

export default function ReportViewPage() {
  return (
    <main className="relative min-h-screen bg-white">

      <section className="pt-32 pb-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Button
          variant="ghost"
          className="mb-6 text-[#D71920] hover:bg-red-50 hover:text-red-700"
          onClick={() => (window.location.href = '/articles/')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Button>

        <Suspense fallback={
          <div className="border border-gray-100 shadow-lg p-10 bg-white flex items-center gap-3 text-gray-500">
            <div className="w-5 h-5 border-2 border-[#D71920] border-t-transparent rounded-full animate-spin" />
            Loading report viewer...
          </div>
        }>
          <ReportViewContent />
        </Suspense>
      </section>

      <Footer />
    </main>
  )
}
