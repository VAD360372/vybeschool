"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function WebinarsPage() {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <main className="min-h-screen px-4 md:px-6 py-10 md:py-16" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1
            className="text-3xl md:text-5xl font-black px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] inline-block"
            style={{ backgroundColor: "#FFD700", color: "#000" }}
          >
            WEBINARS
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Webinar Card - Left Column */}
          <div className="w-full flex justify-start">
            <div
              className="border-4 border-black shadow-[8px_8px_0_0_#000] rounded-xl bg-white overflow-hidden transition-all hover:shadow-[12px_12px_0_0_#000] max-w-xs w-full"
            >
              <div className="relative w-full" style={{ paddingBottom: "140%" }}>
                <Image
                  src="/webinar poster.png"
                  alt="AI Starter Program Telugu"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-3">
                <h2 className="text-lg md:text-xl font-black text-black mb-2 text-center">
                  AI Starter Program Telugu
                </h2>
                {!showDetails && (
                  <button
                    className="w-full px-4 py-2 text-sm font-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all rounded-lg"
                    style={{ backgroundColor: "#10B981", color: "white" }}
                    onClick={(e) => {
                      e.stopPropagation()
                      setShowDetails(true)
                    }}
                  >
                    JOIN WEBINAR →
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Detailed Content - Right Column */}
          {showDetails && (
            <div className="w-full">
              <div className="p-4 border-4 border-black shadow-[8px_8px_0_0_#000] rounded-xl bg-white h-full">
                <h2 className="text-lg md:text-xl font-black text-black mb-2">
                  Now, for the first time ever, we're going behind the scenes to show you how it's all done.
                </h2>
                <p className="text-sm font-bold text-black mb-4">
                  This 3-Day Experience isn't just about "learning AI." It's about understanding how real founders build, scale, and monetize AI in the modern world.
                </p>

                {/* Day 1 */}
                <div className="mb-3 p-3 border-2 border-black rounded-lg bg-yellow-50">
                  <h3 className="text-base font-black text-black mb-1">
                    🗓 Day 1: Inside Vybe — Meet the Founders
                  </h3>
                  <p className="text-xs text-black font-bold">
                    Interact directly with Maneesh & Anjudeep, the founders of VybeSchool and LumiAI. Get a transparent look at how our team works, what tools we use daily, and how AI runs everything we build.
                  </p>
                </div>

                {/* Day 2 */}
                <div className="mb-3 p-3 border-2 border-black rounded-lg bg-blue-50">
                  <h3 className="text-base font-black text-black mb-1">
                    🧠 Day 2: AI Deep Dive — Solve, Build, Integrate
                  </h3>
                  <p className="text-xs text-black font-bold">
                    Bring your real questions business, student, or creator-related — and we'll guide you 1:1 on how to actually use AI in your work or studies. From automating tasks to building your own AI workflows.
                  </p>
                </div>

                {/* Day 3 */}
                <div className="mb-3 p-3 border-2 border-black rounded-lg bg-green-50">
                  <h3 className="text-base font-black text-black mb-1">
                    💼 Day 3: Monetize AI — From Skills to Clients
                  </h3>
                  <p className="text-xs text-black font-bold mb-1">
                    Join our LumiAI Services team lead, Santosh, as we break down the entire client journey:
                  </p>
                  <ul className="text-xs text-black font-bold list-none ml-2 space-y-0.5">
                    <li>💬 How we find clients</li>
                    <li>💰 How we quote & close deals</li>
                    <li>⚙ What tools we use to deliver</li>
                    <li>📈 And how you can start doing it too</li>
                  </ul>
                </div>

                <div className="mb-3 p-3 border-2 border-black rounded-lg bg-gray-100">
                  <p className="text-xs font-black text-black">
                    This is not a webinar. It's an inside look at India's growing AI startup culture — taught by the ones building it. So if you've ever wondered "Where do I even start with AI?" This is your start.
                  </p>
                </div>

                <div className="mb-4 text-center">
                  <p className="text-sm font-black text-black mb-1">
                    💬 Join the Founders Live Interact. Learn. Grow.
                  </p>
                  <p className="text-xs font-bold text-black">
                    💗 Founders of VybeSchool: Maneesh Bommakanti & Anjudeep Veerla
                  </p>
                </div>

                <div className="text-center mb-3">
                  <Link
                    href="https://tally.so/r/3yKQRx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="px-6 py-3 text-base font-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all rounded-lg"
                      style={{ backgroundColor: "#10B981", color: "white" }}
                    >
                      REGISTER HERE →
                    </button>
                  </Link>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setShowDetails(false)}
                    className="px-4 py-2 text-sm font-black border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-all rounded-lg"
                    style={{ backgroundColor: "#000", color: "#FFD700" }}
                  >
                    Hide Details
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
