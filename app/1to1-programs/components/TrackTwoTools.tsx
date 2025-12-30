"use client"

import Link from "next/link"

const tools = [
  {
    name: "Lovable",
    description: "Build production-ready web apps with AI assistance.",
    tags: ["Dev", "Web"],
  },
  {
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you code faster.",
    tags: ["Dev", "Coding"],
  },
  {
    name: "Claude Code",
    description: "Advanced coding assistant for complex projects.",
    tags: ["Dev", "Coding"],
  },
  {
    name: "ChatGPT",
    description: "Master prompt engineering and AI conversations.",
    tags: ["AI", "Research"],
  },
  {
    name: "Claude",
    description: "Deep AI reasoning and analysis capabilities.",
    tags: ["AI", "Research"],
  },
  {
    name: "V0",
    description: "Generate beautiful UI components instantly.",
    tags: ["Dev", "Design"],
  },
  {
    name: "Perplexity",
    description: "AI-powered research and information discovery.",
    tags: ["Research", "AI"],
  },
  {
    name: "Cursor AI",
    description: "Intelligent code editor with AI assistance.",
    tags: ["Dev", "Coding"],
  },
  {
    name: "n8n",
    description: "Build powerful automations without coding.",
    tags: ["Automation", "Dev"],
  },
  {
    name: "+ More",
    description: "Explore additional tools based on your needs.",
    tags: ["Custom"],
  },
]

export function TrackTwoTools() {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="text-xs md:text-sm font-black text-gray-500 uppercase tracking-wider">
          PROGRAM 2
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black">
          Track 2 · Learn What You Want
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
          Pick the tools and skills you want to master in live 1:1 sessions.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className="border-4 border-black shadow-[6px_6px_0_0_#000] rounded-xl bg-white p-5 md:p-6 hover:shadow-[10px_10px_0_0_#000] hover:-translate-y-2 transition-all group"
          >
            <h3 className="text-xl md:text-2xl font-black text-black mb-3 leading-tight group-hover:text-blue-600 transition-colors">
              {tool.name}
            </h3>
            <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
              {tool.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tool.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-bold border-2 border-black rounded-full bg-gray-100 text-black hover:bg-yellow-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Card */}
      <div className="border-4 border-black shadow-[10px_10px_0_0_#000] rounded-2xl bg-gradient-to-r from-black to-gray-900 text-white p-6 md:p-8 mt-10 hover:shadow-[12px_12px_0_0_#000] transition-all">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-lg md:text-xl font-bold leading-relaxed">
            Not sure what to choose? We'll design a path with you.
          </p>
          <Link
            href="https://wa.me/916301962520"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-base md:text-lg font-black border-4 border-white shadow-[6px_6px_0_0_rgba(255,255,255,1)] hover:shadow-[3px_3px_0_0_rgba(255,255,255,1)] hover:-translate-y-1 transition-all rounded-lg text-center whitespace-nowrap"
            style={{ backgroundColor: "#25D366", color: "#000" }}
          >
            Connect With Us on WhatsApp
          </Link>
        </div>
      </div>
    </div>
  )
}

