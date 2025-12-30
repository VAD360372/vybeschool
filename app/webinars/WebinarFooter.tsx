import Image from "next/image"

export default function WebinarFooter() {
  return (
    <footer className="px-4 md:px-6 py-12 md:py-16" style={{ backgroundColor: "#000" }}>
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center gap-6">
        <div className="flex justify-center">
          <a
            href="https://wa.me/916301962520"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp and Gmail"
            className="flex items-center justify-center gap-6 px-10 py-5 border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:-translate-y-1 transition-all rounded-lg"
            style={{ backgroundColor: "#25D366", minHeight: 64 }}
          >
            <Image src="/footer_logos/whatsapp.png" alt="WhatsApp" width={40} height={40} />
            <Image src="/footer_logos/gmail.png" alt="Gmail" width={40} height={40} />
          </a>
        </div>
        <p className="text-sm md:text-base font-bold text-gray-400 mt-4 text-center">
          © 2024 VybeSchool. All rights reserved. Empowering India with AI Education.
        </p>
      </div>
    </footer>
  )
}
