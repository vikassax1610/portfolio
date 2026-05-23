import { motion, useAnimationFrame } from "framer-motion";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import js from "../assets/icons/js.png";
import react from "../assets/icons/react.png";
// import tailwind from "../assets/icons/tailwind.png";
import node from "../assets/icons/nodejs.png";
import express from "../assets/icons/express.png";
import mongo from "../assets/icons/mongodb.png";
import { useRef, useState } from "react";

const SkillCarousel = () => {
  const containerRef = useRef(null);
  const x = useRef(0);
  const [isHovering, setIsHovering] = useState(false);

  const icons = [
    {
      icon: html,
      color: "hover:border-red-500",
      shadow: "hover:shadow-red-500/50",
    },
    {
      icon: css,
      color: "hover:border-blue-500",
      shadow: "hover:shadow-blue-500/50",
    },
    {
      icon: js,
      color: "hover:border-yellow-500",
      shadow: "hover:shadow-yellow-500/50",
    },
    {
      icon: react,
      color: "hover:border-blue-500",
      shadow: "hover:shadow-blue-500/50",
    },
    {
      icon: node,
      color: "hover:border-green-500",
      shadow: "hover:shadow-green-500/50",
    },
    {
      icon: express,
      color: "hover:border-yellow-500",
      shadow: "hover:shadow-yellow-500/50",
    },
    {
      icon: mongo,
      color: "hover:border-green-500",
      shadow: "hover:shadow-green-500/50",
    },
  ];
  const icons2 = [
    {
      icon: html,
      color: "hover:border-red-500",
      shadow: "hover:shadow-red-500/50",
    },
    {
      icon: css,
      color: "hover:border-blue-500",
      shadow: "hover:shadow-blue-500/50",
    },
    {
      icon: js,
      color: "hover:border-yellow-500",
      shadow: "hover:shadow-yellow-500/50",
    },
    {
      icon: react,
      color: "hover:border-blue-500",
      shadow: "hover:shadow-blue-500/50",
    },
    {
      icon: node,
      color: "hover:border-green-500",
      shadow: "hover:shadow-green-500/50",
    },
    {
      icon: express,
      color: "hover:border-yellow-500",
      shadow: "hover:shadow-yellow-500/50",
    },
    {
      icon: mongo,
      color: "hover:border-green-500",
      shadow: "hover:shadow-green-500/50",
    },
  ];
  // Combine the two unique sets the user created
  const baseIcons = [...icons, ...icons2];
  // Duplicate the entire sequence to ensure seamless looping
  const finalIcons = [...baseIcons, ...baseIcons];

  useAnimationFrame((t, delta) => {
    if (!isHovering) {
      x.current -= delta * 0.05; // Slightly adjusted speed
    }

    if (containerRef.current) {
      // Calculate the width of half the content (the original unique set)
      // We add 24 (gap-6) to the total scrollWidth before dividing because the total width
      // is (WidthOfSet * 2) - 1 * Gap. Ideally we want WidthOfSet + Gap.
      // Actually simpler approximation: just reset when we've scrolled half the TOTAL width.
      // Total width = Width(Set1) + Gap + Width(Set2).
      // Set1 == Set2.
      // So half width is the reset point.
      const scrollWidth = containerRef.current.scrollWidth;
      const loopWidth = scrollWidth / 4;

      // Wrap around
      if (x.current <= -loopWidth) {
        x.current = 0;
      }

      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  return (
    <div className="relative py-8  overflow-hidden w-full lg:w-1/2">
      {/* Fade Edges */}
      <div className="absolute left-0 w-24 top-0 h-full bg-transparent z-10" />
      <div className="absolute right-0 w-24 top-0 h-full bg-transparent z-10" />

      {/* Carousel Track */}
      <motion.div
        ref={containerRef}
        className="flex gap-6 w-max"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {finalIcons.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2, y: -6 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`p-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 ${item.color} shadow-lg ${item.shadow} cursor-pointer`}
          >
            <img
              loading="lazy"
              src={item.icon}
              alt=""
              className="w-20 lg:w-12 lg:h-12 text-white "
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillCarousel;
