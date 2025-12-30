"use client"

import Link from "next/link"

export function Hero1to1() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
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
            href="https://nexify.club/dp/691031a558cce7577942316f"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 text-base md:text-lg font-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all rounded-lg text-center"
            style={{ backgroundColor: "#FFD700", color: "#000" }}
          >
            Start with AI SuperStack
          </Link>
          <Link
            href="https://wa.me/916301962520"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 text-base md:text-lg font-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all rounded-lg text-center bg-white text-black"
          >
            Customize Your 1:1 Plan
          </Link>
        </div>
      </div>

      {/* Right Column: Plan Highlight Card */}
      <div className="border-4 border-black shadow-[10px_10px_0_0_#000] rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 p-6 md:p-8 hover:shadow-[12px_12px_0_0_#000] transition-all">
        <h3 className="text-2xl md:text-3xl font-black text-black mb-6">
          14-Day AI SuperStack
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="text-2xl text-green-600 font-black">✓</span>
            <span className="text-base md:text-lg font-bold text-black leading-relaxed">Live in Telugu</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl text-green-600 font-black">✓</span>
            <span className="text-base md:text-lg font-bold text-black leading-relaxed">Hands-on only</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl text-green-600 font-black">✓</span>
            <span className="text-base md:text-lg font-bold text-black leading-relaxed">Launch or 100% refund</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

