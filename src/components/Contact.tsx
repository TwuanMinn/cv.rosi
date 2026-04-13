import { useScrollRevealAll } from '../hooks/useScrollReveal';
import MagneticButton from './MagneticButton';

export default function Contact() {
  const ref = useScrollRevealAll<HTMLElement>(0.1);

  return (
    <section ref={ref} className="py-16 md:py-32 bg-surface px-6 md:px-8" id="contact">
      <div className="max-w-screen-xl mx-auto bg-primary-fixed p-8 md:p-12 lg:p-24 rounded-lg relative overflow-hidden" data-reveal="fade-in">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-headline font-extrabold text-on-primary-fixed tracking-tighter leading-none mb-8">
            Sẵn sàng để hợp tác?
          </h2>
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
        <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] bg-primary opacity-10 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
