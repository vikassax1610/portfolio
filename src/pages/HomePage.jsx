import HeroSection from "../components/HeroSection";
import SkillCarousel from "../components/SkillCarousel";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="block lg:hidden mx-4">
        <SkillCarousel />
      </div>

      <AboutMe />
      <Skills />
      <Experience />
      <Contact id="contact" />
    </>
  );
}
