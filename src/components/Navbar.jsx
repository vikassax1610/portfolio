import { Menu } from "lucide-react";
export default function Navbar() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-stone-900/40 to-transparent pointer-events-none" />
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-[2px]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Simple geometric logo similar to screenshot */}
          <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-black italic tracking-tighter text-xl transform -skew-x-12">
            VS
          </div>
        </div>

        {/* Right Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-white/90">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            Available to Work
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-white/90">
            <span className="text-base">🇮🇳</span> INDIA
          </div>

          <button className="px-6 py-2.5 font-bold text-[10px] tracking-[0.2em] border border-white/20 rounded-full hover:bg-white hover:text-black transition-all uppercase">
            Projects
          </button>

          <button className="p-2 -mr-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button className="px-4 py-2 font-bold text-[10px] tracking-wider border border-white/20 rounded-full uppercase">
            Projects
          </button>
          <button className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>
    </>
  );
}
