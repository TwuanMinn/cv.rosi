import { lazy, Suspense } from 'react';
import { useScrollRevealAll } from '../hooks/useScrollReveal';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

const Lanyard = lazy(() => import('./ui/Lanyard'));

export default function Contact() {
  const ref = useScrollRevealAll<HTMLElement>(0.1);

  return (
    <section ref={ref} className="py-16 md:py-32 bg-surface px-6 md:px-8" id="contact">
      <div className="max-w-screen-xl mx-auto bg-primary-fixed p-8 md:p-12 lg:p-24 rounded-lg relative overflow-hidden" data-reveal="fade-in">
        <div className="relative z-10 max-w-3xl md:w-2/3">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-headline font-extrabold text-on-primary-fixed tracking-tighter leading-none">
              Sẵn sàng để hợp tác?
            </h2>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
              <img 
                src="/contact-icon.png" 
                alt="Contact Icon" 
                className="w-[120px] md:w-[150px] object-contain drop-shadow-2xl hover:scale-105 transition-transform"
              />
            </motion.div>
          </div>
          <p className="text-lg md:text-2xl text-on-primary-fixed opacity-90 font-body leading-relaxed mb-12">
            Luôn tìm kiếm cơ hội tham gia các dự án giáo dục và phát triển thương mại, quản lý đào tạo nhân sự.
          </p>
          <MagneticButton>
            <a
              href="mailto:thaiduyen809@gmail.com"
              className="inline-flex items-center gap-3 bg-on-primary-fixed text-primary-fixed px-8 py-4 lg:py-5 lg:px-10 rounded-xl font-bold tracking-tight group hover:scale-105 transition-all duration-300 cubic-bezier-transition no-underline text-lg"
            >
              Liên hệ ngay
              <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                arrow_outward
              </span>
            </a>
          </MagneticButton>
        </div>

        {/* Decorative background elements */}
        <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] bg-[#00513f] opacity-20 rounded-full blur-3xl pointer-events-none" />

        {/* 3D Interactive Lanyard Nametag */}
        <div className="absolute right-0 top-0 w-full sm:w-1/2 h-full z-20 cursor-grab active:cursor-grabbing hidden sm:block">
          <Suspense fallback={null}>
            <Lanyard transparent={true} />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
