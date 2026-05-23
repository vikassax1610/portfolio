import { motion } from "framer-motion";
import gamix from "../assets/project/gamix.webp";
import fusionSpin from "../assets/project/fusionSpin.webp";
import nmCrm from "../assets/project/nmCrm.webp";
import leadgen from "../assets/project/leadgen.webp";
import {
  GraduationCap,
  Laptop,
  MapPin,
  Target,
  Code2,
  Coffee,
  Brain,
  Rocket,
  ExternalLink,
} from "lucide-react";

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const projects = [
    {
      title: "Gamix Labs",
      desc: "A sleek, responsive portfolio showcasing my projects with smooth animations and modern design principles.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "https://gamixlabs.com/",
      image: gamix,
    },
    {
      title: "Nidhimani Dashboard",
      desc: "An interactive dashboard for monitoring key metrics, visualizing data, and managing tasks in real time.",
      tech: ["React.js", "TailwindCSS", "Framer Motion", "TipTap Editor"],
      link: "https://tourmaline-meerkat-094164.netlify.app/",
      image: nmCrm,
    },
    {
      title: "Fusion Spin",
      desc: "Comprehensive dashboard with analytics, inventory management, and real-time sales tracking.",
      tech: ["Cocos", "TypeScript"],
      link: "https://fusionspin.com/",
      image: fusionSpin,
    },
    {
      title: "Lead Generator AI",
      desc: "Feature-rich task management app with offline support and cloud synchronization.",
      tech: ["React js", "Google Gemini"],
      link: "https://lead-generator-flax.vercel.app/",
      image: leadgen,
    },
  ];

  const funFacts = [
    {
      icon: <Brain className="w-6 h-6 text-[var(--accent)]" />,
      title: "Code Philosophy",
      desc: "Clean code is not written by following a set of rules. Clean code is written by programmers who care.",
    },
    {
      icon: <Coffee className="w-6 h-6 text-[var(--accent)]" />,
      title: "Daily Ritual",
      desc: "Coffee + Code + Creativity = Perfect Day",
    },
    {
      icon: <Target className="w-6 h-6 text-[var(--accent)]" />,
      title: "Current Focus",
      desc: "Building scalable web applications with modern JavaScript frameworks and cloud technologies.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-[var(--accent)]" />,
      title: "Goals for 2025",
      desc: "Master microservices architecture and contribute to open-source projects.",
    },
  ];

  const getTechColorClass = (tech) => {
    const t = tech.toLowerCase();
    if (t.includes("react"))
      return "group-hover:text-[#61DAFB] group-hover:bg-[#61DAFB]/10 group-hover:border-[#61DAFB]/30";
    if (t.includes("typescript"))
      return "group-hover:text-[#3178C6] group-hover:bg-[#3178C6]/10 group-hover:border-[#3178C6]/30";
    if (t.includes("tailwind"))
      return "group-hover:text-[#38B2AC] group-hover:bg-[#38B2AC]/10 group-hover:border-[#38B2AC]/30";
    if (t.includes("framer"))
      return "group-hover:text-[#E902B6] group-hover:bg-[#E902B6]/10 group-hover:border-[#E902B6]/30";
    if (t.includes("cocos"))
      return "group-hover:text-[#42A5F5] group-hover:bg-[#42A5F5]/10 group-hover:border-[#42A5F5]/30";
    if (t.includes("gemini"))
      return "group-hover:text-[#8E24AA] group-hover:bg-[#8E24AA]/10 group-hover:border-[#8E24AA]/30";
    if (t.includes("tiptap"))
      return "group-hover:text-[#FF6600] group-hover:bg-[#FF6600]/10 group-hover:border-[#FF6600]/30";
    return "group-hover:text-[var(--accent)] group-hover:bg-[var(--accent)]/10 group-hover:border-[var(--accent)]/30";
  };

  return (
    <section className="relative min-h-screen bg-[#050505] text-white py-24 md:py-32 overflow-hidden selection:bg-amber-500/30">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--accent)]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')] opacity-[0.03] mix-blend-overlay pointer-events-none filter grayscale" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-24"
        >
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 w-max backdrop-blur-sm">
                <span className="animate-pulse w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-xs font-semibold tracking-wider text-white/80 uppercase">
                  Creative Frontend Engineer
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
                Hello, I'm <br />
                <span className="text-[var(--accent)] relative inline-block">
                  VIKAS SAXENA
                  <div className="absolute bottom-2 left-0 w-full h-3 bg-[var(--accent)]/20 -z-10 skew-x-12" />
                </span>
              </h2>

              <p className="text-sm md:text-lg text-white/60 font-light max-w-2xl leading-relaxed">
                Passionate Full Stack Developer creating modern web applications
                with React and MERN technologies. Along with building responsive
                digital experiences, I’m exploring AI integration and
                intelligent agents to develop smarter applications with
                automation, AI workflows, and user-focused solutions.
              </p>

              <div className="flex flex-wrap gap-4 mt-4">
                {[
                  "Full Stack Developer",
                  "UI/UX Designer",
                  "Problem Solver",
                ].map((badge, index) => (
                  <div
                    key={index}
                    className="px-5 py-2.5 rounded-full border border-white/20 bg-transparent text-sm font-medium tracking-wide text-white/90 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 relative"
            >
              <div className="relative p-8 rounded-3xl border border-white/10 bg-[#111] shadow-2xl overflow-hidden backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <div className="p-2 bg-[var(--accent)]/20 rounded-lg text-[var(--accent)]">
                    <Code2 className="w-6 h-6" />
                  </div>
                  About Me
                </h3>

                <ul className="space-y-6">
                  {[
                    {
                      icon: <GraduationCap className="w-5 h-5" />,
                      title: "Computer Science Student",
                      desc: "Building Tomorrow's Tech Today",
                    },
                    {
                      icon: <Laptop className="w-5 h-5" />,
                      title: "Full-Stack Developer",
                      desc: "Passionate About Clean Code",
                    },
                    {
                      icon: <MapPin className="w-5 h-5" />,
                      title: "Location",
                      desc: "Noida, India",
                    },
                    {
                      icon: <Target className="w-5 h-5" />,
                      title: "Mission",
                      desc: "Creating Digital Solutions That Matter",
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="p-2.5 rounded-full bg-white/5 group-hover:bg-[var(--accent)]/20 text-white/60 group-hover:text-[var(--accent)] transition-colors border border-white/10">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white/90">
                          {item.title}
                        </h4>
                        <p className="text-sm text-white/50">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Featured Projects Section */}
          <motion.div variants={itemVariants} className="flex flex-col gap-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
                  Featured{" "}
                  <span className="text-[var(--accent)]">Projects</span>
                </h3>
                <p className="text-white/50 text-lg">
                  A curated selection of my recent works.
                </p>
              </div>
              <button className="px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all text-sm font-bold uppercase tracking-wider w-max">
                View All Projects
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl bg-[#111] border border-white/5 hover:border-white/20 transition-all overflow-hidden h-full flex flex-col"
                >
                  {/* Subtle Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/0 via-[var(--accent)]/0 to-[var(--accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Preview Image */}
                  <div className="w-full h-48 sm:h-80 overflow-hidden relative border-b border-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between relative z-10">
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between items-start">
                        <h4 className="text-2xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
                          {project.title}
                        </h4>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-full bg-white/5 hover:bg-white/20 text-white/70 hover:text-white transition-all scale-90 group-hover:scale-100"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed min-h-[60px]">
                        {project.desc}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-8">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1.5 text-xs font-medium text-white/60 bg-white/5 rounded-md border border-white/10 transition-colors duration-300 ${getTechColorClass(tech)}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Fun Facts Section */}
          <motion.div variants={itemVariants} className="flex flex-col gap-12">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-center">
              Fun <span className="text-[var(--accent)]">Facts</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {funFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-[var(--accent)]/30 transition-colors flex flex-col items-center text-center gap-4 group"
                >
                  <div className="p-4 rounded-full bg-white/5 group-hover:scale-110 transition-transform duration-300">
                    {fact.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white/90">
                    {fact.title}
                  </h4>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {fact.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
