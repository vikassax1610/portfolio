import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Experience />
      <Contact id="contact" />
    </>
  );
}
