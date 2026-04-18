import { lazy, Suspense } from 'react';
import { useScrollRevealAll } from '../hooks/useScrollReveal';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

const GlobeDemo = lazy(() => import('./globe-demo'));

export default function Contact() {
  const ref = useScrollRevealAll<HTMLElement>(0.1);

  return (
    <section ref={ref} className="py-16 md:py-32 bg-surface px-4 sm:px-6 md:px-8" id="contact">
      <div
        className="relative max-w-screen-xl mx-auto bg-primary-fixed rounded-lg overflow-hidden p-6 sm:p-8 md:p-12 lg:p-24 flex flex-col md:block gap-8"
        data-reveal="fade-in"
      >
        <div className="relative z-10 md:max-w-3xl md:w-2/3">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-headline font-extrabold text-on-primary-fixed tracking-tighter leading-none">
              Sẵn sàng để hợp tác?
            </h2>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
              <img
                src="/contact-icon.png"
                alt="Contact Icon"
                className="w-[96px] sm:w-[120px] md:w-[150px] object-contain drop-shadow-2xl hover:scale-105 transition-transform"
              />
            </motion.div>
          </div>
          <p className="text-base sm:text-lg md:text-2xl text-on-primary-fixed opacity-90 font-body leading-relaxed mb-8 sm:mb-12">
            Luôn tìm kiếm cơ hội tham gia các dự án giáo dục và phát triển thương mại, quản lý đào tạo nhân sự.
          </p>
          <MagneticButton>
            <a
              href="mailto:thaiduyen809@gmail.com"
              className="inline-flex items-center gap-3 bg-on-primary-fixed text-primary-fixed px-6 py-3 sm:px-8 sm:py-4 lg:py-5 lg:px-10 rounded-xl font-bold tracking-tight group hover:scale-105 transition-all duration-300 cubic-bezier-transition no-underline text-base sm:text-lg"
            >
              Liên hệ ngay
              <span className="material-symbols-outlined text-xl sm:text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                arrow_outward
              </span>
            </a>
          </MagneticButton>
        </div>

        {/* Decorative background glow */}
        <div className="absolute right-[-10%] top-[-10%] w-[320px] sm:w-[420px] lg:w-[500px] aspect-square bg-[#00513f] opacity-20 rounded-full blur-3xl pointer-events-none" />

        {/* Interactive 3D Globe — flows inline on mobile, right-half overlay on md+ */}
        <div className="relative w-full h-[280px] xs:h-[320px] sm:h-[380px] md:absolute md:inset-y-0 md:right-0 md:top-0 md:w-1/2 md:h-full z-20 pointer-events-none">
          <Suspense fallback={null}>
            <GlobeDemo />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
