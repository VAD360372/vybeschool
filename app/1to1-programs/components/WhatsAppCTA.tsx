"use client"


import Image from "next/image"
import Link from "next/link"

export function WhatsAppCTA() {
  return (
    <div className="text-center space-y-6">
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight">
        Ready to Start Your AI Journey?
      </h3>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
        Connect with us on WhatsApp or Mail us to discuss your learning goals and get personalized guidance.
      </p>
      <div className="pt-4 flex flex-col md:flex-row gap-4 justify-center items-center">
        <Link
          href="https://wa.me/916301962520"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="inline-flex items-center justify-center px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] hover:-translate-y-1 transition-all rounded-lg"
          style={{ backgroundColor: "#25D366", minHeight: 40 }}
        >
          <Image src="/footer_logos/whatsapp.png" alt="WhatsApp" width={28} height={28} />
        </Link>
        <a
          href="#"
          aria-label="Gmail"
          className="inline-flex items-center justify-center px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] hover:-translate-y-1 transition-all rounded-lg"
          style={{ backgroundColor: "#fff", minHeight: 40 }}
        >
          <Image src="/footer_logos/gmail.png" alt="Gmail" width={28} height={28} />
        </a>
      </div>
    </div>
  )
}

