"use client"

import { Hero1to1 } from "./components/Hero1to1"
import { ThreeStepFlow } from "./components/ThreeStepFlow"
import { TrackOneSuperStack } from "./components/TrackOneSuperStack"
import { TrackTwoTools } from "./components/TrackTwoTools"
import { WhatsAppCTA } from "./components/WhatsAppCTA"

export default function OneToOneProgramsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <Hero1to1 />
        </div>
      </section>

      {/* 3-Step Animated Flow */}
      <section className="py-16 md:py-24 lg:py-28 bg-white border-y-4 border-black">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <ThreeStepFlow />
        </div>
      </section>

      {/* Track 1: AI SuperStack */}
      <section className="py-16 md:py-24 lg:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <TrackOneSuperStack />
        </div>
      </section>

      {/* Track 2: Learn What You Want */}
      <section className="py-16 md:py-24 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <TrackTwoTools />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 lg:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <WhatsAppCTA />
        </div>
      </section>
    </main>
  )
}

