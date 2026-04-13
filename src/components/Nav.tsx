import { motion } from 'framer-motion';
import { useState } from 'react';

type SectionId = 'experience' | 'skills' | 'contact';

export default function Nav() {
  const [active, setActive] = useState<SectionId>('experience');

  const NAV_ITEMS = [
    { id: 'experience', label: 'Kinh nghiệm' },
    { id: 'skills', label: 'Kỹ năng' },
    { id: 'contact', label: 'Liên hệ' }
  ] as { id: SectionId; label: string }[];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: SectionId) => {
    e.preventDefault();
    setActive(id);
    const elem = document.getElementById(id);
    if (elem) {
      const navHeight = 80; // approximate height of header
      const elemPosition = elem.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elemPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f8faf7]/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 md:py-6 max-w-screen-2xl mx-auto">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-xl md:text-2xl font-bold tracking-tighter text-[#00513f] font-headline cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActive('experience');
          }}
        >
          Thái Duyên
        </motion.div>
        <div className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <motion.a
                key={id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`relative pb-1 font-headline tracking-tight transition-colors duration-300 ${
                  isActive ? 'text-[#00513f] font-bold' : 'text-[#3e4944] font-medium hover:text-[#00513f]'
                }`}
                href={`#${id}`}
                onClick={(e) => handleScroll(e, id)}
              >
                {label}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-[#00513f]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
        </div>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:thaiduyen809@gmail.com"
          className="bg-primary text-on-primary px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-sm md:text-base font-bold tracking-tight opacity-100 transition-colors duration-300 no-underline whitespace-nowrap shadow-sm hover:shadow-md"
        >
          Liên hệ ngay
        </motion.a>
      </div>
    </nav>
  )
}
