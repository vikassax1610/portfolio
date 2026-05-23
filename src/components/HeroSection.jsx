import { motion } from "framer-motion";
import myImg from "/myImg.png";
import { ArrowRight } from "lucide-react";
import SkillCarousel from "./SkillCarousel";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#050505] text-white overflow-hidden font-sans selection:bg-amber-500/30">
      <div className="relative z-10 flex items-center justify-center min-h-screen max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 pt-20 lg:pt-0 py-8 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-center gap-y-10 lg:mt-28">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-5 mt-4 order-1 mx-0 md:mx-16 lg:mx-0 lg:order-1 relative z-20 select-none">
            <div className="relative lg:-rotate-3 scale-100 lg:scale-110 origin-left">
              <motion.div
                initial={{ opacity: 0, x: -120 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-title font-bold leading-[0.75] tracking-tight"
              >
                <span className="block text-[var(--accent)] text-[8rem] sm:text-[8rem] md:text-[8rem] lg:text-[8rem] xl:text-[10rem]">
                  BEYOND
                </span>

                <span className="block text-white pl-[0.3em] sm:pl-[0.5em] md:pl-[2rem] text-[8rem] sm:text-[8rem] md:text-[8rem] lg:text-[8rem] xl:text-[10rem]">
                  VISUALS
                </span>

                <span className="block text-[var(--accent)] text-[6rem] sm:text-[6rem] md:text-[8rem] lg:text-[8rem] xl:text-[10rem]">
                  BUILT WITH
                </span>

                <span className="block text-white opacity-90 pl-[0.6em] sm:pl-[1em] md:pl-[2em] text-[8rem] sm:text-[8rem] md:text-[8rem] lg:text-[8rem] xl:text-[10rem]">
                  VISION
                </span>
              </motion.div>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="lg:col-span-4 order-1 lg:order-2 relative flex justify-center items-end h-[400px] md:h-[550px] lg:h-[80vh]">
            {/* Background card */}
            <div
              className="absolute w-[150%] h-[90%] bg-[#1a1a1a] -rotate-3 border border-white/5 shadow-2xl overflow-hidden pointer-events-none"
              style={{
                background: "linear-gradient(45deg,#111 0%,#222 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "grayscale(100%)",
                }}
              />

              <div className="absolute inset-0 bg-black/60 pointer-events-none" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              className="relative z-20 flex justify-center items-end h-full"
            >
              {/* Glow */}
              <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[250px] h-[250px] lg:w-[420px] lg:h-[500px] rounded-full bg-white/5 blur-[100px]" />

              <img
                src={myImg}
                alt="Developer"
                loading="eager"
                className="lg:h-[700px] md:h-[600px] h-[400px] object-contain relative z-10"
                style={{
                  filter:
                    "drop-shadow(0 20px 50px rgba(0,0,0,.8)) grayscale(100%)",
                  maskImage: "linear-gradient(to bottom,black 85%,transparent)",
                }}
              />
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-3 order-3 relative lg:mt-[18rem] z-30 flex flex-col items-center lg:items-end text-center lg:text-right">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
            >
              <div className="mb-6 py-2 lg:mb-10 w-full lg:max-w-sm space-y-5">
                <div>
                  <h3 className="text-2xl hero-title md:text-5xl lg:text-3xl font-bold leading-relaxed tracking-tight text-white">
                    I build brands, websites & digital experiences
                  </h3>

                  <p className="text-white/40 text-sans text-base md:text-xl lg:text-lg mt-3 leading-relaxed">
                    with intention, clarity and care.
                  </p>
                </div>

                <div className="space-y-3 text-center lg:text-right">
                  <p className="text-white/70 text-sm md:text-base lg:text-sm leading-relaxed">
                    transforming ideas into engaging digital experiences through
                    modern design, AI integration and scalable web solutions.
                  </p>

                  <div className="flex justify-center lg:justify-end gap-16 lg:gap-6 pt-2">
                    <div>
                      <h4 className="text-[var(--accent)] text-2xl font-bold">
                        10+
                      </h4>
                      <span className="text-white/40 text-xs uppercase tracking-wider">
                        Projects
                      </span>
                    </div>

                    <div>
                      <h4 className="text-[var(--accent)] text-2xl font-bold">
                        100%
                      </h4>
                      <span className="text-white/40 text-xs uppercase tracking-wider">
                        Custom
                      </span>
                    </div>

                    <div>
                      <h4 className="text-[var(--accent)] text-2xl font-bold">
                        AI
                      </h4>
                      <span className="text-white/40 text-xs uppercase tracking-wider">
                        Powered
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="
  inline-flex
  items-center
  justify-center
  group
  relative
  z-50
  px-8
  py-4
  border
  border-[#b8860b]/40
  rounded-full
  overflow-hidden
  transition-all
  duration-300
  hover:bg-[var(--accent)]
  no-underline
  "
              >
                <span
                  className="
    flex
    items-center
    gap-3
    text-xs
    font-bold
    uppercase
    tracking-[0.15em]
    text-[var(--accent)]
    transition-colors
    duration-300
    group-hover:text-white
    "
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom skill section */}
        <div
          className="
                  relative
                  mt-10
                  lg:absolute
                  lg:bottom-5
                  lg:left-12
                  lg:translate-x-0
                  left-1/2
                  -translate-x-1/2
                  flex
                  flex-col
                  lg:flex-row
                  items-center
                  gap-4
                  z-20
                  w-full
                  justify-center
                  lg:justify-start
                  hidden lg:block
                  "
        >
          <span className="text-[12px] font-bold text-white/30 uppercase tracking-[0.2em]">
            We Build By:
          </span>

          <div className="w-[250px] sm:w-[320px] lg:w-[650px]">
            <SkillCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
