import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  PenLine,
  Send,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import contactImg from "../assets/contactus.webp";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("sent");
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const socials = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "https://linkedin.com/in/vikassaxena" },
    { icon: Mail, href: "mailto:vikassaxena816@gmail.com" },
  ];

  return (
    <section className="relative bg-[#0a0a0a] text-white overflow-hidden selection:bg-orange-500/30 min-h-screen flex">
      {/* ───── LEFT PANEL: Form (always visible) ───── */}
      <div className="relative flex flex-col justify-center w-full lg:w-[45%] px-6 sm:px-10 md:px-14 py-16 bg-[#0a0a0a] z-10 shrink-0">
        {/* Top orange border */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-600 via-orange-500 to-transparent" />

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-orange-500 font-bold text-xs tracking-[0.3em] uppercase mb-3"
        >
          // Let's Connect
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl font-black tracking-tight leading-none mb-4"
        >
          CONTACT <span className="text-orange-500">US</span>
        </motion.h2>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-white/45 text-sm leading-relaxed mb-8 max-w-full"
        >
          Have a question or want to work together? We'd love to hear from you.
          Fill out the form and we'll get back to you as soon as possible.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-3 w-full max-w-full"
        >
          {/* Name */}
          <label className="flex items-center gap-3 bg-[#141414] border border-white/8 rounded px-4 py-3.5 focus-within:border-orange-500/50 transition-colors cursor-text">
            <User className="w-4 h-4 text-orange-500 shrink-0" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="flex-1 bg-transparent text-sm text-white placeholder-white/30 outline-none min-w-0"
            />
          </label>

          {/* Email */}
          <label className="flex items-center gap-3 bg-[#141414] border border-white/8 rounded px-4 py-3.5 focus-within:border-orange-500/50 transition-colors cursor-text">
            <Mail className="w-4 h-4 text-orange-500 shrink-0" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="flex-1 bg-transparent text-sm text-white placeholder-white/30 outline-none min-w-0"
            />
          </label>

          {/* Phone */}
          <label className="flex items-center gap-3 bg-[#141414] border border-white/8 rounded px-4 py-3.5 focus-within:border-orange-500/50 transition-colors cursor-text">
            <Phone className="w-4 h-4 text-orange-500 shrink-0" />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="flex-1 bg-transparent text-sm text-white placeholder-white/30 outline-none min-w-0"
            />
          </label>

          {/* Message */}
          <label className="flex items-start gap-3 bg-[#141414] border border-white/8 rounded px-4 py-3.5 focus-within:border-orange-500/50 transition-colors cursor-text">
            <PenLine className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your Message"
              required
              className="flex-1 bg-transparent text-sm text-white placeholder-white/30 outline-none resize-none min-w-0"
            />
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="flex items-center justify-center gap-3 mt-1 px-8 py-4 border-2 border-orange-500 rounded text-orange-500 font-black text-xs tracking-[0.2em] uppercase hover:bg-orange-500 hover:text-black transition-all duration-300 disabled:opacity-60 active:scale-[0.98]"
          >
            {status === "idle" && (
              <>
                <span>SEND MESSAGE</span>
                <Send className="w-4 h-4" />
              </>
            )}
            {status === "sending" && <span>SENDING...</span>}
            {status === "sent" && <span>✓ MESSAGE SENT!</span>}
          </button>
        </motion.form>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 w-full max-w-full"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
              Or Reach Us On
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="flex items-center justify-center gap-3">
            {socials.map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-11 h-11 rounded-full border-2 border-orange-500/50 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-colors duration-200"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <p className="mt-10 text-white/20 text-[12px]">
          © 2025 Vikas Saxena · Built with React & Framer Motion
        </p>
      </div>

      {/* ───── RIGHT PANEL: Image (desktop only) ───── */}
      <div className="relative hidden lg:block flex-1 overflow-hidden">
        {/* Full cover image */}
        <img
          src={contactImg}
          alt="Contact Visual"
          className="absolute inset-0 w-full h-full object-cover "
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Blend edge with left panel */}
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />

        {/* Bottom orange line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-600 via-orange-500 to-transparent z-20" />
      </div>
    </section>
  );
};

export default Contact;
