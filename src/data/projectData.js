
import gamix from "../assets/project/gamix.webp";
import fusionSpin from "../assets/project/fusionSpin.webp";
import nmCrm from "../assets/project/nmCrm.webp";
import leadgen from "../assets/project/leadgen.webp";
import cfi from "../assets/project/nyxstack.webp";
import threadStore from "../assets/project/threadStore.webp";
import sweepStakes from "../assets/project/sweepStakes.webp";
import paintPanic from "../assets/project/paintPanic.webp";
import throttleBrawl from "../assets/project/throttleBrawl.webp";
import bulletEcho from "../assets/project/bulletEcho.webp";

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
    title: "Shoply AI Shopping Assistant",
    desc: "An AI-powered eCommerce shopping assistant that understands natural-language product requests, searches the real product catalog, and delivers personalized recommendations through an interactive chat experience.",
    tech: ["React", "Node.js", "Express", "Gemini AI"],
    link: "https://ai-shopping-agent-one.vercel.app/",
    image: threadStore,
    category: "AI",
    featured: true,
    year: "2026",
  },
  {
    id: 3,
    title: "Sweep Stakes Casino Platform",
    desc: "A feature-rich online gaming platform featuring slot games, casino games, multiplayer experiences, virtual coin balances, rewards, VIP progression, tournaments, and interactive gaming features.",
    tech: ["Angular", "TypeScript", "Node.js", "Docker", "Game Integrations"],
    link: "https://sweep.app.gamixlabs.com/#/lobby",
    image: sweepStakes,
    category: "Game",
    featured: true,
    year: "2026",
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
    title: "Lead Generator AI",
    desc: "AI-powered lead generation SaaS using Google Gemini for intelligent prospect discovery, with role-based access control and authentication.",
    tech: ["React.js", "Node.js", "MongoDB", "Gemini"],
    link: "https://lead-generator-flax.vercel.app/",
    image: leadgen,
    category: "Full-Stack",
    featured: true,
    year: "2025",
  },
  {
    id: 7,
    title: "Paint Panic",
    desc: "A real-time multiplayer arena game where players compete to cover the map with paint. Features 3D environments, interactive gameplay, and team-based competition.",
    tech: ["Three.js", "JavaScript", "Multiplayer Gaming"],
    link: "https://sweep.app.gamixlabs.com/#/game/paintpanic",
    image: paintPanic,
    category: "Game",
    featured: true,
    year: "2026",
  },
  {
    id: 8,
    title: "Throttle Brawl",
    desc: "A 3D multiplayer racing and combat game featuring high-speed motorcycle gameplay, vehicle controls, nitro boosts, power-ups, and competitive race rankings.",
    tech: ["Three.js", "JavaScript", "3D Game Development"],
    link: "https://sweep.app.gamixlabs.com/#/game/throttlebrawl",
    image: throttleBrawl,
    category: "Game",
    featured: true,
    year: "2026",
  },
  {
    id: 9,
    title: "Bullet Echo",
    desc: "A tactical multiplayer shooter set in a futuristic arena, featuring player movement, aiming and shooting mechanics, weapon reloads, and competitive combat.",
    tech: ["Three.js", "JavaScript", "Multiplayer Gaming"],
    link: "https://sweep.app.gamixlabs.com/#/game/bulletecho",
    image: bulletEcho,
    category: "Game",
    featured: true,
    year: "2026",
  },

  {
    id: 10,
    title: "nyxStack Innovation",
    desc: "A collaborative platform with project boards, team management, and real-time task tracking for enterprise workflows.",
    tech: ["React.js", "Express.js", "MongoDB"],
    link: "https://www.nyxstack.com/",
    image: cfi,
    category: "Full-Stack",
    featured: false,
    year: "2024",
  },
];

export default projects;