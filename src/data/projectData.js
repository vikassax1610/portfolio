import gamix from "../assets/project/gamix.webp";
import fusionSpin from "../assets/project/fusionSpin.webp";
import nmCrm from "../assets/project/nmCrm.webp";
import leadgen from "../assets/project/leadgen.webp";
import cfi from "../assets/project/cfi.webp";
const projects = [
  {
    id: 1,
    title: "Gamix Labs",
    desc: "A high-performance gaming studio website with immersive animations and a sleek dark aesthetic built for a modern gaming audience.",
    tech: ["React", "TypeScript", "Framer Motion"],
    link: "https://gamixlabs.com/",
    image: gamix,
    category: "Web",
    featured: true,
    year: "2025",
  },
  {
    id: 2,
    title: "NidhiMani Dashboard",
    desc: "A comprehensive CRM & content dashboard with rich-text editing, analytics, and real-time data for a premium jewellery brand.",
    tech: ["React.js", "TailwindCSS", "TipTap Editor"],
    link: "https://tourmaline-meerkat-094164.netlify.app/",
    image: nmCrm,
    category: "Full-Stack",
    featured: true,
    year: "2025",
  },
  {
    id: 3,
    title: "Fusion Spin",
    desc: "A fast-paced game frontend built with Cocos Creator. Handles complex sprite animations, game state management, and physics.",
    tech: ["Cocos Creator", "TypeScript"],
    link: "https://fusionspin.com/",
    image: fusionSpin,
    category: "Game",
    featured: false,
    year: "2024",
  },
  {
    id: 4,
    title: "Lead Generator AI",
    desc: "AI-powered lead generation SaaS using Google Gemini for intelligent prospect discovery, with role-based access control and auth.",
    tech: ["React.js", "Node.js", "MongoDB", "Gemini"],
    link: "https://lead-generator-flax.vercel.app/",
    image: leadgen,
    category: "Full-Stack",
    featured: true,
    year: "2025",
  },
  {
    id: 5,
    title: "CFI Platform",
    desc: "A collaborative platform with project boards, team management, and real-time task tracking for enterprise workflows.",
    tech: ["React.js", "Express.js", "MongoDB"],
    link: "#",
    image: cfi,
    category: "Full-Stack",
    featured: false,
    year: "2024",
  },
];

export default projects;
