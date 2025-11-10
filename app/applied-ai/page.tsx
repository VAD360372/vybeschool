"use client"

import { useState } from "react"
import Link from "next/link"

export default function AppliedAIPage() {
  const [activeTab, setActiveTab] = useState("courses")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [sortBy, setSortBy] = useState("Popularity")

  const courses = [
    {
      id: 1,
      title: "Flux AI Complete Guide",
      subtitle: "Master AI-Powered Portrait Creation",
      description:
        "Learn how to train Flux AI with your own face to generate stunning, cinematic portraits and professional headshots using advanced AI technology.",
      image: "/ai-face-training-portraits.png",
      color: "from-purple-500 to-pink-500",
      startHref: "https://vybeschool.akamai.net.in/new-courses/7-flux-ai-train-your-face-to-create-cinematic-images-complete-guide",
    },
    {
      id: 2,
      title: "AI Superstack (Telugu)",
      subtitle: "The Ultimate Hands-On AI Mastery Program",
      description:
        "Master Artificial Intelligence in your native Telugu through our comprehensive, project-driven AI Superstack course. Learn AI fundamentals, prompt engineering, top AI tools, website creation, voice agents, and AI-powered content marketing—all without writing a single line of code.",
      image: "/ai ss.jpg",
      color: "from-yellow-500 to-orange-500",
      startHref: "https://vybeschool.akamai.net.in/new-courses/2-ai-superstack-telugu",
    },
    {
      id: 3,
      title: "ComfyUI Complete Guide in Telugu From Basics to Pro-Level AI Image Workflows",
      subtitle: "Master ComfyUI In Telugu",
      description:
        "Learn ComfyUI in Telugu! Master AI image generation, workflows, and automation using ComfyUI — from setup to advanced node connections.",
      image: "/cfu.png",
      color: "from-purple-500 to-pink-500",
      startHref: "https://youtu.be/KetGfjGr3-g?si=YznGgj8V5hawMVlT",
    },
  ]

  const dynamites = [
    {
      id: 1,
      title: "ChatGPT Mastery: Complete Beginners to Advanced",
      description: "Unlock the full potential of ChatGPT for personal and professional use.",
      tags: ["ChatGPT", "Productivity", "AI", "AI Tools"],
      duration: "55 min",
      category: "AI Tools",
      image: "/gpt.webp",
    },
    {
      id: 2,
      title: "Mobile AI Mastery",
      // Subtext: Learn AI Mastery with Mobile — No PC Needed
      description:
        "A Telugu course that shows you how to use AI tools right from your smartphone. Learn real-world AI tools through short, easy-to-follow mobile videos.",
      tags: ["Mobile", "AI", "Tools", "Telugu"],
      duration: "45 min",
      category: "AI Tools",
      image: "/AIMO1.jpg",
    },
    {
      id: 3,
      title: "Base44: Complete Web Development Mastery",
      description: "Build and deploy full-stack web applications using the Base44 platform.",
      tags: ["Web Dev", "Base44", "No-Code", "Development"],
      duration: "60 min",
      category: "Development",
      image: "/bass44.avif",
    },
    {
      id: 4,
      title: "Presentations with AI Mastery",
      description: "Create stunning, professional presentations in minutes with AI-powered tools.",
      tags: ["Presentations", "AI", "Design", "Creative"],
      duration: "40 min",
      category: "Creative",
      image: "/presentation.png",
    },
    {
      id: 5,
      title: "Vercel V0 Quick Start",
      description: "Build and deploy React components instantly with AI-powered Vercel V0.",
      tags: ["React", "Deployment", "AI", "Development"],
      duration: "30 min",
      category: "Development",
      image: "/v0.avif",
    },
    {
      id: 6,
      title: "Lovable App Builder",
      description: "Create full-stack applications using natural language with Lovable.",
      tags: ["No-Code", "Full-Stack", "AI", "Development"],
      duration: "45 min",
      category: "Development",
      image: "/lovable.png",
    },
    {
      id: 7,
      title: "Claude Prompt Mastery",
      description: "Advanced prompting techniques for better Claude AI responses.",
      tags: ["Prompting", "Claude", "Productivity", "AI Tools"],
      duration: "25 min",
      category: "AI Tools",
      image: "/claude.webp",
    },
    {
      id: 8,
      title: "Cursor AI Coding",
      description: "Boost coding productivity with AI-powered code completion.",
      tags: ["Coding", "AI", "IDE", "Development"],
      duration: "40 min",
      category: "Development",
      image: "/cursor.webp",
    },
    {
      id: 9,
      title: "Midjourney Art Generation",
      description: "Create stunning artwork and images with Midjourney AI.",
      tags: ["Art", "Images", "Creative"],
      duration: "35 min",
      category: "Creative",
      image: "/mj.svg",
    },
    {
      id: 10,
      title: "GitHub Copilot Setup",
      description: "Configure and optimize GitHub Copilot for maximum efficiency.",
      tags: ["GitHub", "AI", "Coding", "Development"],
      duration: "20 min",
      category: "Development",
      image: "/ghc.png",
    },
    {
      id: 11,
      title: "AI Tools API Integration",
      description: "Integrate ChatGPT into your applications with API calls.",
      tags: ["API", "ChatGPT", "Integration", "AI Tools"],
      duration: "50 min",
      category: "AI Tools",
      image: "/chatgptapi.webp",
    },
    {
      id: 12,
      title: "Notion AI Workflows",
      description: "Automate your productivity with Notion AI features.",
      tags: ["Notion", "Automation", "Workflow", "Productivity"],
      duration: "30 min",
      category: "Productivity",
      image: "/notionai.webp",
    },
  ]

  // Filter and sort dynamites
  const filteredDynamites = dynamites
    .filter((dynamite) => {
      // Category filter
      const categoryMatch = selectedCategory === "All Categories" || dynamite.category === selectedCategory

      // Search filter (semantic search on title, description, and tags)
      const searchLower = searchQuery.toLowerCase()
      const searchMatch =
        searchQuery === "" ||
        dynamite.title.toLowerCase().includes(searchLower) ||
        dynamite.description.toLowerCase().includes(searchLower) ||
        dynamite.tags.some((tag) => tag.toLowerCase().includes(searchLower))

      return categoryMatch && searchMatch
    })
    .sort((a, b) => {
      // Sort by popularity (default - by ID as a proxy for popularity)
      if (sortBy === "Popularity") {
        return a.id - b.id
      }
      // Sort by duration (extract minutes and compare)
      if (sortBy === "Duration") {
        const durationA = parseInt(a.duration)
        const durationB = parseInt(b.duration)
        return durationA - durationB
      }
      // Sort by newest (by ID descending)
      if (sortBy === "Newest") {
        return b.id - a.id
      }
      return 0
    })

  // Get unique categories for dropdown
  const categories = ["All Categories", ...Array.from(new Set(dynamites.map((d) => d.category)))]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="bg-black text-white px-8 py-4 text-3xl font-bold border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block mb-8">
            APPLIED AI COURSES
          </div>
          <p className="text-xl font-semibold text-black mb-12">
            MASTER AI WITH HANDS-ON PROJECTS AND REAL-WORLD APPLICATIONS
          </p>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab("courses")}
              className={`px-8 py-3 font-bold text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg transition-all ${
                activeTab === "courses" ? "bg-blue-500 text-white" : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              COURSES
            </button>
            <button
              onClick={() => setActiveTab("dynamites")}
              className={`px-8 py-3 font-bold text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg transition-all ${
                activeTab === "dynamites" ? "bg-yellow-400 text-black" : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              DYNAMITES
            </button>
          </div>

          {activeTab === "dynamites" && (
            <div className="bg-yellow-400 text-black px-8 py-6 text-2xl font-bold border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg mb-16">
              <div className="text-3xl mb-2">ALL OF WORLD'S AI IS HERE IN DYNAMITES</div>
              <div className="text-lg">Quick AI tools and courses under 1 hour [RELEASING SOON]</div>
            </div>
          )}
        </div>
      </div>

      {/* Course Cards Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        {activeTab === "courses" && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg overflow-hidden flex flex-col"
              >
                <div className={`h-72 md:h-64 bg-gradient-to-br ${course.color} relative overflow-hidden`}>
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement
                      img.src = "/ai-tools-hero.png"
                    }}
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-black mb-2">{course.title}</h3>
                  <h4 className="text-base font-bold text-black mb-3">{course.subtitle}</h4>

                  <div className="flex flex-col gap-2 mt-auto">
                    {course.id === 3 ? (
                      <button
                        onClick={() => window.open((course as any).startHref ? (course as any).startHref : "https://vybeschool.akamai.net.in/", "_blank")}
                        className="bg-yellow-400 text-black px-4 py-2 font-bold text-sm border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg hover:bg-yellow-500 transition-colors cursor-pointer"
                      >
                        Access for free!
                      </button>
                    ) : (
                      <button
                        onClick={() => window.open((course as any).startHref ? (course as any).startHref : "https://vybeschool.akamai.net.in/", "_blank")}
                        className="bg-blue-500 text-white px-4 py-2 font-bold text-sm border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
                      >
                        START LEARNING
                      </button>
                    )}
                    {course.id !== 3 && (
                      <Link href={(course as any).moreHref ? (course as any).moreHref : `/applied-ai/course/${course.id}`}>
                        <button className="bg-green-500 text-white px-4 py-2 font-bold text-sm border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg hover:bg-green-600 transition-colors w-full">
                          VIEW MORE
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "dynamites" && (
          <div>
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Search dynamites..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border-4 border-black rounded-lg font-semibold text-black placeholder-gray-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border-4 border-black rounded-lg font-semibold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="hidden"
                >
                  <option value="Popularity">Popularity</option>
                  <option value="Duration">Duration</option>
                  <option value="Newest">Newest</option>
                </select>
              </div>
            </div>

            {/* Results count */}
            {filteredDynamites.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl font-bold text-black">No dynamites found matching your search.</p>
              </div>
            )}

            {/* Dynamites Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDynamites.map((dynamite) => (
                <div
                  key={dynamite.id}
                  className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg overflow-hidden flex flex-col"
                >
                  <div className="h-48 relative">
                    <img
                      src={dynamite.image || "/placeholder.svg"}
                      alt={dynamite.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-black mb-2 line-clamp-2">{dynamite.title}</h3>
                    <p className="text-black font-semibold mb-4 text-sm line-clamp-2 flex-grow">
                      {dynamite.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {dynamite.tags.slice(0, 4).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-200 text-black text-xs font-bold rounded border-2 border-black"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Duration and Category */}
                    <div className="flex justify-between items-center mb-4 text-sm font-bold text-black">
                      <span>{dynamite.category}</span>
                      <span>{dynamite.duration}</span>
                    </div>

                    {/* Access Button - aligned at bottom */}
                    <button className="bg-yellow-400 text-black px-4 py-2 font-bold text-sm border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg hover:bg-yellow-500 transition-colors mt-auto">
                      ACCESS NOW
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Request Course Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => window.open("https://forms.gle/UvrkziuNYx4sQHE97", "_blank")}
            className="bg-yellow-400 text-black px-8 py-4 font-bold text-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg hover:bg-yellow-500 transition-colors cursor-pointer"
          >
            REQUEST A COURSE
          </button>
        </div>
      </div>
    </div>
  )
}
