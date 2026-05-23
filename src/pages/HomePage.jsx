import HeroSection from "../components/HeroSection";
import SkillCarousel from "../components/SkillCarousel";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import FeaturedProject from "../components/FeaturedProject";
import FunFacts from "../components/FunFacts";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="block lg:hidden mx-4">
        <SkillCarousel />
      </div>

      <AboutMe />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <FeaturedProject />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Skills />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <Experience />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <FunFacts />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Contact />
    </>
  );
}
