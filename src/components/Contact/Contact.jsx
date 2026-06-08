import { motion } from 'framer-motion';
import contactBg from '../../assets/background_4.jpg';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-32 px-6 flex flex-col justify-between relative z-10 overflow-hidden bg-[#050505]">
      <div className="flex-1 flex items-center justify-center relative z-10 w-full overflow-hidden">
        {/* Premium Ambient Background Image & Glow */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          <img
            src={contactBg}
            alt="Contact Ambient Background"
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-60" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center relative z-10"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-12">
            Let's Talk
          </p>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ankitkumar18003@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative inline-block"
          >
            <h2 className="text-huge font-bold uppercase tracking-tighter hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 transition-all duration-500">
              SAY HELLO
            </h2>
            <div className="absolute -bottom-4 left-0 right-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
        </motion.div>
      </div>

      <footer className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 uppercase tracking-widest pt-12 border-t border-white/10">
        <div>© {new Date().getFullYear()} Ankit Kumar</div>
        <div className="flex flex-wrap gap-8 items-center z-10">
          <a href="https://www.linkedin.com/in/ankit-kumar-6450b620b/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/Ankit18jsr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="https://wa.me/qr/P3XCJ7H746V4H1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2" aria-label="WhatsApp">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.69 1.97 14.221 1.01 11.608 1.01 6.172 1.01 1.748 5.377 1.744 10.806c-.001 1.702.447 3.363 1.298 4.843l-.986 3.6 3.69-.968zm13.12-6.52c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </footer>
    </section>
  );
}
