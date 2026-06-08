import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 10) + 5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
      setProgress(current);
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[10000] bg-[#020202] flex items-end justify-between p-6 md:p-12 text-white"
    >
      <div className="font-editorial italic tracking-widest text-sm md:text-base text-gray-500 uppercase">
        Loading...
      </div>
      <div className="text-6xl md:text-8xl font-sans font-medium leading-none tabular-nums text-white">
        {progress}%
      </div>
    </motion.div>
  );
}
