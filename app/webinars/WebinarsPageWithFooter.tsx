import { Hero1to1 } from "../1to1-programs/components/Hero1to1"
import { ThreeStepFlow } from "../1to1-programs/components/ThreeStepFlow"
import { TrackOneSuperStack } from "../1to1-programs/components/TrackOneSuperStack"
import { TrackTwoTools } from "../1to1-programs/components/TrackTwoTools"
import { WhatsAppCTA } from "../1to1-programs/components/WhatsAppCTA"


export default function WebinarsPage() {
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
      <section id="program-1" className="py-16 md:py-24 lg:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <TrackOneSuperStack />
        </div>
      </section>

      {/* Track 2: Learn What You Want */}
      <section id="program-2" className="py-16 md:py-24 lg:py-28 bg-white">
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

      {/* Webinar-specific Footer removed as requested */}
    </main>
  )
}
