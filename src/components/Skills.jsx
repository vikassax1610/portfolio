import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import js from "../assets/icons/js.png";
import react from "../assets/icons/react.png";
import node from "../assets/icons/nodejs.png";
import express from "../assets/icons/express.png";
import mongo from "../assets/icons/mongodb.png";
import ts from "../assets/icons/typescript.png";
import nextjs from "../assets/icons/nextjs.png";
import PostgresSQL from "../assets/icons/PostgresSQL.png";
import tailwind from "../assets/icons/tailwind.png";
import redux from "../assets/icons/redux.png";
import socket from "../assets/icons/socket.png";
import firebase from "../assets/icons/firebase.png";

const skillCategories = [
  {
    category: "Frontend",
    color: "#61DAFB",
    skills: [
      { name: "React.js", icon: react, level: 92 },
      { name: "Next.js", icon: nextjs, level: 78 },
      { name: "JavaScript", icon: js, level: 90 },
      { name: "TypeScript", icon: ts, level: 78 },
      { name: "HTML5", icon: html, level: 96 },
      { name: "CSS3", icon: css, level: 90 },
      { name: "Tailwind CSS", icon: tailwind, level: 92 },
      { name: "Redux Toolkit", icon: redux, level: 75 },
    ],
  },
  {
    category: "Backend",
    color: "#68D391",
    skills: [
      { name: "Node.js", icon: node, level: 82 },
      { name: "Express.js", icon: express, level: 80 },
      { name: "Next.js", icon: nextjs, level: 78 },
      { name: "MongoDB", icon: mongo, level: 75 },
      { name: "PostgresSQL", icon: PostgresSQL, level: 60 },
      { name: "Socket.io", icon: socket, level: 75 },
      { name: "Firebase", icon: firebase, level: 70 },
    ],
  },
];

const otherSkills = [
  "Tailwind CSS",
  "Framer Motion",
  "REST APIs",
  "Git & GitHub",
  "Redux Toolkit",
  "Socket.io",
  "Postman",
  "Firebase",
  "JWT Auth",
  "Responsive Design",
  "Figma",
  "Vercel",
  "Netlify",
  "Vite",
  "OpenAI APIs",
  "AI Agents",
  "Prompt Engineering",
  "SEO",
  "Performance Optimization",
  "UI/UX Principles",
];

const SkillBar = ({ skill, color, inView, delay }) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center p-1">
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="text-sm font-semibold text-white/80">
          {skill.name}
        </span>
      </div>
      <motion.span
        className="text-xs font-bold font-mono"
        style={{ color }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: delay + 0.6, duration: 0.4 }}
      >
        {skill.level}%
      </motion.span>
    </div>
    {/* Track */}
    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${skill.level}%` } : {}}
        transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
      />
    </div>
  </div>
);

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-[#050505] text-white py-24 md:py-32 overflow-hidden selection:bg-amber-500/30"
    >
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-[130px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#61DAFB]/4 rounded-full blur-[120px] pointer-events-none -translate-x-1/3" />

      {/* dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-white/80 uppercase">
              Tech Arsenal
            </span>
          </div>
          <div className="flex flex-col md:flex-col md:items-start justify-between gap-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
              Skills &{" "}
              <span className="text-[var(--accent)] relative inline-block">
                Technologies
                <div className="absolute bottom-2 left-0 w-full h-3 bg-[var(--accent)]/15 -z-10 skew-x-12" />
              </span>
            </h2>
            <p className="text-white/40 text-lg  leading-relaxed">
              My technology stack is continuously evolving through hands-on
              experience, real-world projects, and problem-solving challenges.
              From building modern responsive interfaces with React and Tailwind
              CSS to developing scalable backend systems with Node.js, Express,
              and MongoDB, I focus on creating high-performance digital
              experiences. I also explore AI-powered solutions, APIs, real-time
              applications, and emerging technologies to build smarter, more
              engaging, and future-ready products.{" "}
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="relative p-8 rounded-3xl bg-[#0d0d0d] border border-white/8 overflow-hidden"
              style={{ boxShadow: `0 0 0 1px ${cat.color}11` }}
            >
              {/* top accent line */}
              <div
                className="absolute top-0 left-8 right-8 h-[1px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${cat.color}50, transparent)`,
                }}
              />

              {/* Category Label */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-2 h-8 rounded-full"
                  style={{
                    background: `linear-gradient(to bottom, ${cat.color}, ${cat.color}33)`,
                  }}
                />
                <h3
                  className="text-2xl font-bold tracking-tight"
                  style={{ color: cat.color }}
                >
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-col gap-5">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    color={cat.color}
                    inView={inView}
                    delay={catIdx * 0.15 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

        {/* Other Skills Bubble Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="text-xl font-bold text-white/50 uppercase tracking-[0.2em] mb-8 text-center">
            Also Working With
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {otherSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
                whileHover={{
                  scale: 1.08,
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                }}
                className="px-5 py-2.5 rounded-full border border-white/10 bg-white/3 text-sm font-medium text-white/60 cursor-default transition-colors duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Bottom Stat Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { num: "8+", label: "Core Technologies" },
            { num: "12+", label: "Tools & Libraries" },
            { num: "1yr+", label: "Industry Experience" },
            { num: "∞", label: "Learning Mindset" },
          ].map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/3 border border-white/8 text-center hover:border-[var(--accent)]/30 transition-colors group"
            >
              <p className="text-3xl md:text-4xl font-black tracking-tighter text-[var(--accent)] mb-1 group-hover:scale-110 transition-transform inline-block">
                {s.num}
              </p>
              <p className="text-[11px] uppercase tracking-widest text-white/40 font-semibold">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
