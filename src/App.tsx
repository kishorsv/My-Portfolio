import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { About } from './components/About';
import { SelectedWorks } from './components/SelectedWorks';
import { VisualBreak } from './components/VisualBreak';
import { Skills } from './components/Skills';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Explorations } from './components/Explorations';
import { Journal } from './components/Journal';
import { PhilosophyStats } from './components/PhilosophyStats';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { EducationAndGithub } from './components/EducationAndGithub';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { JournalModal } from './components/JournalModal';
import { ResumeModal } from './components/ResumeModal';
import type { FeaturedProject } from './data/projects';
import type { JournalArticle } from './data/journal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Refresh GSAP ScrollTrigger once loader finishes
  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
  };

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F4F1EA] selection:bg-[#7C5CFF]/30 selection:text-white relative overflow-x-hidden font-sans">
      {/* 44 — 2px Viewport Edge Scroll Progress Line */}
      <ScrollProgress />

      {/* 16 — Desktop Custom Cursor with Spring Physics */}
      <CustomCursor />

      {/* 09 — Subtle Film Grain (0.025 Opacity) */}
      <div className="film-grain-overlay pointer-events-none" />

      {/* 52 — Cinematic Opening Experience (000 -> 100 with OBSERVE / BUILD / CREATE) */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* 15 — Floating Glass Capsule Navbar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={scrollToContact}
      />

      {/* Main Art-Directed Portfolio Experience */}
      <main id="main-content" className="relative z-10">
        {/* 10-14 & 17 — Hero: Opening Scene, Masked Role Cycle & Portrait Card */}
        <Hero
          onExploreWork={scrollToProjects}
          onAbout={scrollToAbout}
          onConnect={scrollToContact}
        />

        {/* 18 — Introduction: "I TURN COMPLEX TECHNOLOGY INTO SIMPLE EXPERIENCES." */}
        <IntroSection />

        {/* 30 — About: "I'M AN AI/ML ENGINEERING STUDENT BUILDING REAL DIGITAL PRODUCTS." */}
        <About />

        {/* 19-29 — Art-Directed Project Gallery (5 Bespoke Compositions) */}
        <SelectedWorks onSelectProject={(project) => setSelectedProject(project)} />

        {/* 37 — Visual Break: Full-Screen Hold "MAKE IT USEFUL." */}
        <VisualBreak />

        {/* 31 — Skills: Interactive Typography Poster Wall (No Badges) */}
        <Skills />

        {/* 32 — Experience: Horizontal Timeline (2024 Foundations ? 2025 Web+Python ? 2026 AI+GenAI) */}
        <ExperienceTimeline />

        {/* 34-35 — Experiments: Visual Playground with 3-Speed Parallax */}
        <Explorations />

        {/* 33 — Journal: Editorial Article List with Cursor Hover Thumbnail */}
        <Journal onSelectArticle={(article) => setSelectedArticle(article)} />

        {/* 38-39 — Philosophy & Stats ("GOOD TECHNOLOGY SHOULD FEEL SIMPLE." + Giant Numbers) */}
        <PhilosophyStats />

        {/* Verified Credentials */}
        <Certifications />

        {/* Verified Honors & Achievements */}
        <Achievements />

        {/* Academic Grounding & SVG GitHub Activity */}
        <EducationAndGithub />

        {/* 40-41 — Contact: Cinematic HLS Scene with Oversized Circular Magnetic Button */}
        <Contact />
      </main>

      {/* 42 — Minimal Luxury Footer */}
      <Footer />

      {/* Interactive Inspection Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <JournalModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
