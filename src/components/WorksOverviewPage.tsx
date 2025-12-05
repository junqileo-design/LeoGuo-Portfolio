import { useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import commonCornerImg from 'figma:asset/1f3eeb46168aee9175c2da0e42b1461e7eec0723.png';
// Uses public/chopdock.png so you can drop in your own image easily

interface Project {
  id: string;
  title: string;
  category: 'Phygital' | 'Industrial Design' | 'UI/UX' | 'Photography';
  image: string;
  caseStudyId?: string;
}

const projects: Project[] = [
  {
    id: 'common-corner',
    title: 'The Common Corner, by Starbucks',
    category: 'Phygital',
    image: commonCornerImg,
    caseStudyId: 'common-corner',
  },
  {
    id: '1',
    title: 'YONEX ASTROX 99 • LAUNCH CAMPAIGN',
    category: 'Phygital',
    image: 'https://images.unsplash.com/photo-1720590460224-d00c7c3e361d?w=800&q=75&auto=format',
  },
  {
    id: '2',
    title: 'NKORA COFFEE • BRAND IDENTITY',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1513521773210-0cc22dfee8db?w=800&q=75&auto=format',
  },
  {
    id: '3',
    title: 'Urban Architecture Series',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1548566862-2c9b1fed780a?w=800&q=75&auto=format',
  },
  {
    id: '4',
    title: 'ChopDock',
    category: 'Industrial Design',
    image: '/chopdock.png',
  },
  {
    id: '5',
    title: 'Smart Home Interface',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?w=800&q=75&auto=format',
  },
  {
    id: '6',
    title: 'Interactive Installation',
    category: 'Phygital',
    image: 'https://images.unsplash.com/photo-1684862030284-6b24307ebd4a?w=800&q=75&auto=format',
  },
];

interface WorksOverviewPageProps {
  onNavigate: (page: 'home' | 'about' | 'works') => void;
  onViewCaseStudy: (projectId: string) => void;
}

export function WorksOverviewPage({ onNavigate, onViewCaseStudy }: WorksOverviewPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Phygital', 'Industrial Design', 'UI/UX', 'Photography'];

  const filteredProjects =
    selectedCategory === 'ALL'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="relative w-full min-h-screen bg-black">
      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navigation onNavigate={onNavigate} currentPage="works" />

        {/* Works Overview Content */}
        <div className="pt-32 pb-24 px-6 lg:px-12">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
              {/* Left Sidebar - Categories */}
              <motion.div
                className="lg:w-64 shrink-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <nav className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-4 py-2 transition-all duration-300 ${
                        selectedCategory === category
                          ? 'text-white'
                          : 'text-white/40 hover:text-white/70'
                      }`}
                    >
                      {category.toUpperCase()}
                    </button>
                  ))}
                </nav>
              </motion.div>

              {/* Right Content - Projects Grid */}
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      className="group cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      onClick={() => {
                        // Navigate to case study page if available
                        if (project.caseStudyId) {
                          onViewCaseStudy(project.caseStudyId);
                        }
                      }}
                    >
                      {/* Project Image */}
                      <div className="aspect-[4/3] bg-white/5 rounded-lg overflow-hidden mb-6">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      {/* Project Info */}
                      <div className="space-y-2">
                        <p className="text-white/40 text-sm uppercase tracking-wider">
                          {project.category}
                        </p>
                        <h3 className="text-white text-xl group-hover:text-white/70 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-white/50 text-sm group-hover:text-white/70 transition-colors duration-300">
                          View Process →
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* No Results */}
                {filteredProjects.length === 0 && (
                  <div className="text-center py-20">
                    <p className="text-white/40 text-xl">No projects found in this category.</p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
