import { motion } from "framer-motion";
import { Target, Coffee, Brain, Rocket } from "lucide-react";

export default function FunFacts() {
  const funFacts = [
    {
      icon: <Brain className="w-6 h-6 text-[var(--accent)]" aria-hidden="true" />,
      title: "Code Philosophy",
      desc: "Clean code is not written by following a set of rules. Clean code is written by programmers who care.",
    },
    {
      icon: <Coffee className="w-6 h-6 text-[var(--accent)]" aria-hidden="true" />,
      title: "Daily Ritual",
      desc: "Coffee + Code + Creativity = Perfect Day",
    },
    {
      icon: <Target className="w-6 h-6 text-[var(--accent)]" aria-hidden="true" />,
      title: "Current Focus",
      desc: "Building scalable web applications with modern JavaScript frameworks and cloud technologies.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-[var(--accent)]" aria-hidden="true" />,
      title: "Goals for 2025",
      desc: "Master microservices architecture and contribute to open-source projects.",
    },
  ];
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <section id="fun-facts" aria-labelledby="fun-facts-heading" className="bg-[#050505]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-20">
        <motion.div variants={itemVariants} className="flex flex-col gap-12">
          <h2
            id="fun-facts-heading"
            className="text-3xl md:text-5xl font-bold tracking-tighter text-center"
          >
            Fun <span className="text-[var(--accent)]">Facts</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {funFacts.map((fact, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-[var(--accent)]/30 transition-colors flex flex-col items-center text-center gap-4 group"
              >
                <div className="p-4 rounded-full bg-white/5 group-hover:scale-110 transition-transform duration-300">
                  {fact.icon}
                </div>
                <h3 className="text-lg font-bold text-white/90">{fact.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {fact.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
