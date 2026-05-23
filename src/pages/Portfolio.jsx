import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import projects from "../data/projectData.js";

const tabs = ["All", "Web", "Full-Stack", "Game"];

const getTechColor = (tech) => {
  const t = tech.toLowerCase();
  if (t.includes("react"))
    return { text: "#61DAFB", bg: "#61DAFB15", border: "#61DAFB30" };
  if (t.includes("typescript"))
    return { text: "#3178C6", bg: "#3178C615", border: "#3178C630" };
  if (t.includes("framer"))
    return { text: "#E902B6", bg: "#E902B615", border: "#E902B630" };
  if (t.includes("cocos"))
    return { text: "#42A5F5", bg: "#42A5F515", border: "#42A5F530" };
  if (t.includes("gemini"))
    return { text: "#9B72CF", bg: "#9B72CF15", border: "#9B72CF30" };
  if (t.includes("node") || t.includes("express"))
    return { text: "#68D391", bg: "#68D39115", border: "#68D39130" };
  if (t.includes("mongo"))
    return { text: "#4DB33D", bg: "#4DB33D15", border: "#4DB33D30" };
  if (t.includes("tailwind") || t.includes("tiptap"))
    return { text: "#38B2AC", bg: "#38B2AC15", border: "#38B2AC30" };
  return {
    text: "var(--accent)",
    bg: "rgba(var(--accent-rgb), 0.08)",
    border: "rgba(var(--accent-rgb), 0.19)",
  };
};

const ProjectCard = ({ project, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
    className="group relative rounded-2xl bg-[#0d0d0d] border border-white/6 hover:border-white/15 overflow-hidden flex flex-col transition-all duration-400"
    style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.4)" }}
  >
    {project.featured && (
      <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-[var(--accent)]/15 border border-[var(--accent)]/30 text-[10px] font-bold uppercase tracking-widest text-[var(--accent)]">
        Featured
      </div>
    )}
    <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-black/50 border border-white/10 text-[10px] font-bold text-white/40 backdrop-blur-sm">
      {project.year}
    </div>

    <div className="relative w-full h-52 overflow-hidden border-b border-white/6">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent)] text-black text-xs font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
        >
          View Live <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>

    <div className="p-7 flex flex-col flex-1 gap-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-bold text-white/90 group-hover:text-white transition-colors leading-tight">
          {project.title}
        </h3>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full bg-white/5 hover:bg-[var(--accent)]/20 text-white/50 hover:text-[var(--accent)] transition-all shrink-0"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      <p className="text-white/50 text-sm leading-relaxed flex-1">
        {project.desc}
      </p>
      <div className="flex flex-wrap gap-2 pt-2">
        {project.tech.map((t, i) => {
          const c = getTechColor(t);
          return (
            <span
              key={i}
              className="px-3 py-1 text-[11px] font-semibold rounded-md"
              style={{
                color: c.text,
                background: c.bg,
                border: `1px solid ${c.border}`,
              }}
            >
              {t}
            </span>
          );
        })}
      </div>
    </div>
  </motion.div>
);

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-[#050505] text-white py-24 md:py-32 overflow-hidden selection:bg-amber-500/30"
    >
      <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-[var(--accent)]/4 rounded-full blur-[150px] pointer-events-none translate-x-1/2" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#61DAFB]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-white/80 uppercase">
              Selected Works
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
              Featured{" "}
              <span className="text-[var(--accent)] relative inline-block">
                Projects
                <div className="absolute bottom-2 left-0 w-full h-3 bg-[var(--accent)]/15 -z-10 skew-x-12" />
              </span>
            </h2>
            <div className="flex items-center gap-2 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === tab ? "bg-[var(--accent)] text-black" : "border border-white/15 text-white/50 hover:text-white hover:border-white/30"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/15 hover:border-[var(--accent)]/50 text-white/60 hover:text-[var(--accent)] font-bold uppercase tracking-widest text-xs transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            View All on GitHub
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
