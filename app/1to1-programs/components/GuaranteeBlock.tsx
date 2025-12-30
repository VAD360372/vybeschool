"use client"

export function GuaranteeBlock() {
  return (
    <div className="border-4 border-black shadow-[10px_10px_0_0_#000] rounded-2xl bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 p-8 md:p-12 hover:shadow-[12px_12px_0_0_#000] transition-all">
      <div className="text-center space-y-5">
        <div className="inline-block px-4 py-2 bg-black text-white text-xs md:text-sm font-black uppercase tracking-wider rounded-lg mb-2">
          Guarantee
        </div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-black leading-tight">
          No Theory. No Fluff. Just Hands-On AI.
        </h3>
        <p className="text-base md:text-lg lg:text-xl font-bold text-gray-800 max-w-3xl mx-auto leading-relaxed">
          If you don't launch, you don't pay — we refund 100%.
        </p>
      </div>
    </div>
  )
}

