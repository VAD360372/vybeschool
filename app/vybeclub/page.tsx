"use client"

import { useState } from "react"
import Link from "next/link"
import { Users, Lightbulb, Briefcase, Target, ChevronDown, Rocket, Heart, GraduationCap, Sparkles, Award, Zap, UsersRound, CheckCircle, Bot, TrendingUp, Globe, UserCheck, Crown, Star } from "lucide-react"

export default function VybeClubPage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index)
  }

  const keyHighlights = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "AI & Future-Ready Skills",
      description: "Learn cutting-edge AI tools and technologies that matter in 2026",
      color: "#4285F4",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Internship & Startup Exposure",
      description: "Get real work experience and startup opportunities while in college",
      color: "#FF4757",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Student-Led Model",
      description: "Built by students, for students — with college-friendly operations",
      color: "#2ECC71",
    },
  ]

  const whatHappens = [
    "AI workshops and practical tool training",
    "Project-based learning on real-world problems",
    "Content, design, technology, and operations roles",
    "Internship and gig-based opportunities",
    "Startup and entrepreneurship exposure",
    "Guest sessions with founders, mentors, and professionals",
    "Peer-to-peer learning and student-led teaching",
  ]

  const structure = [
    {
      title: "VybeHeads",
      subtitle: "Core Leadership",
      description: "Responsible for strategy, coordination, and representation",
      color: "#FFD700",
      icon: <Crown className="w-8 h-8" />,
    },
    {
      title: "VybeMates",
      subtitle: "Execution Team",
      description: "Handle events, content, technology, and outreach",
      color: "#4285F4",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "VybeMembers",
      subtitle: "Active Contributors",
      description: "Active learners and contributors within the club",
      color: "#FF4757",
      icon: <Rocket className="w-8 h-8" />,
    },
    {
      title: "Community Layer",
      subtitle: "All Students",
      description: "Open sessions and events accessible to all students in the college",
      color: "#2ECC71",
      icon: <UsersRound className="w-8 h-8" />,
    },
  ]

  const whyDifferent = [
    {
      title: "Built by Recent Graduates",
      description: "We understand today's student challenges",
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      title: "Execution Over Certificates",
      description: "Focus on skill-building and real work",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      title: "AI & Future-Ready",
      description: "Strong emphasis on AI and emerging technologies",
      icon: <Bot className="w-8 h-8" />,
    },
    {
      title: "Real Exposure",
      description: "No exaggerated promises, just real opportunities",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: "Made for India",
      description: "Designed specifically for Indian colleges and students",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: "Founder-Driven Mentorship",
      description: "Direct guidance from VAD and MB",
      icon: <UserCheck className="w-8 h-8" />,
    },
  ]

  const steps = [
    {
      number: 1,
      title: "Submit Application",
      description: "Interested students apply through our form",
      color: "#4285F4",
    },
    {
      number: 2,
      title: "Team Review",
      description: "VybeSchool team reviews and connects with student leads",
      color: "#FF4757",
    },
    {
      number: 3,
      title: "College Discussion",
      description: "Connect with college representatives or faculty if needed",
      color: "#9B59B6",
    },
    {
      number: 4,
      title: "Selection & Onboarding",
      description: "Core student team is selected and onboarded",
      color: "#FF8C00",
    },
    {
      number: 5,
      title: "Launch",
      description: "Open campus events and member programs begin",
      color: "#2ECC71",
    },
  ]

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FFD700" }}>
      {/* Hero Section */}
      <section className="px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block mb-6">
              <span className="text-4xl md:text-6xl font-black text-black">VYBE</span>
              <span
                className="ml-2 px-3 py-1 text-4xl md:text-6xl font-black border-4 border-black shadow-[6px_6px_0_0_#000] rounded-lg"
                style={{ backgroundColor: "#4285F4", color: "white" }}
              >
                CLUB
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-black text-black mb-4">
              A Student-Led Innovation & AI Community Inside Colleges
            </h1>
            <p className="text-xl md:text-2xl font-bold text-black mb-8 max-w-3xl mx-auto">
              Learn real skills. Build real projects. Get mentorship, internships, and startup exposure — while you're
              still in college.
            </p>

            {/* CTA Button */}
            <Link
              href="https://forms.gle/ya7kdTVzzqTfwXRk9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-xl font-black border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] transition-all rounded-xl cursor-pointer"
              style={{ backgroundColor: "#FF4757", color: "white" }}
            >
              APPLY TO BRING VYBECLUB TO YOUR COLLEGE →
            </Link>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="px-4 md:px-6 py-12 md:py-16" style={{ backgroundColor: "white" }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-5xl font-black px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] inline-block mb-12 rounded-lg"
            style={{ backgroundColor: "#000", color: "white" }}
          >
            KEY HIGHLIGHTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyHighlights.map((highlight, index) => (
              <div
                key={index}
                className="p-8 border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] transition-all rounded-xl"
                style={{ backgroundColor: highlight.color }}
              >
                <div className="text-white mb-4">{highlight.icon}</div>
                <h3 className="text-2xl font-black text-white mb-3">{highlight.title}</h3>
                <p className="text-lg font-bold text-white">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is VybeClub */}
      <section className="px-4 md:px-6 py-12 md:py-16" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-black mb-8 text-center">WHAT EXACTLY IS VYBECLUB?</h2>

          <div className="p-8 md:p-12 border-4 border-black shadow-[8px_8px_0_0_#000] rounded-xl bg-white mb-8">
            <p className="text-xl md:text-2xl font-bold text-black mb-6 leading-relaxed">
              VybeClub is an <span className="text-blue-600">on-campus student community</span> powered by VybeSchool.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 border-2 border-black">
                  <span className="text-white font-black">✓</span>
                </div>
                <p className="text-lg font-bold text-black">
                  Learn AI and future skills through practical application
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 border-2 border-black">
                  <span className="text-white font-black">✓</span>
                </div>
                <p className="text-lg font-bold text-black">Work on real-world projects and gig opportunities</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 border-2 border-black">
                  <span className="text-white font-black">✓</span>
                </div>
                <p className="text-lg font-bold text-black">
                  Explore startups, freelancing, and early career pathways
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 border-2 border-black">
                  <span className="text-white font-black">✓</span>
                </div>
                <p className="text-lg font-bold text-black">
                  Connect with mentors, founders, and industry professionals
                </p>
              </div>
            </div>

            <div
              className="p-6 border-4 border-black rounded-lg"
              style={{ backgroundColor: "#FFD700" }}
            >
              <p className="text-lg font-black text-black text-center">
                VybeClub is NOT a coaching institute and NOT a placement agency. <br />
                It is a learning and opportunity ecosystem, built by students, for students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="px-4 md:px-6 py-12 md:py-16" style={{ backgroundColor: "white" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-black mb-8 text-center">WHO IS VYBECLUB FOR?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="p-8 border-4 border-black shadow-[8px_8px_0_0_#000] rounded-xl"
              style={{ backgroundColor: "#2ECC71" }}
            >
              <div className="text-white mb-4">
                <UsersRound className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">ALL STUDENTS</h3>
              <p className="text-lg font-bold text-white">
                Workshops, events, talks, hackathons, and festivals are accessible to everyone on campus.
              </p>
            </div>

            <div
              className="p-8 border-4 border-black shadow-[8px_8px_0_0_#000] rounded-xl"
              style={{ backgroundColor: "#FF4757" }}
            >
              <div className="text-white mb-4">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">OFFICIAL MEMBERS</h3>
              <p className="text-lg font-bold text-white">
                Leadership roles, core projects, internships, and internal opportunities are reserved for selected
                members through a merit-based process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What happens inside */}
      <section className="px-4 md:px-6 py-12 md:py-16" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-5xl font-black px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] inline-block mb-12 rounded-lg"
            style={{ backgroundColor: "#9B59B6", color: "white" }}
          >
            WHAT HAPPENS INSIDE A VYBECLUB?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatHappens.map((item, index) => (
              <div
                key={index}
                className="p-6 border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all rounded-lg bg-white"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-black font-black text-white"
                    style={{ backgroundColor: "#FF4757" }}
                  >
                    {index + 1}
                  </div>
                  <p className="text-lg font-bold text-black leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VybeClub Structure */}
      <section className="px-4 md:px-6 py-12 md:py-16" style={{ backgroundColor: "white" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-black mb-4 text-center">VYBECLUB STRUCTURE</h2>
          <p className="text-xl font-bold text-black mb-12 text-center">
            Each VybeClub is student-led and organized for quality and sustainability
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {structure.map((role, index) => (
              <div
                key={index}
                className="p-6 border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] transition-all rounded-xl"
                style={{ backgroundColor: role.color }}
              >
                <div className="flex justify-center mb-4" style={{ color: role.color === "#FFD700" ? "#000" : "#fff" }}>
                  {role.icon}
                </div>
                <h3 className="text-xl font-black text-center mb-2" style={{ color: role.color === "#FFD700" ? "#000" : "#fff" }}>
                  {role.title}
                </h3>
                <p className="text-sm font-bold text-center mb-3" style={{ color: role.color === "#FFD700" ? "#000" : "#fff" }}>
                  {role.subtitle}
                </p>
                <p className="text-base font-bold text-center" style={{ color: role.color === "#FFD700" ? "#000" : "#fff" }}>
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="px-4 md:px-6 py-12 md:py-16" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-5xl font-black px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] inline-block mb-12 rounded-lg"
            style={{ backgroundColor: "#FF8C00", color: "white" }}
          >
            WHY VYBECLUB IS DIFFERENT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyDifferent.map((item, index) => (
              <div
                key={index}
                className="p-6 border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] transition-all rounded-lg bg-white"
              >
                <div className="text-blue-600 mb-3">{item.icon}</div>
                <h3 className="text-xl font-black text-black mb-2">{item.title}</h3>
                <p className="text-base font-bold text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Colleges */}
      <section className="px-4 md:px-6 py-12 md:py-16" style={{ backgroundColor: "white" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-black mb-8 text-center">
            FOR COLLEGES & INSTITUTIONS
          </h2>

          <div className="p-8 md:p-12 border-4 border-black shadow-[8px_8px_0_0_#000] rounded-xl" style={{ backgroundColor: "#4285F4" }}>
            <p className="text-xl font-bold text-white mb-6 leading-relaxed">
              VybeClub operates in collaboration with colleges and follows institutional guidelines.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 border-2 border-black">
                  <span className="text-blue-600 font-black">✓</span>
                </div>
                <p className="text-lg font-bold text-white">Encourages practical skill development</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 border-2 border-black">
                  <span className="text-blue-600 font-black">✓</span>
                </div>
                <p className="text-lg font-bold text-white">Increases student engagement and innovation culture</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 border-2 border-black">
                  <span className="text-blue-600 font-black">✓</span>
                </div>
                <p className="text-lg font-bold text-white">Supports entrepreneurship and technology initiatives</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 border-2 border-black">
                  <span className="text-blue-600 font-black">✓</span>
                </div>
                <p className="text-lg font-bold text-white">Operates transparently with faculty coordination</p>
              </div>
            </div>

            <div className="p-6 border-4 border-black rounded-lg bg-white">
              <p className="text-lg font-black text-black text-center">
                VybeClub does not interfere with academic schedules and maintains a safe, inclusive, and
                student-friendly environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Bring */}
      <section className="px-4 md:px-6 py-12 md:py-16" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-black mb-4 text-center">
            HOW TO BRING VYBECLUB TO YOUR COLLEGE
          </h2>
          <p className="text-xl font-bold text-black mb-12 text-center">Follow these 5 simple steps</p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div
                  className="p-6 border-4 border-black shadow-[8px_8px_0_0_#000] rounded-xl h-full flex flex-col"
                  style={{ backgroundColor: step.color }}
                >
                  <div className="text-4xl font-black text-white mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-black text-white mb-2">{step.title}</h3>
                  <p className="text-sm font-bold text-white">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <div className="text-3xl font-black text-black">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center p-8 md:p-12 border-4 border-black shadow-[8px_8px_0_0_#000] rounded-xl bg-white">
            <h3 className="text-2xl md:text-4xl font-black text-black mb-4">
              INTERESTED IN STARTING VYBECLUB AT YOUR COLLEGE?
            </h3>
            <p className="text-lg md:text-xl font-bold text-black mb-8">
              We are looking for motivated students who want to build, learn, and lead — not just attend events.
            </p>
            <Link
              href="https://forms.gle/ya7kdTVzzqTfwXRk9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-xl font-black border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] transition-all rounded-xl cursor-pointer"
              style={{ backgroundColor: "#FF4757", color: "white" }}
            >
              APPLY FOR VYBECLUB →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-6 py-12 md:py-16" style={{ backgroundColor: "#000" }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-2xl md:text-3xl font-black" style={{ color: "#FFD700" }}>
              VYBE
            </span>
            <span
              className="ml-1 px-3 py-1 text-2xl md:text-3xl font-black border-4 border-black shadow-[4px_4px_0_0_#000] rounded-lg"
              style={{ backgroundColor: "#4285F4", color: "white" }}
            >
              CLUB
            </span>
          </div>
          <p className="text-lg font-bold mb-8" style={{ color: "#FFD700" }}>
            Building the Future, One Campus at a Time
          </p>
          <Link
            href="https://forms.gle/ya7kdTVzzqTfwXRk9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-lg font-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all rounded-lg cursor-pointer"
            style={{ backgroundColor: "#FFD700", color: "#000" }}
          >
            APPLY NOW
          </Link>
        </div>
      </footer>
    </main>
  )
}
