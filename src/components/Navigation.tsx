import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  onNavigate?: (page: 'home' | 'about' | 'works') => void;
  currentPage?: 'home' | 'about' | 'works';
}

export function Navigation({ onNavigate, currentPage = 'home' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleNavigation = (page: 'home' | 'about' | 'works') => {
    if (onNavigate) {
      onNavigate(page);
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center h-20">
          {/* Desktop Navigation - Imported Figma Design */}
          <div className="content-stretch hidden md:flex justify-between items-end relative w-full">
            <motion.p 
              className="font-['Montserrat:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Leo Guo<span className="text-[rgba(255,255,255,0.53)]"> </span>
              <span className="font-['Montserrat:Medium',sans-serif] font-medium text-[rgba(255,255,255,0.53)]">{`| `}</span>
              <span className="font-['Montserrat:Medium',sans-serif] font-medium text-[rgba(255,255,255,0.53)]">Designer</span>
            </motion.p>
            <motion.div 
              className="content-stretch flex font-['Montserrat:SemiBold',sans-serif] font-semibold gap-[72px] items-center leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button onClick={() => handleNavigation('home')} className="relative shrink-0 hover:opacity-60 transition-opacity">HOME</button>
              <button onClick={() => handleNavigation('about')} className="relative shrink-0 hover:opacity-60 transition-opacity">MEET LEO</button>
              <button onClick={() => scrollToSection('contact')} className="relative shrink-0 hover:opacity-60 transition-opacity">CONTACT</button>
              <button onClick={() => handleNavigation('works')} className="relative shrink-0 hover:opacity-60 transition-opacity">WORKS</button>
              <button onClick={() => {}} className="relative shrink-0 hover:opacity-60 transition-opacity">NEWS</button>
            </motion.div>
          </div>

          {/* Mobile Logo - Left Aligned */}
          <motion.p 
            className="md:hidden font-['Montserrat:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Leo Guo<span className="text-[rgba(255,255,255,0.53)]"> </span>
            <span className="font-['Montserrat:Medium',sans-serif] font-medium text-[rgba(255,255,255,0.53)]">{`| `}</span>
            <span className="font-['Montserrat:Medium',sans-serif] font-medium text-[rgba(255,255,255,0.53)]">Designer</span>
          </motion.p>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 ml-auto"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-black/95 backdrop-blur-sm"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-4">
              <button
                onClick={() => handleNavigation('home')}
                className="block w-full text-left text-white py-2 hover:opacity-60 transition-opacity text-[20px]"
              >
                HOME
              </button>
              <button
                onClick={() => handleNavigation('about')}
                className="block w-full text-left text-white py-2 hover:opacity-60 transition-opacity text-[20px]"
              >
                MEET LEO
              </button>
              <button
                onClick={() => handleNavigation('works')}
                className="block w-full text-left text-white py-2 hover:opacity-60 transition-opacity text-[20px]"
              >
                WORKS
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-white py-2 hover:opacity-60 transition-opacity text-[20px]"
              >
                CONTACTS
              </button>
              <button
                onClick={() => {}}
                className="block w-full text-left text-white py-2 hover:opacity-60 transition-opacity text-[20px]"
              >
                NEWS
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}