import { motion } from "framer-motion";
import myImg from "/myImg.png";
import {
  Menu,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Monitor,
  Database,
  Code2,
  Cpu,
  Globe,
  Layers,
  Server,
} from "lucide-react";
import SkillCarousel from "./SkillCarousel";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#050505] text-white overflow-hidden font-sans selection:bg-amber-500/30">
      {/* Background Subtle Gradient */}
      {/* --- Header / Navbar --- */}

      {/* --- Main Content --- */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full lg:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 w-full h-full relative lg:items-center">
          {/* LEFT: Big Text */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 relative z-20 pointer-events-none select-none h-full">
            <div className="relative -rotate-3 scale-110 md:scale-125 origin-left transform lg:translate-x-10 translate-y-[-20px] lg:translate-y-0">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="hero-title text-[5rem] font-bold sm:text-[7rem] md:text-[8rem] lg:text-[7.5rem] xl:text-[8rem] leading-[0.7] tracking-tighter"
              >
                <span className="block text-[var(--accent)] drop-shadow-lg">
                  BEYOND
                </span>
                <span className="block text-white pl-[0.5em] lg:pl-[0.8em]">
                  VISUALS
                </span>
                <span className="block text-[var(--accent)]">BUILT WITH</span>
                <span className="block text-white pl-[1em] lg:pl-[1.5em] opacity-90">
                  VISION
                </span>
              </motion.div>
            </div>
          </div>

          {/* CENTER: Image with Slanted Background */}
          <div className="lg:col-span-4 relative order-1 lg:order-2 flex items-end justify-center h-[50vh] lg:h-[80vh] min-h-[400px]">
            {/* The Slanted Background Card */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[75%] bg-[#1a1a1a] -rotate-3 z-0 overflow-hidden border border-white/5 shadow-2xl"
              style={{
                background: "linear-gradient(45deg, #111 0%, #222 100%)",
              }}
            >
              {/* Background Texture inside the card */}
              <div
                className="absolute inset-0 opacity-40 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')", // Street texture
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "grayscale(100%)",
                }}
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* The Person */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10 w-full h-full flex items-end justify-center pb-0"
            >
              {/* Glow behind head */}
              <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-white/5 blur-[80px] rounded-full pointer-events-none" />

              <img
                src={myImg}
                alt="Developer"
                className="h-[105%] max-h-[800px] object-cover drop-shadow-2xl grayscale contrast-125 brightness-90 mask-image-linear-gradient"
                style={{
                  filter:
                    "drop-shadow(0 20px 50px rgba(0,0,0,0.8)) grayscale(100%)",
                  maskImage:
                    "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
              />
            </motion.div>
          </div>

          {/* RIGHT: Text & CTA */}
          <div className="lg:col-span-3 body flex flex-col justify-end mt-64 pb-12 lg:pb-32 order-3 relative z-20 px-4 h-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="ml-auto text-right w-full flex flex-col items-end"
            >
              <div className="mb-8 max-w-xs">
                <h3 className="text-xl lg:text-2xl font-bold leading-tight mb-2 text-white/95">
                  We build brands, websites, and digital experiences
                </h3>
                <p className="text-white/40 text-lg font-medium leading-tight">
                  with intention, clarity and care.
                </p>
              </div>

              <div>
                <button className="group hover:bg-[var(--accent)] hover:text-black relative px-8 py-3.5 bg-transparent border border-[#b8860b]/40 rounded-full transition-all duration-300 overflow-hidden">
                  <div className="" />
                  <span className="relative flex items-center gap-3 text-[var(--accent)] font-bold tracking-[0.15em] text-xs uppercase">
                    Start a Project
                    <ArrowRight className="w-4 h-4 " />
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM LEFT: Tech Stack */}
        <div className="absolute lg:bottom-4 bottom-60 left-8 lg:left-12 flex items-center gap-6 z-20">
          <span className="text-[12px] font-bold text-white/30 uppercase tracking-[0.2em] hidden md:block">
            We Build By:
          </span>
          <div className="lg:w-1/3">
            <SkillCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom Icons
const AtomIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
    <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
  </svg>
);

const TechIcon = ({ icon: Icon, color }) => (
  <div className="group relative p-2.5 bg-zinc-900 border border-white/10 rounded-md transition-all cursor-pointer hover:border-white/30 hover:bg-zinc-800">
    <Icon
      className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity"
      style={{ color: "white" }}
    />
    {/* Color Overlay on Hover */}
    <div
      className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 rounded-md transition-opacity"
      style={{ color }}
    />
    <style jsx>{`
      .group:hover svg {
        color: ${color} !important;
      }
    `}</style>
  </div>
);

export default HeroSection;
