import { useScrollRevealAll } from '../hooks/useScrollReveal';
import { motion } from 'framer-motion';
import StudentOutcomes from './StudentOutcomes';

export default function Result() {
  const ref = useScrollRevealAll<HTMLElement>(0.1);

  const reviews = [
    {
      name: "Phụ huynh bé Khôi",
      role: "Trường THCS Phạm Hữu Lầu",
      quote: "Cô giáo Duyên dạy cực kỳ có tâm. Từ một bé rất sợ các môn tự nhiên và kém tập trung, Khôi bây giờ đã tự giác học bài và đạt điểm 9 trong kì thi giữa kì. Nhờ sự kiên nhẫn của cô mà bé đã tiến bộ và tự tin hơn rất nhiều."
    },
    {
      name: "Thanh Trúc",
      role: "Đỗ nguyện vọng Chuyên",
      quote: "Những kỹ năng tư duy và phản biện mà cô Duyên dạy rất thực tế chứ không rập khuôn sách giáo khoa. Nhờ phương pháp thiết lập mục tiêu khoa học của cô mà em đã nắm vững kiến thức trọng tâm và đỗ vào trường chuyên đúng ý nguyện."
    },
    {
      name: "Phụ huynh bé Nam",
      role: "Vstar School",
      quote: "Cô không chỉ theo sát bài vở mà còn liên tục cập nhật tình hình học tập với gia đình. Phương pháp dạy linh hoạt, bé Nam rất thích học cùng cô vì bài giảng rất dễ hiểu và không bao giờ bị áp lực điểm số nặng nề."
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-32 bg-[#00513f] text-on-primary relative overflow-hidden" id="result">
       <div className="absolute -top-40 -left-20 w-96 h-96 bg-[#9ef3d6]/10 rounded-full blur-[100px] z-0 pointer-events-none" />
       <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-[#9ef3d6]/10 rounded-full blur-[100px] z-0 pointer-events-none" />
       
      <div className="max-w-screen-2xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center" data-reveal="up">
          <motion.div
            className="mb-8"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <img 
              src="/results-icon.png" 
              alt="Testimonials and results" 
              className="w-[240px] md:w-[360px] object-contain drop-shadow-2xl opacity-90 transition-all duration-500 hover:opacity-100 hover:scale-105"
            />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tight mb-6">Đánh giá về tôi.</h2>
          <p className="text-white/90 font-body md:text-xl max-w-2xl mx-auto leading-relaxed">
            Sự tin tưởng và kết quả học tập của các em học sinh, cùng sự an tâm của quý phụ huynh là minh chứng thành công vững chắc nhất.
          </p>
        </div>

        <div className="mb-16 md:mb-24">
          <StudentOutcomes />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((res, i) => (
            <div 
              key={i} 
              className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2rem] hover:bg-white/10 transition-all duration-500 cubic-bezier-transition backdrop-blur-md group"
              data-reveal="up" 
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex gap-1 mb-6 text-[#9ef3d6]">
                    {[...Array(5)].map((_, idx) => (
                      <span key={idx} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="text-white/90 font-body text-base md:text-lg leading-relaxed italic mb-8 relative">
                    <span className="absolute -top-4 -left-3 text-4xl text-white/10 font-headline font-black leading-none">"</span>
                    {res.quote}
                    <span className="absolute -bottom-2 -right-1 text-4xl text-white/10 font-headline font-black leading-none">"</span>
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold font-headline text-xl text-white group-hover:bg-[#9ef3d6] group-hover:text-[#00513f] transition-colors duration-500 shadow-inner">
                    {res.name.split(' ').pop()?.[0]}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-headline text-white leading-tight">
                      {res.name}
                    </h4>
                    <p className="text-sm font-label uppercase tracking-wider text-[#9ef3d6]/80 mt-1">
                      {res.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
