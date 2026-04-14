import { useScrollRevealAll } from '../hooks/useScrollReveal';
import RotatingText from './ui/RotatingText';
import { motion } from 'framer-motion';

export default function About() {
  const ref = useScrollRevealAll<HTMLElement>(0.1);

  return (
    <section ref={ref} className="py-16 md:py-32 bg-surface-container-lowest relative overflow-hidden" id="about">
      <div className="absolute -left-20 top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div data-reveal="left">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-tight mb-6">Câu chuyện<br/>của tôi.</h2>
            <RotatingText
              texts={['Sứ mệnh truyền giáo dục', 'Tận tâm vì thế hệ trẻ', 'Phát triển tư duy toàn diện']}
              mainClassName="text-xl md:text-2xl text-on-surface-variant font-body mb-8 font-medium italic"
              staggerDuration={0.03}
              splitBy="characters"
              rotationInterval={3000}
            />
            <div className="space-y-6 text-on-surface-variant font-body text-base md:text-lg leading-relaxed">
              <p>
                Tôi là sinh viên chuyên ngành Kinh doanh Quốc tế tại UFM University — quyết định song hành cùng hành trình hơn 4 năm tận tâm bồi dưỡng và gia sư cho nhiều thế hệ học sinh. 
              </p>
              <p>
                Triết lý giáo dục của tôi là kết hợp tư duy logic mạch lạc từ phương pháp phân tích với sự tận tụy, linh hoạt của người truyền lửa. Từ đó, xây dựng nền tảng vững chắc không chỉ về kiến thức học thuật mà còn về kỹ năng giải quyết vấn đề, định hình phương pháp luận rõ ràng cho các em.
              </p>
            </div>
          </div>
          
          <div className="relative w-full flex flex-col items-center justify-center group" data-reveal="right" style={{ transitionDelay: '200ms' }}>
               <motion.div
                 animate={{ y: [0, -20, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               >
                 <img src="/glassmorphic-icon.png" alt="Icon tiềm năng" className="w-[80vw] h-[80vw] max-w-[480px] max-h-[480px] md:max-w-none md:max-h-none md:w-[640px] md:h-[640px] object-contain transition-all duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100 drop-shadow-2xl" />
               </motion.div>
               <p className="mt-8 font-label font-bold tracking-[0.2em] uppercase text-primary/60 group-hover:text-primary transition-colors duration-500">
                 Khơi Dậy Tiềm Năng
               </p>
          </div>
        </div>
      </div>
    </section>
  )
}
