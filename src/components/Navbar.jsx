import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { trackEvent } from "../analytics";

export default function Navbar({ setOpenSideBar }) {
  const handleResumeClick = () => {
    trackEvent("resume_download", { method: "navbar" });
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-stone-900/40 to-transparent pointer-events-none" />
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-[2px]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            aria-label="Vikas Saxena – Back to home"
            className="w-10 h-10 bg-white text-black flex items-center justify-center font-black italic tracking-tighter text-xl transform -skew-x-12"
          >
            VS
          </Link>
        </div>

        {/* Right Nav Items */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-white/90">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span>Available to Work</span>
          </div>

          <a
            href="https://drive.google.com/file/d/1MDj24uZxApRR3WulioKXRsXXYvhvuKIK/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Vikas Saxena's resume (opens in new tab)"
            onClick={handleResumeClick}
            className="px-6 py-2.5 font-bold text-[10px] tracking-[0.2em] border border-white/20 rounded-full hover:bg-white hover:text-black transition-all uppercase"
          >
            Resume
          </a>

          <button
            onClick={() => setOpenSideBar(true)}
            aria-label="Open navigation menu"
            aria-expanded="false"
            className="p-2 -mr-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <a
            href="https://drive.google.com/file/d/1MDj24uZxApRR3WulioKXRsXXYvhvuKIK/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Vikas Saxena's resume (opens in new tab)"
            onClick={handleResumeClick}
            className="px-4 py-2 font-bold text-[10px] tracking-wider border border-white/20 rounded-full uppercase"
          >
            Resume
          </a>
          <button
            onClick={() => setOpenSideBar(true)}
            aria-label="Open navigation menu"
            aria-expanded="false"
            className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </header>
    </>
  );
}
