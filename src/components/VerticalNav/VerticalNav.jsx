import { useEffect, useState } from 'react';

const sections = ['home', 'about', 'skills', 'experience', 'projects'];

export default function VerticalNav() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-8 md:top-10 left-1/2 -translate-x-1/2 z-40 hidden md:flex flex-row gap-8 mix-blend-difference items-center pointer-events-auto mt-2">
      {sections.map((section, index) => (
        <a
          key={section}
          href={`#${section}`}
          className="flex flex-col items-center gap-2 group"
        >
          <span className={`text-sm tracking-[0.2em] transition-all duration-500 uppercase font-medium ${active === section ? 'opacity-100 text-white' : 'opacity-50 text-gray-400 group-hover:opacity-100 group-hover:text-white'
            }`}>
            {section}
          </span>
          <div className={`h-[2px] transition-all duration-500 ${active === section ? 'w-8 bg-white' : 'w-4 bg-gray-500 group-hover:bg-white group-hover:w-8'
            }`} />
        </a>
      ))}
    </div>
  );
}
