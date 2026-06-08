import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from '../Magnetic/Magnetic';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-8 md:px-12 md:py-10 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
        <div className="pointer-events-auto">
          <Magnetic>
            <button 
              onClick={() => setIsOpen(true)}
              className="text-sm tracking-[0.2em] uppercase hover:opacity-70 transition-opacity font-medium cursor-expand p-4"
            >
              Menu
            </button>
          </Magnetic>
        </div>
        
        <div className="pointer-events-auto">
        </div>
        
        <div className="pointer-events-auto hidden md:block">
          <Magnetic>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
              className="text-sm tracking-[0.2em] uppercase hover:opacity-70 transition-opacity font-medium cursor-expand p-4 block"
            >
              Contact
            </a>
          </Magnetic>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-bg-deep flex flex-col justify-center px-6 md:px-24"
          >
            <div className="absolute top-8 right-6 md:top-10 md:right-12">
              <Magnetic>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-sm tracking-[0.2em] uppercase hover:opacity-70 transition-opacity text-white font-medium cursor-expand p-4"
                >
                  Close
                </button>
              </Magnetic>
            </div>
            
            <nav className="flex flex-col gap-4 md:gap-8">
              {navLinks.map((link, i) => (
                <div key={link.id} className="overflow-hidden">
                  <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(link.id);
                      }}
                      className="text-5xl md:text-7xl font-editorial italic text-white hover:text-gray-400 transition-colors block leading-none cursor-expand"
                    >
                      {link.label}
                    </a>
                  </motion.div>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
