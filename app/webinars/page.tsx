"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import AIBootcampPopup from "@/components/AIBootcampPopup"

const programPhases = [
  {
    id: 1,
    title: "Phase 1: AI Foundations (Days 1–5)",
    theme: "Understand AI like never before — in simple Telugu.",
    accent: "#4AA3FF",
    gradient: "from-blue-50 to-blue-100",
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
    theme: "From Design → Code → Deploy → Voice AI.",
    accent: "#FFB020",
    gradient: "from-yellow-100 via-orange-100 to-yellow-200",
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
    theme: "Build automations that work — and earn.",
    accent: "#22C55E",
    gradient: "from-green-100 to-green-200",
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

export default function WebinarsPage() {
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("timeline-phase-visible")
          }
        })
      },
      { threshold: 0.3 },
    )

    phaseRefs.current.forEach((phase) => {
      if (phase) observer.observe(phase)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen px-4 md:px-6 py-10 md:py-16" style={{ backgroundColor: "#F8F9FA" }}>
      <AIBootcampPopup paymentUrl="https://nexify.club/dp/691031a558cce7577942316f" />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-3xl md:text-5xl font-black px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] inline-block"
            style={{ backgroundColor: "#FFD700", color: "#000" }}
          >
            WEBINARS
          </h1>
          <p className="mt-6 text-base md:text-lg font-bold text-black max-w-3xl mx-auto leading-relaxed">
            Master AI from scratch in Telugu
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center mb-16">
          <div className="border-4 border-black shadow-[10px_10px_0_0_#000] rounded-2xl bg-white overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: "62%" }}>
              <Image src="/aiss.png" alt="AI SuperStack Hands-On Program" fill className="object-cover" priority />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-black leading-tight">
              AI SuperStack Hands-On Program — Learn, Build & Earn with AI in 14 Days
            </h2>
            <p className="text-sm md:text-base font-semibold text-black leading-relaxed">
              Every session is hands-on 
              you’ll explore, build, and launch projects that make AI work for you.
            </p>
            <div className="relative overflow-hidden border-4 border-black rounded-2xl shadow-[12px_12px_0_0_#000]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.25),_transparent_65%)]"></div>
              <div className="relative bg-red-500 text-white px-5 py-6 text-center space-y-2">
                <div className="text-2xl md:text-3xl font-black uppercase tracking-wide drop-shadow-md">
                  ₹5000 Cash Reward Challenge
                </div>
                <p className="text-sm md:text-base font-black leading-relaxed">
                  Launch your AI project during the cohort, share your live website with us, and get detailed feedback from the mentors.
                </p>
                <p className="text-xs md:text-sm font-bold text-yellow-200 uppercase tracking-widest">
                  Best deployed build wins ₹5000. Submit your link + walkthrough on graduation day to enter.
                </p>
              </div>
            </div>
            <div className="bg-black text-white border-4 border-black rounded-xl shadow-[8px_8px_0_0_#000] p-4 space-y-2">
              <p className="text-sm md:text-base font-bold leading-relaxed">
                By Day 14, you’ll launch your own AI-powered project — website, voice agent, and a monetizable automation stack.
              </p>
              <p className="text-sm font-bold uppercase tracking-wide text-yellow-300">No coding required. Curiosity mandatory.</p>
            </div>
            <div className="bg-gray-100 border-4 border-black rounded-xl shadow-[6px_6px_0_0_#000] p-4">
              <p className="text-sm md:text-base font-bold text-black leading-relaxed">
                💰 100% Money-Back Guarantee — build and deploy your own website by the end, or get a full refund. No questions
                asked.
              </p>
            </div>
            <Link
              href="https://nexify.club/dp/691031a558cce7577942316f"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="px-6 py-3 text-base md:text-lg font-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all rounded-lg"
                style={{ backgroundColor: "#1D4ED8", color: "white" }}
              >
                🎟 Join the AI SuperStack Today — Learn. Build. Earn.
              </button>
            </Link>
          </div>
        </div>

        {/* Timeline Animation */}
        <section className="relative mb-20">
          <div className="hidden lg:block absolute left-4 top-0 bottom-0 border-l-4 border-black"></div>
          <div className="space-y-10">
            {programPhases.map((phase, index) => (
              <div
                key={phase.id}
                ref={(el) => {
                  phaseRefs.current[index] = el
                }}
                className={`timeline-phase rounded-2xl border-4 border-black shadow-[10px_10px_0_0_#000] overflow-hidden bg-white`}
              >
                <div
                  className={`px-6 py-5 border-b-4 border-black bg-gradient-to-r ${phase.gradient}`}
                  style={{ borderColor: phase.accent }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <h3 className="text-xl md:text-2xl font-black text-black">{phase.title}</h3>
                    <span
                      className="inline-block px-4 py-2 text-xs md:text-sm font-black border-4 border-black rounded-lg shadow-[4px_4px_0_0_#000]"
                      style={{ backgroundColor: phase.accent, color: "#111111" }}
                    >
                      {phase.theme}
                    </span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 py-6 bg-white">
                  {phase.days.map((day) => (
                    <div
                      key={`${phase.id}-${day.label}`}
                      className="timeline-card border-4 border-black rounded-xl shadow-[6px_6px_0_0_#000] bg-gray-50 p-4 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 text-xs font-black border-2 border-black rounded-md bg-white">{day.label}</span>
                        <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">{phase.theme.split(" ")[0]}</span>
                      </div>
                      <h4 className="text-sm md:text-base font-black text-black">{day.topic}</h4>
                      <p className="text-xs md:text-sm font-semibold text-black leading-relaxed">{day.outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Guarantee & CTA */}
        <section className="mb-12">
          <div className="border-4 border-black rounded-2xl shadow-[10px_10px_0_0_#000] bg-black text-white p-6 md:p-8 space-y-4 text-center">
            <h3 className="text-2xl md:text-3xl font-black">No Theory. No Fluff. Just Hands-On AI.</h3>
            <p className="text-sm md:text-base font-bold max-w-3xl mx-auto leading-relaxed">
              Build a live website, voice agent, and automations that deliver real results.<br /> 
              If you don’t launch, you don’t pay —
              we refund 100%.
            </p>
            <Link
              href="https://nexify.club/dp/691031a558cce7577942316f"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="px-6 py-3 text-base md:text-lg font-black border-4 border-white shadow-[6px_6px_0_0_rgba(255,255,255,1)] hover:shadow-[3px_3px_0_0_rgba(255,255,255,1)] transition-all rounded-lg"
                style={{ backgroundColor: "#FFD700", color: "#111" }}
              >
                Join the 14-Day Program →
              </button>
            </Link>
          </div>
        </section>
      </div>

      <style jsx global>{`
        .timeline-phase {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .timeline-phase-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .timeline-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .timeline-card:hover {
          transform: translateY(-6px);
          box-shadow: 8px 8px 0 0 #111111;
        }
      `}</style>
    </main>
  )
}
