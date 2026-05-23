import { lazy, Suspense } from "react";
import HeroSection from "../components/HeroSection"; // above-the-fold — eager
import SkillCarousel from "../components/SkillCarousel"; // above-the-fold — eager
import SectionLoader from "../components/SectionLoader";
const AboutMe = lazy(() => import("../components/AboutMe"));
const FeaturedProject = lazy(() => import("../components/FeaturedProject"));
const Skills = lazy(() => import("../components/Skills"));
const Experience = lazy(() => import("../components/Experience"));
const FunFacts = lazy(() => import("../components/FunFacts"));
const Contact = lazy(() => import("../components/Contact"));

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="block lg:hidden mx-4">
        <SkillCarousel />
      </div>

      <Suspense fallback={<SectionLoader />}>
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
      </Suspense>
    </>
  );
}
