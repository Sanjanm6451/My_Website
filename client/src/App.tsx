import { useEffect } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import "./index.css";

function App() {
  // Add smooth scrolling behavior
  useEffect(() => {
    // Handle anchor links with smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200 font-sans transition-colors duration-300">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
        <BackToTop />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
