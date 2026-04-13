import { useEffect, useRef } from 'react';
import { useScrollRevealAll } from '../hooks/useScrollReveal';
import MagneticButton from './MagneticButton';
import { Highlight } from './ui/hero-highlight';
import RotatingText from './ui/RotatingText';

export default function Hero() {
  const ref = useScrollRevealAll<HTMLElement>(0.1);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrollY = window.scrollY;
      imageRef.current.style.transform = `translateY(${scrollY * 0.15}px) scale(1.05)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={ref} className="min-h-[100svh] md:min-h-[921px] flex flex-col justify-center px-4 md:px-8 max-w-[100vw] mx-auto relative overflow-hidden pt-28 md:pt-0 pb-16 md:pb-0">
      <div className="grid grid-cols-12 gap-4 md:gap-12 items-center w-full max-w-screen-2xl mx-auto">
        <div className="col-span-7 z-10">
          <div className="flex items-center flex-wrap gap-1 mb-2 md:mb-4">
            <span className="text-[10px] md:text-sm uppercase tracking-widest text-on-surface-variant font-medium font-label">
              Kinh doanh Quốc tế &
            </span>
            <RotatingText
              texts={['Giảng dạy', 'Gia sư', 'Đào tạo', 'Phát triển']}
              mainClassName="text-[10px] md:text-sm uppercase tracking-widest text-primary font-bold font-label bg-[#9ef3d6] px-2 py-0.5 rounded-sm"
              staggerDuration={0.03}
              splitBy="characters"
              rotationInterval={3000}
            />
          </div>
          <div data-reveal="left" style={{ transitionDelay: '100ms' }}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-headline font-extrabold tracking-tighter leading-none text-primary mb-4 md:mb-8 break-words select-none">
              Thái <br />
              Duyên.
            </h1>
          </div>
          <p className="text-sm md:text-xl lg:text-2xl text-on-surface-variant font-body leading-relaxed max-w-2xl mb-6 md:mb-12">
            Sinh viên chuyên ngành Kinh doanh Quốc tế tại UFM University — song hành <Highlight className="text-[#002118]">cùng hành trình hơn 4 năm tận tâm bồi dưỡng và gia sư cho nhiều thế hệ học sinh</Highlight>. Luôn hướng đến việc kết hợp tư duy logic từ thương trường với sự tận tụy của giáo dục.
          </p>
          <div className="flex flex-col gap-2 md:gap-4 mb-6 md:mb-10 w-full">
            {[
              { icon: 'mail', text: 'thaiduyen809@gmail.com', href: 'mailto:thaiduyen809@gmail.com' },
              { icon: 'call', text: '0707 272 484', href: 'tel:0707272484' },
              { icon: 'language', text: 'thaiduyen809@fb.com', href: 'https://fb.com/thaiduyen809' },
              { icon: 'location_on', text: 'Quận 7, Tp. HCM' },
            ].map((contact, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-4">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded shrink-0 bg-[#be312e] text-white flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-[14px] md:text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {contact.icon}
                  </span>
                </div>
                {contact.href ? (
                  <a href={contact.href} className="text-[#002118] font-body text-xs sm:text-sm md:text-lg hover:text-[#00513f] transition-colors no-underline line-clamp-1">
                    {contact.text}
                  </a>
                ) : (
                  <span className="text-[#002118] font-body text-xs sm:text-sm md:text-lg line-clamp-1">
                    {contact.text}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <MagneticButton className="w-full">
              <a
                href="#experience"
                className="bg-primary text-on-primary px-3 md:px-8 py-2 md:py-4 rounded-lg font-bold tracking-tight flex items-center justify-center gap-1 md:gap-2 group transition-all duration-300 cubic-bezier-transition no-underline w-full text-center text-xs md:text-base whitespace-nowrap"
              >
                Xem quá trình làm việc
              </a>
            </MagneticButton>
            <MagneticButton className="w-full">
              <a
                href="/cv.pdf"
                download
                className="border-[1.5px] md:border-2 border-primary text-primary px-3 md:px-8 py-2 md:py-4 rounded-lg font-bold tracking-tight flex items-center justify-center gap-1 md:gap-2 group transition-all duration-300 hover:bg-primary hover:text-on-primary cubic-bezier-transition no-underline w-full text-center text-xs md:text-base whitespace-nowrap"
              >
                Tải CV
              </a>
            </MagneticButton>
          </div>
        </div>

        <div className="col-span-5 relative mt-8 md:mt-0 self-start md:self-center" data-reveal="right" style={{ transitionDelay: '200ms' }}>
          <div className="aspect-[3/4] md:aspect-[4/5] bg-surface-container-high rounded-xl md:rounded-lg overflow-hidden transition-all duration-700 cubic-bezier-transition shadow-2xl">
            <img
              ref={imageRef}
              alt="Thái Duyên"
              className="w-full h-full object-cover object-top will-change-transform"
              src="/profile.png"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-4 -left-4 md:-bottom-10 md:-left-10 w-24 h-24 md:w-48 md:h-48 bg-primary-fixed -z-10 rounded-full opacity-50 blur-2xl md:blur-3xl" />
        </div>
      </div>

      <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden mt-12 md:mt-20 py-4 md:py-6 border-y border-outline-variant/30 mask-image-fade" data-reveal="fade-in" style={{ transitionDelay: '300ms' }}>
        <div className="animate-marquee items-center select-none text-outline-variant">
          {[...Array(6)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex shrink-0 items-center">
              {[
                'Giảng dạy Trung học',
                'Kinh doanh Quốc tế',
                'Thuyết trình 100+ người',
                'MOS Specialist 2019',
                'Quản trị chiến lược'
              ].map((text, i) => (
                <div key={i} className="flex items-center shrink-0">
                  <span className="text-[#00513f] font-headline font-semibold uppercase tracking-[0.15em] text-[10px] md:text-xs md:text-sm">
                    {text}
                  </span>
                  <span className="mx-4 md:mx-6 text-[10px] md:text-xs opacity-50">
                    ✦
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
