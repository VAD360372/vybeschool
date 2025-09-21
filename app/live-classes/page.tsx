"use client"

import Link from "next/link"

export default function LiveClassesPage() {
  return (
    <main className="min-h-screen px-4 md:px-6 py-10 md:py-16" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1
            className="text-3xl md:text-5xl font-black px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] inline-block"
            style={{ backgroundColor: "#FFD700", color: "#000" }}
          >
            Everyweek live sessions to master AI
          </h1>
        </div>

        {/* YouTube Demo Video */}
        <div className="mb-12">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full border-4 border-black shadow-[8px_8px_0_0_#000] rounded-lg"
              src="https://www.youtube.com/embed/w67KiBdrgts"
              title="Build AI Agent for Business with N8N | ChatUI Integration Tutorial Telugu | #n8nautomation #aitelugu"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* n8n 3days workshop Card */}
          <div className="border-4 border-black shadow-[8px_8px_0_0_#000] rounded-xl bg-white overflow-hidden">
            {/* Thumbnail Image */}
            <div className="relative h-48 bg-gradient-to-br from-green-500 to-teal-500">
              <img
                src="/n8n.jpg"
                alt="n8n 3days workshop"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement
                  img.style.display = 'none'
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-black mb-2">n8n</div>
                  <div className="text-lg font-bold">Workflow Automation</div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl md:text-3xl font-black text-black mb-3">Master n8n in 3 Days</h2>
              <div className="space-y-2 text-black font-bold mb-4">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Duration: 3 days intensive workshop
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Price: ₹529 (84% off from ₹3,599)
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Focus: Build powerful automations without coding
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Level: Beginner to Advanced
                </p>
              </div>
              
              {/* Special Note */}
              <div className="mb-4 p-3 bg-yellow-100 border-2 border-yellow-400 rounded-lg">
                <p className="text-black font-bold text-sm text-center">
                  Get a chance of joining our AI support team
                </p>
              </div>
              
              {/* Join Now Button */}
              <a
                href="https://nexify.club/dp/68d027a9137c9a6a196fcede"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 text-lg font-black border-4 border-black rounded-xl shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all text-center"
                style={{ backgroundColor: "#10B981", color: "white" }}
              >
                JOIN NOW →
              </a>
            </div>
          </div>

          {/* AI Masterclass Card */}
          <div className="border-4 border-black shadow-[8px_8px_0_0_#000] rounded-xl bg-white overflow-hidden">
            {/* Thumbnail Image */}
            <div className="relative h-48 bg-gradient-to-br from-purple-500 to-pink-500">
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-black mb-2">AI</div>
                  <div className="text-lg font-bold">Masterclass</div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl md:text-3xl font-black text-black mb-3">AI Masterclass</h2>
              <div className="space-y-2 text-black font-bold mb-4">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Duration: Advanced intensive sessions
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Price: Coming Soon
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Focus: Advanced AI concepts & applications
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Level: Intermediate to Expert
                </p>
              </div>
              
              {/* Join Now Button */}
              <button
                onClick={() => alert("COMING SOON! Stay tuned for updates.")}
                className="w-full px-6 py-3 text-lg font-black border-4 border-black rounded-xl shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all"
                style={{ backgroundColor: "#8B5CF6", color: "white" }}
              >
                JOIN NOW →
              </button>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}


