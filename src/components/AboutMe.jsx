import { motion } from "framer-motion";

import { GraduationCap, Laptop, MapPin, Target, Code2 } from "lucide-react";

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

  return (
    <section id="about" className="relative bg-[#050505] text-white  overflow-hidden selection:bg-amber-500/30">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--accent)]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')] opacity-[0.03] mix-blend-overlay pointer-events-none filter grayscale" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-20">
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
                  Creative Fullstack Engineer
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
                I’m a passionate Full Stack Developer focused on creating
                modern, scalable, and high-performance web applications that
                combine clean design with real functionality. My experience
                spans frontend and backend technologies including React.js,
                Next.js, Node.js, Express, MongoDB, and modern UI frameworks. I
                enjoy transforming ideas into meaningful digital experiences
                that are responsive, intuitive, and built with user experience
                in mind.
                <br />
                <br />
                Beyond traditional web development, I’m actively exploring AI
                integration, intelligent agents, automation workflows, and
                emerging technologies to build smarter applications. I believe
                technology should not only solve problems but also create
                experiences that feel seamless, engaging, and impactful.
              </p>

              <div className="flex flex-wrap gap-4 mt-4">
                {[
                  "Full Stack Developer",
                  "AI Enthusiast",
                  "UI/UX Designer",
                  "Problem Solver",
                  "MERN Stack",
                  "Creative Thinker",
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
                      icon: <Target className="w-5 h-5" />,
                      title: "Goal",
                      desc: "Building Scalable AI-Powered Digital Experiences",
                    },
                    {
                      icon: <Laptop className="w-5 h-5" />,
                      title: "Specialization",
                      desc: "MERN Stack, APIs & Modern UI Development",
                    },
                    {
                      icon: <Code2 className="w-5 h-5" />,
                      title: "Interests",
                      desc: "AI Agents, Automation & Emerging Technologies",
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

          {/* Fun Facts Section */}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
