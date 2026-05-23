import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  FolderOpen,
  Code2,
  Briefcase,
  Mail,
  X,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ArrowUpRight,
} from "lucide-react";

const navItems = [
  { title: "About", icon: User, href: "#about", num: "01" },
  { title: "Projects", icon: FolderOpen, href: "#projects", num: "02" },
  { title: "Skills", icon: Code2, href: "#skills", num: "03" },
  { title: "Experience", icon: Briefcase, href: "#experience", num: "04" },
  { title: "Contact", icon: Mail, href: "#contact", num: "05" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/vikassax1610", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/vikassaxena816",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/vikas_only_", label: "Twitter" },
  {
    icon: Instagram,
    href: "https://www.instagram.com/vikas.dev_",
    label: "Instagram",
  },
  { icon: Mail, href: "mailto:vikassaxena816@gmail.com" },
];

/* ── Animation variants ─────────────────────────────────────── */
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const panelVariants = {
  hidden: { x: "100%", opacity: 0.6 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 32, mass: 0.8 },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

/* ── Component ───────────────────────────────────────────────── */
const Sidebar = ({ openSideBar, setOpenSideBar }) => {
  const close = () => setOpenSideBar(false);

  return (
    <AnimatePresence>
      {openSideBar && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={close}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[90]"
          />

          {/* ── Panel ── */}
          <motion.aside
            key="panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              fixed top-0 right-0 z-[100]
              h-screen
              w-full sm:w-[380px]
              flex flex-col
              overflow-hidden
            "
            style={{
              background:
                "linear-gradient(135deg, rgba(13,13,13,0.97) 0%, rgba(20,15,8,0.97) 100%)",
              borderLeft: "1px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(24px)",
              boxShadow:
                "-20px 0 80px rgba(0,0,0,0.6), inset 1px 0 0 rgba(255,255,255,0.04)",
            }}
          >
            {/* ── Top accent bar ── */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--accent), transparent)",
              }}
            />

            {/* ── Ambient glow ── */}
            <div className="absolute top-[-80px] right-[-60px] w-[260px] h-[260px] rounded-full bg-[var(--accent)]/5 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-[-60px] left-[-40px] w-[200px] h-[200px] rounded-full bg-white/3 blur-[60px] pointer-events-none" />

            {/* ── Header ── */}
            <div className="relative flex items-center justify-between px-8 pt-8 pb-6">
              {/* Brand */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white text-black flex items-center justify-center font-black italic tracking-tighter text-base transform -skew-x-12 shrink-0">
                  VS
                </div>
                <div>
                  <p className="text-white text-sm font-bold tracking-wide leading-none">
                    Vikas Saxena
                  </p>
                  <p className="text-[var(--accent)] text-[10px] font-semibold tracking-[0.18em] uppercase mt-0.5">
                    Fullstack Dev
                  </p>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={close}
                aria-label="Close menu"
                className="
                  group p-2.5 rounded-full
                  border border-white/10
                  bg-white/3
                  hover:bg-[var(--accent)]/15
                  hover:border-[var(--accent)]/40
                  transition-all duration-300
                "
              >
                <X className="w-4 h-4 text-white/60 group-hover:text-[var(--accent)] transition-colors duration-300" />
              </button>
            </div>

            {/* ── Divider ── */}
            <div className="mx-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* ── Nav ── */}
            <motion.nav
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col flex-1 justify-center px-6 gap-1"
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.title}
                    variants={itemVariants}
                    href={item.href}
                    onClick={close}
                    className="group relative flex items-center gap-4 px-4 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/4"
                  >
                    {/* Hover accent left bar */}
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 group-hover:h-[60%] rounded-full bg-[var(--accent)] transition-all duration-300" />

                    {/* Number */}
                    <span className="text-[10px] font-mono font-bold text-white/20 group-hover:text-[var(--accent)]/60 transition-colors duration-300 w-5 shrink-0">
                      {item.num}
                    </span>

                    {/* Icon */}
                    <span className="p-2 rounded-lg bg-white/5 border border-white/8 group-hover:bg-[var(--accent)]/10 group-hover:border-[var(--accent)]/25 transition-all duration-300">
                      <Icon className="w-4 h-4 text-white/50 group-hover:text-[var(--accent)] transition-colors duration-300" />
                    </span>

                    {/* Label */}
                    <span className="text-base font-semibold text-white/60 group-hover:text-white transition-colors duration-300 tracking-wide flex-1">
                      {item.title}
                    </span>

                    {/* Arrow */}
                    <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-[var(--accent)]/70 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </motion.a>
                );
              })}
            </motion.nav>

            {/* ── Divider ── */}
            <div className="mx-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* ── Footer: social + status ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="px-8 py-7 flex items-center justify-between"
            >
              {/* Available badge */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-[10px] font-semibold text-white/50 uppercase tracking-[0.15em]">
                  Available to work
                </span>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-2">
                {socialLinks.map(({ icon: SocialIcon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="p-2 rounded-full border border-white/8 bg-white/3 hover:bg-[var(--accent)]/15 hover:border-[var(--accent)]/35 text-white/40 hover:text-[var(--accent)] transition-all duration-300"
                  >
                    <SocialIcon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* ── Bottom accent bar ── */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[1px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
              }}
            />
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
