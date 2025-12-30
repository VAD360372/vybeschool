"use client"

import Link from "next/link"

export function Hero1to1() {
  return (
    <div className="space-y-8">
      {/* Left Column: Heading + Subtitle + CTAs */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
            1:1 PROGRAMS
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
            Personalized AI learning tailored to your goals — choose what fits you best.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href="#program-1"
            className="px-6 py-4 text-base md:text-lg font-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all rounded-lg text-center"
            style={{ backgroundColor: "#FFD700", color: "#000" }}
          >
            Start with AI SuperStack
          </Link>
          <Link
            href="#program-2"
            className="px-6 py-4 text-base md:text-lg font-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all rounded-lg text-center bg-white text-black"
          >
            Customize Your 1:1 Plan
          </Link>
        </div>
      </div>
    </div>
  )
}

