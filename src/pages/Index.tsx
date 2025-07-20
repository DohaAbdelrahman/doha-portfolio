import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative">
        <div id="hero" className="sticky top-0 z-10 min-h-screen">
          <Hero />
        </div>
        <div id="about" className="sticky top-0 z-20 min-h-screen bg-background">
          <About />
        </div>
        <div id="skills" className="sticky top-0 z-30 min-h-screen bg-background">
          <Skills />
        </div>
        <div id="experience" className="sticky top-0 z-40 min-h-screen bg-background">
          <Experience />
        </div>
        <div id="education" className="sticky top-0 z-50 min-h-screen bg-background">
          <Education />
        </div>
        <div id="certifications" className="sticky top-0 z-60 min-h-screen bg-background">
          <Certifications />
        </div>
        <div id="projects" className="sticky top-0 z-70 min-h-screen bg-background">
          <Projects />
        </div>
        <div id="contact" className="sticky top-0 z-80 min-h-screen bg-background">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
