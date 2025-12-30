"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const skillTags = ["ChatGPT", "Langchain", "AI Agents", "n8n", "Video Editing", "Vibe Coding", "Custom"]
const timeOptions = ["30 min", "1 hr", "Weekend Mode"]

export function ThreeStepFlow() {
  const [isVisible, setIsVisible] = useState(false)
  const [step1Visible, setStep1Visible] = useState(false)
  const [step2Visible, setStep2Visible] = useState(false)
  const [step3Visible, setStep3Visible] = useState(false)
  const [microCopyVisible, setMicroCopyVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    setTimeout(() => setStep1Visible(true), 200)
    setTimeout(() => setStep2Visible(true), 600)
    setTimeout(() => setStep3Visible(true), 1000)
    setTimeout(() => setMicroCopyVisible(true), 1400)
  }, [])

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Main Heading */}
      <div className="text-center space-y-4 pb-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
          Learn Anything. Anywhere. In AI.
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700">
          In just 3 simple steps.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Step 1 */}
        <div
          className={`transform transition-all duration-700 ease-out ${
            step1Visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="border-4 border-black shadow-[8px_8px_0_0_#000] rounded-2xl bg-gradient-to-br from-white to-blue-50 p-6 md:p-8 h-full hover:shadow-[12px_12px_0_0_#000] hover:-translate-y-2 transition-all hover:rotate-1 group">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-xl">
                  <span className="text-black">1</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-black leading-tight">
                  Select What You Want to Learn
                </h3>
              </div>
              
              {/* Floating Skill Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {skillTags.map((tag, idx) => (
                  <span
                    key={tag}
                    className={`px-4 py-2 text-sm font-bold border-2 border-black rounded-full bg-white text-black hover:bg-yellow-200 hover:shadow-[4px_4px_0_0_#000] transition-all hover:-translate-y-0.5 ${
                      step1Visible ? "animate-floatIn" : "opacity-0"
                    }`}
                    style={{
                      animationDelay: `${idx * 100}ms`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div
          className={`transform transition-all duration-700 ease-out delay-300 ${
            step2Visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="border-4 border-black shadow-[8px_8px_0_0_#000] rounded-2xl bg-gradient-to-br from-white to-green-50 p-6 md:p-8 h-full hover:shadow-[12px_12px_0_0_#000] hover:-translate-y-2 transition-all hover:rotate-1 group">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-xl">
                  <span className="text-black">2</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-black leading-tight">
                  Select How Many Hours You Want to Spend
                </h3>
              </div>
              
              {/* Time Options */}
              <div className="space-y-3 pt-2">
                {timeOptions.map((option, idx) => (
                  <div
                    key={option}
                    className={`px-5 py-3.5 text-base font-bold border-2 border-black rounded-lg bg-white text-black hover:bg-blue-100 hover:shadow-[4px_4px_0_0_#000] transition-all cursor-pointer hover:-translate-y-0.5 ${
                      step2Visible ? "animate-slideIn" : "opacity-0"
                    }`}
                    style={{
                      animationDelay: `${idx * 150}ms`,
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div
          className={`transform transition-all duration-700 ease-out delay-600 ${
            step3Visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="border-4 border-black shadow-[8px_8px_0_0_#000] rounded-2xl bg-gradient-to-br from-white to-purple-50 p-6 md:p-8 h-full hover:shadow-[12px_12px_0_0_#000] hover:-translate-y-2 transition-all hover:rotate-1 relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-xl">
                  <span className="text-black">3</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-black leading-tight">
                  Join the Live Meet & Learn
                </h3>
              </div>
              
              {/* Live Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-500 text-white font-black rounded-lg border-2 border-black animate-pulse shadow-lg">
                <span className="w-2.5 h-2.5 bg-white rounded-full animate-ping"></span>
                LIVE
              </div>
              
              {/* Mentor Video Placeholder */}
              <div className="mt-4 w-full h-36 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 rounded-lg border-2 border-black flex items-center justify-center shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                <span className="text-gray-700 font-bold relative z-10">Mentor Session Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Micro Copy */}
      <div className="space-y-3 text-center pt-4">
        <p
          className={`text-xl md:text-2xl font-black text-black transition-all duration-700 ${
            microCopyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          You control the skill.
        </p>
        <p
          className={`text-xl md:text-2xl font-black text-black transition-all duration-700 ${
            microCopyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          You control the time.
        </p>
        <p
          className={`text-xl md:text-2xl font-black text-black transition-all duration-700 ${
            microCopyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          You learn live.
        </p>
      </div>

      {/* CTA Button */}
      <div className="text-center pt-8">
        <Link
          href="https://wa.me/916301962520"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-5 text-lg md:text-xl font-black border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:-translate-y-1 transition-all rounded-lg"
          style={{ backgroundColor: "#FFD700", color: "#000" }}
        >
          Start Learning Your Own Way
        </Link>
      </div>
    </div>
  )
}

