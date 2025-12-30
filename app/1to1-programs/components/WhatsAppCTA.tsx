"use client"

import Link from "next/link"

export function WhatsAppCTA() {
  return (
    <div className="text-center space-y-6">
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight">
        Ready to Start Your AI Journey?
      </h3>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
        Connect with us on WhatsApp to discuss your learning goals and get personalized guidance.
      </p>
      <div className="pt-4">
        <Link
          href="https://wa.me/916301962520"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-5 text-lg md:text-xl font-black border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:-translate-y-1 transition-all rounded-lg"
          style={{ backgroundColor: "#25D366", color: "#000" }}
        >
          Connect With Us on WhatsApp →
        </Link>
      </div>
    </div>
  )
}

