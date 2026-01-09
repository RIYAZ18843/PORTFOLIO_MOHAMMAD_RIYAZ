import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      <StarField />
      <Navbar />
      <FloatingContact />
      <div className="relative z-10">
        <Hero />
        <TechStack />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
