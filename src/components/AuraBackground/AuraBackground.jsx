import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Particles from './Particles';

export default function AuraBackground() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Map scroll progress to a hue rotation or shift
  const yPos1 = useTransform(scrollYProgress, [0, 1], ['-20%', '80%']);
  const yPos2 = useTransform(scrollYProgress, [0, 1], ['80%', '-10%']);
  const yPos3 = useTransform(scrollYProgress, [0, 1], ['30%', '50%']);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 bg-[#020205] overflow-hidden">
      
      {/* Unique 3D Perspective Grid */}
      <div className="absolute inset-0 z-0 flex items-center justify-center perspective-[2000px] opacity-[0.15] mix-blend-overlay">
        <motion.div 
          className="w-[200vw] h-[200vh]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
            rotateX: 60,
            translateY: '20%',
          }}
          animate={{
            backgroundPosition: ['0rem 0rem', '0rem 4rem']
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear"
          }}
        />
      </div>

      <Particles />

      {/* Film Grain */}
      <div className="absolute inset-0 grain-overlay mix-blend-overlay opacity-10 z-20"></div>
      
      {/* Interactive Aurora 1 - Oceanic Cyan */}
      <motion.div
        className="absolute w-[90vw] h-[90vw] max-w-[900px] max-h-[900px] rounded-full blur-[120px] md:blur-[160px] opacity-25 mix-blend-screen z-10"
        style={{
          background: 'radial-gradient(circle, rgba(45,212,191,0.6) 0%, rgba(15,118,110,0) 70%)',
          left: `calc(${mousePosition.x}% - 450px)`,
          top: yPos1,
        }}
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Interactive Aurora 2 - Deep Violet / Blue */}
      <motion.div
        className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full blur-[100px] md:blur-[140px] opacity-30 mix-blend-screen z-10"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(30,58,138,0) 70%)',
          right: `calc(${100 - mousePosition.x}% - 400px)`,
          top: yPos2,
        }}
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 40, -30, 0],
          scale: [1, 1.2, 0.8, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Interactive Aurora 3 - Silver/White Core */}
      <motion.div
        className="absolute w-[100vw] h-[60vw] max-w-[1000px] max-h-[600px] rounded-full blur-[120px] md:blur-[150px] opacity-10 mix-blend-screen left-1/2 -translate-x-1/2 z-10"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 70%)',
          top: yPos3,
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
