"use client"

import Link from "next/link"
import { GuaranteeBlock } from "./GuaranteeBlock"

const programPhases = [
  {
    id: 1,
    title: "Phase 1: AI Foundations (Days 1–5)",
    days: [
      {
        label: "Day 1",
        topic: "AI in India today",
        outcome: "Demystify AI, Generative AI, and Agents — see how they shape opportunities around us.",
      },
      {
        label: "Day 2",
        topic: "ChatGPT, Gemini, Claude, Grok, Perplexity",
        outcome: "Compare the top assistants and match each tool to the right workflow.",
      },
      {
        label: "Day 3",
        topic: "Automations, Agents & MCPs",
        outcome: "Learn the frameworks that power modern AI systems and when to use each.",
      },
      {
        label: "Day 4",
        topic: "Hands-on with AI toolset",
        outcome: "Explore Genspark, Grok, GitHub Copilot, and Gamma for real-world productivity.",
      },
      {
        label: "Day 5",
        topic: "AI for content growth",
        outcome: "Discover how we scaled a YouTube channel from 0 to monetization using AI.",
      },
    ],
  },
  {
    id: 2,
    title: "Phase 2: Builder Track (Days 6–10)",
    days: [
      {
        label: "Day 6",
        topic: "Design with AI",
        outcome: "Prototype beautiful websites using Relume, CopyUI, and Uizard in minutes.",
      },
      {
        label: "Day 7",
        topic: "Ship production-grade UI",
        outcome: "Convert designs to React + Tailwind using Lovable and V0.",
      },
      {
        label: "Day 8",
        topic: "AI-assisted coding",
        outcome: "Use Cursor AI to build features faster with intelligent pair programming.",
      },
      {
        label: "Day 9",
        topic: "Versioning & deployments",
        outcome: "Push to GitHub, automate with best practices, and go live on Vercel.",
      },
      {
        label: "Day 10",
        topic: "Voice AI experiences",
        outcome: "Integrate ElevenLabs + Vapi to make your project talk to users.",
      },
    ],
  },
  {
    id: 3,
    title: "Phase 3: Automate & Monetize (Days 11–14)",
    days: [
      {
        label: "Day 11",
        topic: "n8n automation fundamentals",
        outcome: "Master triggers, data flows, filters, and webhooks to orchestrate tasks.",
      },
      {
        label: "Day 12",
        topic: "APIs + ChatGPT workflows",
        outcome: "Wire ChatGPT with Gmail, Telegram, Google Sheets, and custom APIs.",
      },
      {
        label: "Day 13",
        topic: "Productize AI solutions",
        outcome: "Build lead generators, chatbots, and CRM automations tailored to clients.",
      },
      {
        label: "Day 14",
        topic: "Deploy & monetize",
        outcome: "Package, price, and pitch your automation stack to start earning.",
      },
    ],
  },
]

export function TrackOneSuperStack() {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="text-xs md:text-sm font-black text-gray-500 uppercase tracking-wider">
          PROGRAM 1
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black">
          Track 1 · AI SuperStack (14 Days)
        </h2>
      </div>

      {/* Top Summary Card */}
      <div className="border-4 border-black shadow-[10px_10px_0_0_#000] rounded-2xl bg-white p-6 md:p-8 hover:shadow-[12px_12px_0_0_#000] transition-all">
        <div className="space-y-5">
          <h3 className="text-2xl md:text-3xl font-black text-black leading-tight">
            AI SuperStack Hands-On Program
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Learn, Build & Earn with AI in 14 Days — every session is hands-on.
          </p>
          
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="px-4 py-2 text-sm font-bold border-2 border-black rounded-lg bg-blue-50 text-black hover:bg-blue-100 transition-colors">
              14 days
            </span>
            <span className="px-4 py-2 text-sm font-bold border-2 border-black rounded-lg bg-green-50 text-black hover:bg-green-100 transition-colors">
              Live & hands-on
            </span>
            <span className="px-4 py-2 text-sm font-bold border-2 border-black rounded-lg bg-yellow-50 text-black hover:bg-yellow-100 transition-colors">
              Website + Voice Agent + Automations
            </span>
          </div>

          <div className="pt-4">
            <Link
              href="https://nexify.club/dp/691031a558cce7577942316f"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-base md:text-lg font-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] hover:-translate-y-1 transition-all rounded-lg"
              style={{ backgroundColor: "#FFD700", color: "#000" }}
            >
              Join the 14-Day Program →
            </Link>
          </div>
        </div>
      </div>

      {/* Phase Cards */}
      <div className="space-y-6">
        {programPhases.map((phase) => (
          <div
            key={phase.id}
            className="border-4 border-black shadow-[8px_8px_0_0_#000] rounded-2xl bg-white overflow-hidden hover:shadow-[10px_10px_0_0_#000] transition-all"
          >
            {/* Phase Header */}
            <div className="px-6 py-4 border-b-4 border-black bg-gradient-to-r from-gray-50 to-gray-100">
              <h3 className="text-xl md:text-2xl font-black text-black">{phase.title}</h3>
            </div>

            {/* Timeline List */}
            <div className="px-6 py-6 space-y-3">
              {phase.days.map((day, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-start gap-3 pb-3 border-b border-gray-200 last:border-b-0 last:pb-0"
                >
                  <div className="flex-shrink-0">
                    <span className="inline-block px-3 py-1 text-xs md:text-sm font-black border-2 border-black rounded-md bg-black text-white">
                      {day.label}
                    </span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="text-base md:text-lg font-black text-black leading-tight">{day.topic}</h4>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">{day.outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Guarantee Block */}
      <div className="pt-6">
        <GuaranteeBlock />
      </div>
    </div>
  )
}

