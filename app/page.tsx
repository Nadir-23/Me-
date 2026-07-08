import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EducationTimeline from "@/components/EducationTimeline";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import SkillsPanel from "@/components/SkillsPanel";
import GithubStats from "@/components/GithubStats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <EducationTimeline />
      <TechStack />
      <Projects />
      <Experience />
      <SkillsPanel />
      <GithubStats />
      <Contact />
      <Footer />
    </main>
  );
}
