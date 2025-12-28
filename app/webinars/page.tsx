"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

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

const aiTools = [
  {
    name: "Lovable",
    description: "Build production-ready web apps with AI-powered design to code conversion",
    icon: "🎨",
  },
  {
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write code faster with intelligent suggestions",
    icon: "💻",
  },
  {
    name: "Claude Code",
    description: "AI-first code editor that understands your codebase and assists with development",
    icon: "⚡",
  },
  {
    name: "ChatGPT",
    description: "Conversational AI assistant for problem-solving and creative tasks",
    icon: "💬",
  },
  {
    name: "Claude",
    description: "Advanced AI assistant specialized in analysis, writing, and coding tasks",
    icon: "🧠",
  },
  {
    name: "V0",
    description: "Transform designs into React components with Tailwind CSS instantly",
    icon: "🚀",
  },
  {
    name: "Perplexity",
    description: "AI-powered search engine that provides accurate answers with citations",
    icon: "🔍",
  },
  {
    name: "Cursor AI",
    description: "Intelligent code completion and refactoring for modern development workflows",
    icon: "🎯",
  },
  {
    name: "n8n",
    description: "Workflow automation tool to connect apps and build custom AI automations",
    icon: "🔗",
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
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-3xl md:text-5xl font-black px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] inline-block"
            style={{ backgroundColor: "#FFD700", color: "#000" }}
          >
            1:1 PROGRAMS
          </h1>
          <p className="mt-6 text-base md:text-lg font-bold text-black max-w-3xl mx-auto leading-relaxed">
            Personalized AI learning tailored to your goals — choose what fits you best
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
              you'll explore, build, and launch projects that make AI work for you.
            </p>
          </div>
        </div>

        {/* SECTION 1: What We Teach */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2
              className="text-2xl md:text-4xl font-black px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] inline-block"
              style={{ backgroundColor: "#4285F4", color: "#fff" }}
            >
              PROGRAM 1: WHAT WE TEACH
            </h2>
            <p className="mt-4 text-base md:text-lg font-bold text-black max-w-3xl mx-auto">
              Structured 14-day curriculum delivered in Telugu — from AI foundations to monetization
            </p>
          </div>

          {/* Timeline Animation */}
          <section className="relative">
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

        {/* SECTION 2: What You Want to Learn */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2
              className="text-2xl md:text-4xl font-black px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] inline-block"
              style={{ backgroundColor: "#22C55E", color: "#fff" }}
            >
              PROGRAM 2: WHAT YOU WANT TO LEARN
            </h2>
            <p className="mt-4 text-base md:text-lg font-bold text-black max-w-3xl mx-auto">
              Explore AI tools tailored to your needs — master the tools that matter to you
            </p>
          </div>

          {/* AI Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {aiTools.map((tool, index) => (
              <div
                key={index}
                className="border-4 border-black rounded-xl shadow-[6px_6px_0_0_#000] bg-white p-6 space-y-3 hover:shadow-[8px_8px_0_0_#000] hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{tool.icon}</span>
                  <h3 className="text-xl md:text-2xl font-black text-black">{tool.name}</h3>
                </div>
                <p className="text-sm md:text-base font-semibold text-black leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
            {/* More Option */}
            <div
              className="border-4 border-black rounded-xl shadow-[6px_6px_0_0_#000] p-6 flex items-center justify-center hover:shadow-[8px_8px_0_0_#000] hover:-translate-y-1 transition-all"
              style={{ backgroundColor: "#FFD700" }}
            >
              <h3 className="text-2xl md:text-3xl font-black text-black">+ MORE</h3>
            </div>
          </div>

          {/* Connect With Us Button */}
          <div className="text-center">
            <Link
              href="https://wa.me/918074226633"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="px-8 py-4 text-lg md:text-xl font-black border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] transition-all rounded-lg"
                style={{ backgroundColor: "#25D366", color: "#fff" }}
              >
                📱 Connect With Us on WhatsApp
              </button>
            </Link>
            <p className="mt-4 text-sm md:text-base font-bold text-black">
              Let's discuss your learning goals and customize a 1:1 program for you!
            </p>
          </div>
        </div>
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
