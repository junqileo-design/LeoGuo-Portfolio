import { Mail, Linkedin, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer id="contact" className="relative py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mb-8 tracking-tight">
              Let's Work Together
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Have a project in mind? I'd love to hear about it. 
              Get in touch and let's create something amazing.
            </p>
            
            <motion.a
              href="mailto:hello@leoguo.design"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-white/90 transition-all duration-300 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </motion.a>
          </motion.div>

          <motion.div 
            className="lg:text-right"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white text-xl mb-6 tracking-tight">
              Contact Information
            </h3>
            <div className="space-y-4 text-white/60">
              <p>
                <a href="mailto:hello@leoguo.design" className="hover:text-white transition-colors">
                  hello@leoguo.design
                </a>
              </p>
              <p>
                <a href="tel:+6512345678" className="hover:text-white transition-colors">
                  +65 1234 5678
                </a>
              </p>
              <p className="text-white/40">
                Singapore
              </p>
            </div>

            <div className="flex gap-6 mt-8 lg:justify-end">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <Twitter size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Leo Guo. All rights reserved.
            </p>
            <div className="flex gap-6 text-white/40 text-sm">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}