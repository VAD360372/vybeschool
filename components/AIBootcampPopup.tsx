"use client"

import { useState, useEffect, MouseEvent } from "react"
import Link from "next/link"

type AIBootcampPopupProps = {
  paymentUrl?: string
}

export default function AIBootcampPopup({ paymentUrl = "#" }: AIBootcampPopupProps) {
  const [isVisible, setIsVisible] = useState(false)

  // Auto-show shortly after entry
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => setIsVisible(false)

  const onOverlayClick = () => setIsVisible(false)
  const onCardClick = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation()

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      onClick={onOverlayClick}
    >
      <div
        className="relative w-full max-w-lg bg-white border-4 border-black rounded-2xl shadow-[12px_12px_0_0_#000] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={onCardClick}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-3 right-3 w-9 h-9 rounded-full border-2 border-black bg-red-500 text-white font-black hover:bg-red-600 transition-colors"
        >
          ×
        </button>

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="text-center mb-4">
            <div className="text-2xl md:text-3xl font-black text-black">AI SuperStack Program</div>
            <div className="mt-1 text-base md:text-lg font-bold text-black">Learn → Build → Earn with AI in 14 Days!</div>
            <div className="mt-3 text-lg md:text-xl font-black">
              <span className="text-black">Only ₹1499 | </span>
              <span className="font-black" style={{ color: "#16a34a" }}>
                100% Money-Back Guarantee
              </span>
            </div>
          </div>

          {/* Phases */}
          <div className="space-y-2 text-black font-bold mb-5">
            <div>📘 Phase 1: Understand AI, ChatGPT & Tools</div>
            <div>💻 Phase 2: Design → Code → Deploy → Voice AI</div>
            <div>⚙️ Phase 3: Automate & Monetize Projects</div>
          </div>

          <div className="bg-yellow-100 border-2 border-black rounded-lg p-3 text-center mb-6">
            <div className="text-black font-black">
              Go from AI beginner to AI builder — fully hands-on in just 2 weeks!
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href={paymentUrl} target="_blank" rel="noopener noreferrer">
              <button
                className="inline-block px-6 py-3 rounded-lg font-semibold cursor-pointer border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all"
                style={{ background: "#007bff", color: "#fff" }}
              >
                Join Now — Risk-Free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
