import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Building2, Diamond } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "MERN Stack Developer",
      company: "Gamix Labs",
      type: "Full-time",
      date: "Apr 2025 - Present",
      duration: "Present",
      location: "Noida, Uttar Pradesh, India · On-site",
      description: [
        "Led end-to-end development and deployment of production business websites including GamixLabs and FusionSpin.",
        "Built scalable frontend architecture with reusable React components and clean state management.",
        "Developed gaming admin dashboard features and integrated REST APIs.",
        "Implemented SEO strategies and performance optimizations using lazy loading, structured data, and Lighthouse improvements.",
        "Maintained and updated production websites while managing content and blog systems.",
      ],
      skills: [
        "SEO Optimization",
        "REST APIs",
        "Performance Tuning",
        "State Management",
        "Scalable Architecture",
        "Production Deployment",
      ],
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-500",
    },

    {
      id: 2,
      role: "Frontend Developer",
      company: "Tattva Technologies",
      type: "Full-time",
      date: "Jan 2025 - Mar 2025",
      duration: "3 mos",
      location: "Noida, Uttar Pradesh, India · Remote",
      description: [
        "Developed scalable and responsive user interfaces using React.js and Tailwind CSS.",
        "Built reusable UI components to improve development speed and maintainability.",
        "Utilized React Hooks for lifecycle control and frontend performance improvements.",
        "Collaborated using Git and GitHub workflows.",
        "Ensured cross-browser compatibility and mobile responsiveness.",
      ],
      skills: [
        "React Hooks",
        "UI Development",
        "Responsive Design",
        "Reusable Components",
        "Git Collaboration",
        "Cross-browser Support",
      ],
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-500",
    },

    {
      id: 3,
      role: "Software Intern",
      company: "Mobzway Technologies",
      type: "Internship",
      date: "Sep 2024 - Dec 2024",
      duration: "4 mos",
      location: "Remote",
      description: [
        "Built an AI-powered chatbot using Google Gemini Flash API with React.js and Tailwind CSS.",
        "Developed real-time features using Socket.io with Node.js and Express.js.",
        "Worked with MongoDB for backend logic and data persistence.",
        "Implemented real-time communication and messaging systems.",
      ],
      skills: [
        "Google Gemini API",
        "Socket.io",
        "Real-time Features",
        "MongoDB",
        "Backend Logic",
        "AI Integration",
      ],
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="experience"
      className="relative min-h-screen bg-[#050505] text-white py-24 md:py-32 overflow-hidden selection:bg-amber-500/30"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 w-max backdrop-blur-sm mb-6 mx-auto md:mx-0">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
              <span className="text-xs font-semibold tracking-wider text-white/80 uppercase">
                Journey So Far
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
              Professional{" "}
              <span className="text-[var(--accent)]">Experience</span>
            </h2>
          </div>
        </div>

        {/* Timeline (The Road) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-4xl mx-auto pl-4 md:pl-0"
        >
          {/* The Glowing Road Line */}
          <div className="absolute left-[34px] md:left-[22px] top-6 bottom-6 w-[4px] bg-gradient-to-b from-[var(--accent)]/0 via-[var(--accent)]/50 to-[var(--accent)]/0 rounded-full" />
          <div className="absolute left-[34px] md:left-[22px] top-6 bottom-6 w-[4px] shadow-[0_0_20px_rgba(249,115,22,0.6)] blur-[2px] rounded-full pointer-events-none" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative flex items-start gap-6 md:gap-10 group mb-12 last:mb-0"
            >
              {/* Road Node / Icon Pivot */}
              <div className="relative z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-[#050505] bg-[#111] text-[var(--accent)] shadow-[0_0_15px_rgba(249,115,22,0.2)] shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--accent)] group-hover:text-black group-hover:shadow-[0_0_25px_rgba(249,115,22,0.7)] group-hover:border-[var(--accent)]/20">
                <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
              </div>

              {/* Project / Experience Card */}
              <div className="flex-1 p-6 md:p-8 rounded-3xl bg-[#111] border border-white/5 transition-all duration-300 relative overflow-hidden group-hover:border-[var(--accent)]/30 group-hover:bg-[#151515] group-hover:-translate-y-1 group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
                {/* Subtle Card Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex flex-col gap-5 relative z-10">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white/95 tracking-tight group-hover:text-white transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-2 text-white/70">
                        <Building2 className="w-4 h-4 text-[var(--accent)]" />
                        <span className="font-medium text-white/90">
                          {exp.company}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 font-bold ml-1">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold tracking-wide text-white/40 mb-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {exp.date}{" "}
                        <span className="text-[var(--accent)]">·</span>{" "}
                        {exp.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-2">
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-white/60 text-sm leading-relaxed flex items-start gap-3"
                      >
                        <span className="text-[var(--accent)] mt-1 shrink-0 opacity-80">
                          ▹
                        </span>
                        <p>{desc}</p>
                      </li>
                    ))}
                  </ul>

                  {/* Skills Section inside Experience */}
                  <div className="pt-5 border-t border-white/5 mt-2">
                    <div className="flex items-center gap-2 mb-4">
                      <Diamond className="w-4 h-4 text-[var(--accent)]/60" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                        Skills & Tech Stack
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs font-medium text-white/70 bg-white/5 rounded-md border border-white/5 group-hover:border-[var(--accent)]/20 group-hover:bg-[var(--accent)]/5 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
