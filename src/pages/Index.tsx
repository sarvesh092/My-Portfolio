import Navigation from "@/pages/NavBar";
import IntroSection from "@/pages/IntroSection";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import Experience from "@/pages/Experience";
import Contact from "@/pages/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <IntroSection />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};

export default Index;
