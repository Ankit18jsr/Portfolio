import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth < 768;
    if (isTouchDevice || isSmallScreen) {
      setIsVisible(false);
      return;
    }
    setIsVisible(true);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if we are hovering over an element that should trigger expansion
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-expand')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
      animate={{
        x: mousePosition.x - (isHovering ? 32 : 8),
        y: mousePosition.y - (isHovering ? 32 : 8),
        width: isHovering ? 64 : 16,
        height: isHovering ? 64 : 16,
      }}
      transition={{
        type: "spring",
        stiffness: 1000,
        damping: 50,
        mass: 0.1
      }}
    >
      <motion.div
        animate={{ opacity: isHovering ? 1 : 0 }}
        className="text-[8px] tracking-widest font-bold text-black uppercase"
      >
        {isHovering ? 'View' : ''}
      </motion.div>
    </motion.div>
  );
}
