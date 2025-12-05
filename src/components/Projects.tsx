import { useState, useEffect, useRef, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import commonCornerImg from 'figma:asset/1f3eeb46168aee9175c2da0e42b1461e7eec0723.png';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  year: string;
  image: string;
  caseStudyId?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Brand Identity System',
    category: 'Branding',
    description: 'Complete visual identity for a sustainable fashion brand, including logo design, color palette, typography, and brand guidelines.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1763671727638-5bc55bb9c980?w=800&q=75&auto=format',
  },
  {
    id: 2,
    title: 'The Common Corner, by Starbucks',
    category: 'Phygital',
    description: 'A community space that redefines the coffee shop experience through thoughtful interior design and brand experience.',
    year: '2024',
    image: commonCornerImg,
    caseStudyId: 'common-corner',
  },
  {
    id: 3,
    title: 'E-commerce Website',
    category: 'Web Design',
    description: 'Modern e-commerce platform with seamless shopping experience and responsive design for all devices.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?w=800&q=75&auto=format',
  },
  {
    id: 4,
    title: 'Packaging Design',
    category: 'Product Design',
    description: 'Premium packaging design for artisanal coffee brand with sustainable materials and elegant aesthetics.',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1626253934161-08cfea22e968?w=800&q=75&auto=format',
  },
  {
    id: 5,
    title: 'Interface Design System',
    category: 'UI/UX',
    description: 'Comprehensive design system for a fintech startup with reusable components and design tokens.',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?w=800&q=75&auto=format',
  },
  {
    id: 6,
    title: 'Creative Workspace',
    category: 'Art Direction',
    description: 'Photography and art direction for creative studio showcasing their workspace and culture.',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1718220268527-4477fd170775?w=800&q=75&auto=format',
  },
];

interface ProjectsProps {
  onViewCaseStudy: (projectId: string) => void;
}

export function Projects({ onViewCaseStudy }: ProjectsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    triggersRef.current.forEach((trigger, index) => {
      if (trigger) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveIndex(index);
              }
            });
          },
          {
            threshold: 0.5,
            rootMargin: '-20% 0px -20% 0px',
          }
        );

        observer.observe(trigger);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const activeProject = projects[activeIndex];

  return (
    <section id="work" className="relative" ref={containerRef}>
      {/* Fixed Content Area */}
      <div className="sticky top-[80px] lg:top-[140px] z-10 px-6 lg:px-12 py-6 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            {/* Content - Fixed Position */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={`content-${activeIndex}`}
                className="space-y-3 lg:space-y-4"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Category and Year */}
                <div className="flex items-center gap-4 min-h-[20px]">
                  <span className="text-white/40 text-sm uppercase tracking-wider">
                    {activeProject.category}
                  </span>
                  <span className="text-white/40 text-sm">
                    {activeProject.year}
                  </span>
                </div>
                
                {/* Title */}
                <motion.h3 
                  className="text-white text-3xl md:text-4xl lg:text-5xl tracking-tight min-h-[60px] lg:min-h-[100px]"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {activeProject.title}
                </motion.h3>
                
                {/* Description */}
                <motion.p 
                  className="text-white/70 text-base lg:text-lg max-w-xl min-h-[48px] lg:min-h-[60px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  {activeProject.description}
                </motion.p>

                {/* View Project Button */}
                <motion.button 
                  className="inline-flex items-center gap-2 text-white hover:text-white/70 transition-colors group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => {
                    if (activeProject.caseStudyId) {
                      onViewCaseStudy(activeProject.caseStudyId);
                    } else {
                      console.log(`No case study available for project ${activeProject.id}`);
                    }
                  }}
                >
                  <span>View Process</span>
                  <svg 
                    className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>

                {/* Progress Indicator */}
                <div className="pt-4 lg:pt-8">
                  <div className="flex items-center gap-2">
                    <span className="text-white/40 text-sm">
                      {String(activeIndex + 1).padStart(2, '0')}
                    </span>
                    <div className="h-[1px] w-12 bg-white/20">
                      <motion.div
                        className="h-full bg-white"
                        initial={{ width: 0 }}
                        animate={{ width: `${((activeIndex + 1) / projects.length) * 100}%` }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      />
                    </div>
                    <span className="text-white/40 text-sm">
                      {String(projects.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Image - Fixed Position with Crossfade */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ImageWithFallback
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Triggers - Invisible divs that trigger content changes */}
      <div className="relative">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (triggersRef.current[index] = el)}
            className="h-screen"
            aria-hidden="true"
          />
        ))}
      </div>
    </section>
  );
}
