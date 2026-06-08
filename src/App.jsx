import { useState } from 'react';
import { useLenis } from './hooks/useLenis';
import { AnimatePresence } from 'framer-motion';
import AuraBackground from './components/AuraBackground/AuraBackground';
import Navbar from './components/Navbar/Navbar';
import VerticalNav from './components/VerticalNav/VerticalNav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Preloader from './components/Preloader/Preloader';

function AppContent() {
  useLenis();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <AuraBackground />
      <Navbar />
      <VerticalNav />
      
      <main className="relative w-full">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default function App() {
  return <AppContent />;
}
