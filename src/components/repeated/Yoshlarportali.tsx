import { ChevronRight } from "lucide-react"



const Yoshlarportali = () => {
  return (
    <div className="w-full lg:w-81.5 shrink-0 flex flex-col gap-4">
      {/* Promo banner */}
      <div className="bg-linear-to-br from-blue-600 to-blue-800 rounded-xl p-4 relative overflow-hidden">
        <div className="absolute top-2 right-2 bg-yellow-400 text-blue-900 text-xs font-bold px-2 py-0.5 rounded">
          Yoshlar portali
        </div>
        <p className="text-white font-bold text-sm leading-snug mt-4">
          Aynan <span className="text-yellow-300">siz</span> uchun qanday
          imtiyozlar borligini bilib oling
        </p>
        <button className="mt-3 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-4 py-1.5 rounded-full transition flex items-center gap-1">
          Batafsil <ChevronRight size={12} />
        </button>
      </div>

    </div>
  )
}

export default Yoshlarportali
