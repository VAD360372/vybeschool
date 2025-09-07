"use client"
import { Linkedin, Instagram } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-yellow-400 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black text-white px-8 py-4 text-3xl font-bold border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block mb-8">
            VYBESCHOOL TEAM
          </div>

          {/* Gallery Section */}
          <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg bg-white p-6">
            <div className="text-center mb-6">
              <div className="inline-block bg-black text-white px-4 py-2 font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                2x National-Level AI Hackathon Winners
              </div>
              <p className="mt-4 text-black font-semibold">We build real-world AI projects</p>
              <p className="text-black font-semibold">Delivered AI services to many businesses</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="border-4 border-black rounded-lg overflow-hidden">
                <img src="/hackathon1.jpg" alt="Hackathon photo 1" className="block w-full h-auto" />
              </div>
              <div className="border-4 border-black rounded-lg overflow-hidden">
                <img src="/hackahon2.jpg" alt="Hackathon photo 2" className="block w-full h-auto" />
              </div>
              <div className="border-4 border-black rounded-lg overflow-hidden">
                <img src="/hackathon3.jpg" alt="Hackathon photo 3" className="block w-full h-auto" />
              </div>
              <div className="border-4 border-black rounded-lg overflow-hidden">
                <img src="/hackathon4.jpg" alt="Hackathon photo 4" className="block w-full h-auto" />
              </div>
              <div className="border-4 border-black rounded-lg overflow-hidden">
                <img src="/ramesh.jpeg" alt="iit" className="block w-full h-20 md:h-88 object-cover" />
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-black">
                <img
                  src="/veerla-anjudeep-professional.jpg"
                  alt="Veerla Anjudeep"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg mb-1">VEERLA ANJUDEEP</h3>
              <p className="text-blue-600 font-semibold mb-2">No-code/Low-code AI Expert</p>
              <p className="text-sm text-gray-600 mb-4">
                4+ years of experience in building AI chatbots, voice agents, and websites. AI Superstack Mentor.
              </p>
              <div className="flex justify-center gap-2">
                <a
                  href="https://www.linkedin.com/in/anjudeepveerla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <Linkedin size={16} />
                </a>
                <button className="bg-pink-500 text-white p-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                  <Instagram size={16} />
                </button>
              </div>
            </div>

            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-black">
                <img src="/Maneesh.jpg" alt="Bommakanti Maneesh" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg mb-1">BOMMAKANTI MANEESH</h3>
              <p className="text-blue-600 font-semibold mb-2">Applied AI Expert</p>
              <p className="text-sm text-gray-600 mb-4">AI Creator,No-code/Low-code Developer, R&D AI Specialist, and AI Superstack Mentor.</p>
              <div className="flex justify-center gap-2">
                <a
                  href="https://www.linkedin.com/in/bommakanti-maneesh-0494972b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <Linkedin size={16} />
                </a>
                <button className="bg-pink-500 text-white p-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                  <Instagram size={16} />
                </button>
              </div>
            </div>

            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-black">
                <img src="/maneesh-headshot.png" alt="Vikas Chary Alwala" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg mb-1">VIKAS CHARY ALWALA</h3>
              <p className="text-blue-600 font-semibold mb-2">Technology Specialist</p>
              <p className="text-sm text-gray-600 mb-4">Experienced technology professional with expertise in software development and innovation.</p>
              <div className="flex justify-center gap-2">
                <a
                  href="https://www.linkedin.com/in/vikaschary/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <Linkedin size={16} />
                </a>
                <button className="bg-pink-500 text-white p-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                  <Instagram size={16} />
                </button>
              </div>
            </div>

            {/* Uday */}
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-black">
                <img src="/uday.JPG" alt="Uday" className="w-full h-full object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/placeholder-user.jpg" }} />
              </div>
              <h3 className="font-bold text-lg mb-1">UDAY</h3>
              <p className="text-blue-600 font-semibold mb-2">Senior Software Engineer / AI Engineer</p>
              <p className="text-sm text-gray-600 mb-4">
                11+ years of experience in AI, cloud, and enterprise systems. Expert in AI agents, LLMOps, multimodal applications, and GPU-optimized AI workflows. Passionate about teaching job-ready AI skills that bridge theory and real-world deployment.
              </p>
              <div className="flex justify-center gap-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <Linkedin size={16} />
                </a>
                <button className="bg-pink-500 text-white p-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                  <Instagram size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products from VybeSchool Section */}
      <section className="py-16 px-4 bg-yellow-400">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="bg-black text-white px-8 py-4 text-3xl font-bold border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block">
              PRODUCTS FROM VYBESCHOOL
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* SCO Product */}
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg overflow-hidden">
            <img src="/sco.jpg" alt="SCO - SnapCaptions.co" className="block w-full h-64 object-contain" />

              <div className="p-4 text-center">
                <a
                  href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTUwNjU5ODk2NzkwOTA2?story_media_id=3559516281487564491_71575404020&igsh=ZHo0NndkdmtuaWs3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 text-sm font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all rounded-lg"
                >
                  VISIT SNAPCAPTIONS.CO →
                </a>
              </div>
            </div>

            {/* LUMIAI Product */}
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg overflow-hidden">
            <img src="/lumiai.jpg" alt="LUMIAI" className="block w-full h-64 object-contain" />

              <div className="p-4 text-center">
                <a
                  href="https://www.instagram.com/lumi.ai_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-pink-500 text-white px-4 py-2 text-sm font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all rounded-lg"
                >
                  VISIT LUMIAI →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
