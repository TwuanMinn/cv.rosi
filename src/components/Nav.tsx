import { motion } from 'framer-motion';

export default function Nav() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
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
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Thái Duyên
        </motion.div>
        <div className="hidden md:flex items-center gap-10">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-[#00513f] font-bold border-b-2 border-[#00513f] pb-1 font-headline tracking-tight transition-colors duration-300"
            href="#experience"
            onClick={handleScroll}
          >
            Kinh nghiệm
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-[#3e4944] font-medium font-headline tracking-tight hover:text-[#00513f] transition-colors duration-300"
            href="#skills"
            onClick={handleScroll}
          >
            Kỹ năng
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-[#3e4944] font-medium font-headline tracking-tight hover:text-[#00513f] transition-colors duration-300"
            href="#contact"
            onClick={handleScroll}
          >
            Liên hệ
          </motion.a>
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
