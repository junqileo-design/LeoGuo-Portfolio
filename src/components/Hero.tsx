import { motion } from 'framer-motion';
import Frame2 from "../imports/Frame167";

export function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1 
          className="text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.span 
            className="block text-5xl md:text-7xl lg:text-8xl tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Mission-driven Designer
          </motion.span>
        </motion.h1>
      </div>

      {/* Bottom Right Info - Desktop Only */}
      <motion.div 
        className="absolute bottom-12 right-6 lg:right-12 hidden md:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <Frame2 />
      </motion.div>

      {/* Bottom Left Info - Mobile Only */}
      <motion.div 
        className="absolute bottom-12 left-6 md:hidden"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="text-left">
          <p className="text-white text-sm font-['Montserrat:SemiBold',sans-serif] font-semibold">Based in Singapore</p>
          <p className="text-white/60 text-sm font-['Montserrat:SemiBold',sans-serif] font-semibold">Local with a twist</p>
        </div>
      </motion.div>

      
    </section>
  );
}
