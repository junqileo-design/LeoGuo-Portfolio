import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { WorksOverviewPage } from "./components/WorksOverviewPage";
import { CaseStudyPage } from "./components/CaseStudyPage";
import { caseStudies } from "./data/caseStudies";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'works' | 'case-study'>('home');
  const [currentCaseStudyId, setCurrentCaseStudyId] = useState<string | null>(null);

  const handleNavigate = useCallback((page: 'home' | 'about' | 'works') => {
    setCurrentPage(page);
    setCurrentCaseStudyId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleViewCaseStudy = useCallback((projectId: string) => {
    setCurrentCaseStudyId(projectId);
    setCurrentPage('case-study');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="w-full min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentPage}-${currentCaseStudyId ?? ''}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {currentPage === 'home' && (
            <HomePage onNavigate={handleNavigate} onViewCaseStudy={handleViewCaseStudy} />
          )}
          {currentPage === 'about' && (
            <AboutPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'works' && (
            <WorksOverviewPage onNavigate={handleNavigate} onViewCaseStudy={handleViewCaseStudy} />
          )}
          {currentPage === 'case-study' && currentCaseStudyId && caseStudies[currentCaseStudyId] && (
            <CaseStudyPage 
              onNavigate={handleNavigate} 
              caseStudyData={caseStudies[currentCaseStudyId]} 
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
