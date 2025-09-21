"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function LiveSessionsPage() {
  // Load AOS library for scroll animations
  useEffect(() => {
    const loadAOS = async () => {
      const AOS = (await import('aos')).default
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
      })
    }
    loadAOS()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div 
            className="bg-white text-black px-8 py-6 text-4xl md:text-5xl font-black border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] inline-block mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            VYBESCHOOL LIVE
          </div>
          <h1 
            className="text-3xl md:text-4xl font-black text-white mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Accelerate Your Skills with Interactive Masterclasses & Workshops
          </h1>
          <p 
            className="text-xl md:text-2xl font-semibold text-white mb-8 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Join exclusive live sessions and intensive workshops, designed for hands-on learning and direct interaction with expert founders. Elevate your career with cutting-edge knowledge and practical skills.
          </p>
          <a 
            href="#explore-sessions"
            className="bg-yellow-400 text-black px-8 py-4 font-black text-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg hover:bg-yellow-500 transition-all cursor-pointer inline-block"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            EXPLORE LIVE PROGRAMS
          </a>
        </div>
      </section>

      {/* Exclusive Live Sessions Section */}
      <section id="exclusive-live-sessions" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 
            className="text-3xl md:text-4xl font-black text-black text-center mb-12"
            data-aos="fade-down"
          >
            Exclusive Live Learning: Deep Dives with Founders
          </h2>
          
          <div 
            className="bg-gradient-to-br from-green-50 to-blue-50 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-xl p-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-2xl md:text-3xl font-black text-black mb-6">
              Interactive Live Sessions: Limited to 100 Participants
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 border-2 border-black rounded-full flex-shrink-0 mt-1"></div>
                    <span className="text-lg font-bold text-black">Intimate group setting (max 100 attendees)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 border-2 border-black rounded-full flex-shrink-0 mt-1"></div>
                    <span className="text-lg font-bold text-black">3x weekly live sessions for continuous, advanced learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 border-2 border-black rounded-full flex-shrink-0 mt-1"></div>
                    <span className="text-lg font-bold text-black">Direct Q&A and interaction with VybeSchool founders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 border-2 border-black rounded-full flex-shrink-0 mt-1"></div>
                    <span className="text-lg font-bold text-black">Focus on advanced topics and real-world AI applications</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-black text-green-600 mb-2">100</div>
                  <div className="text-xl font-bold text-black">Max Participants</div>
                  <div className="text-sm font-semibold text-gray-600 mt-2">Intimate Learning Experience</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-green-500 text-white px-8 py-4 font-black text-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg hover:bg-green-600 transition-all cursor-pointer">
                VIEW UPCOMING SESSIONS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* N8N Workshop Section */}
      <section id="n8n-workshop" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 
            className="text-3xl md:text-4xl font-black text-black text-center mb-12"
            data-aos="fade-down"
          >
            N8N Automation Workshop: From Beginner to Pro
          </h2>
          
          <div 
            className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-xl p-8"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="flex items-center gap-6 mb-6">
              <img src="/n8n.jpg" alt="N8N Logo" className="w-20 h-20 object-cover border-4 border-black rounded-lg" />
              <h3 className="text-2xl md:text-3xl font-black text-black">
                N8N 3-Day Intensive Workshop: Become an Automation Developer
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 border-2 border-black rounded-full flex-shrink-0 mt-1"></div>
                    <span className="text-lg font-bold text-black">Comprehensive 3-day workshop for rapid skill acquisition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 border-2 border-black rounded-full flex-shrink-0 mt-1"></div>
                    <span className="text-lg font-bold text-black">2000+ workflow projects for unparalleled hands-on experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 border-2 border-black rounded-full flex-shrink-0 mt-1"></div>
                    <span className="text-lg font-bold text-black">Learn to build powerful automations from beginner to expert levels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 border-2 border-black rounded-full flex-shrink-0 mt-1"></div>
                    <span className="text-lg font-bold text-black">Kickstart your career as a proficient N8N Automation Developer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 border-2 border-black rounded-full flex-shrink-0 mt-1"></div>
                    <span className="text-lg font-bold text-black">Build a strong portfolio with real-world automation projects</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-black text-blue-600 mb-2">3</div>
                  <div className="text-xl font-bold text-black">Intensive Days</div>
                  <div className="text-sm font-semibold text-gray-600 mt-2">2000+ Projects</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="https://vybeschool.akamai.net.in/new-courses/4-n8n-mastery-7-day-live-hands-on-program">
                <button className="bg-blue-500 text-white px-8 py-4 font-black text-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg hover:bg-blue-600 transition-all cursor-pointer">
                  REGISTER FOR N8N WORKSHOP
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Masterclass Section */}
      <section id="ai-masterclass" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 
            className="text-3xl md:text-4xl font-black text-black text-center mb-12"
            data-aos="fade-down"
            data-aos-easing="ease-out-back"
          >
            AI Masterclass by VybeSchool Founders: Industry Insights & Practical Skills
          </h2>
          
          <div 
            className="bg-gradient-to-br from-purple-50 to-pink-50 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-xl p-8"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3 className="text-2xl md:text-3xl font-black text-black mb-6">
              The Ultimate AI Masterclass by VybeSchool, SnapCaptions.co & Lumiai Founders
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 border-2 border-black rounded-full flex-shrink-0 mt-1"></div>
                    <span className="text-lg font-bold text-black">Taught by founders of VybeSchool, SnapCaptions.co & Lumiai AI Community (50K+ members)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 border-2 border-black rounded-full flex-shrink-0 mt-1"></div>
                    <span className="text-lg font-bold text-black">Proven track record: 200+ people (students, IT professionals, business owners) taught since Jan 2025</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 border-2 border-black rounded-full flex-shrink-0 mt-1"></div>
                    <span className="text-lg font-bold text-black">Deep dive into advanced AI concepts and practical implementations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 border-2 border-black rounded-full flex-shrink-0 mt-1"></div>
                    <span className="text-lg font-bold text-black">Learn to build powerful automations for IT companies and individual businesses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 border-2 border-black rounded-full flex-shrink-0 mt-1"></div>
                    <span className="text-lg font-bold text-black">Leverage founders' extensive expertise in building scalable AI solutions</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-black text-purple-600 mb-2">200+</div>
                  <div className="text-xl font-bold text-black">Students Taught</div>
                  <div className="text-sm font-semibold text-gray-600 mt-2">Since Jan 2025</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-purple-500 text-white px-8 py-4 font-black text-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg hover:bg-purple-600 transition-all cursor-pointer">
                ENROLL IN AI MASTERCLASS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 
            className="text-3xl md:text-4xl font-black text-black mb-6"
            data-aos="fade-up"
          >
            Ready to Accelerate Your Career?
          </h2>
          <p 
            className="text-xl font-bold text-black mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Join our exclusive live sessions and masterclasses to learn directly from industry-leading founders.
          </p>
          <div 
            className="flex flex-col md:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <button className="bg-black text-white px-8 py-4 font-black text-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg hover:bg-gray-800 transition-all cursor-pointer">
              JOIN WAITLIST
            </button>
            <Link href="/applied-ai">
              <button className="bg-white text-black px-8 py-4 font-black text-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg hover:bg-gray-100 transition-all cursor-pointer">
                VIEW ALL COURSES
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
