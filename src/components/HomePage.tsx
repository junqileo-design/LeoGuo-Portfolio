import { AnimatedBackground } from "./AnimatedBackground";
import { Navigation } from "./Navigation";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Footer } from "./Footer";

interface HomePageProps {
  onNavigate: (page: 'home' | 'about' | 'works') => void;
  onViewCaseStudy: (projectId: string) => void;
}

export function HomePage({ onNavigate, onViewCaseStudy }: HomePageProps) {
  return (
    <div className="relative w-full min-h-screen bg-black">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navigation onNavigate={onNavigate} currentPage="home" />

        {/* Hero Section */}
        <Hero />

        {/* Projects Section */}
        <Projects onViewCaseStudy={onViewCaseStudy} />

        {/* Footer / Contact */}
        <Footer />
      </div>
    </div>
  );
}