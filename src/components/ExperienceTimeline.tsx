import { useScrollRevealAll } from '../hooks/useScrollReveal';
import TrueFocus from './ui/TrueFocus';
import Folder from './ui/Folder';
import { motion } from 'framer-motion';

export default function ExperienceTimeline() {
  const ref = useScrollRevealAll<HTMLElement>(0.1);

  return (
    <section ref={ref} className="py-16 md:py-32 bg-surface-container-low" id="experience">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="md:w-1/3" data-reveal="left">
            <div className="sticky top-24 lg:top-32">
              <h2 className="text-2xl md:text-3xl font-headline font-bold text-on-surface-variant tracking-tight uppercase mb-4 opacity-50">
                Học vấn & Kinh nghiệm
              </h2>
              <TrueFocus 
                sentence="Hơn 4 năm,kinh nghiệm"
                separator=","
                borderColor="#00513f"
                glowColor="rgba(0, 81, 63, 0.4)"
              />
              <p className="mt-6 md:mt-8 text-base md:text-lg text-on-surface-variant font-body leading-relaxed">
                Hành trình làm gia sư đúc kết kinh nghiệm thực tế song song với quá trình học tập tại UFM University — không ngừng nỗ lực truyền đạt tri thức và phát triển bản thân.
              </p>
              <motion.div
                className="mt-12 md:mt-16 flex justify-center left-0 relative"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              >
                <img 
                  src="/vr-education-icon.png" 
                  alt="VR Education Process" 
                  className="w-[240px] md:w-[360px] lg:w-[420px] object-contain drop-shadow-2xl opacity-95 group-hover:scale-105 transition-all duration-500 hover:opacity-100"
                />
              </motion.div>
            </div>
          </div>
          <div className="md:w-2/3 relative mt-8 md:mt-0">
            {/* Vertical Line */}
            <div className="absolute left-[17px] md:left-[21px] top-4 bottom-2 w-0.5 bg-outline-variant/60 rounded-full"></div>

            <div className="space-y-12 md:space-y-16">
              {[
                {
                  year: "2025 - 2026",
                  classes: ["Lớp 7 - Nam Sài Gòn", "Lớp 5 - Vista School", "Lớp 9 - Bến Vân Đồn", "Lớp 9 - Phạm Hữu Lầu"]
                },
                {
                  year: "2024 - 2025",
                  classes: ["Lớp 9 - Phạm Hữu Lầu", "Lớp 4 - Vista School", "Lớp 8 - Bến Vân Đồn", "Lớp 8 - Phạm Hữu Lầu"]
                },
                {
                  year: "2023 - 2024",
                  classes: ["Lớp 3 - Vista School", "Lớp 2 - Tân Hưng", "Lớp 8 - Phạm Hữu Lầu", "Lớp 6 - Nam Sài Gòn"]
                },
                {
                  year: "2022 - 2023",
                  classes: ["Lớp 2 - Vista School", "Lớp 7 - Phạm Hữu Lầu"]
                },
                {
                  year: "2021 - 2022",
                  classes: ["Lớp 1 - Vista School", "Lớp 1 (Tiếng Việt) - Korean School", "Lớp 5 - Phạm Hữu Lầu", "Lớp 6 - Phạm Hữu Lầu"]
                }
              ].map((item, index) => (
                <div key={index} className="relative pl-12 md:pl-16" data-reveal="up" style={{ transitionDelay: `${index * 100}ms` }}>
                  <span className="absolute left-[9px] md:left-[13px] top-1.5 w-[18px] h-[18px] bg-primary rounded-full ring-4 ring-surface-container-low z-10 flex items-center justify-center">
                    {index === 0 && <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-60"></span>}
                  </span>
                  
                  <h3 className="text-xl md:text-2xl font-headline font-bold text-primary mb-4">
                    Niên khóa {item.year}
                  </h3>
                  
                  <ul className="space-y-2 text-sm md:text-base text-on-surface-variant font-body leading-relaxed">
                    {item.classes.map((cls, i) => (
                      <li key={i} className="flex items-start font-medium">
                        <span className="text-secondary mr-3 mt-0.5 opacity-60">✦</span>
                        <span>{cls}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              

              {/* Education Item 1 */}
              <div className="relative pl-12 md:pl-16" data-reveal="fade-in" style={{ transitionDelay: '400ms' }}>
                <span className="absolute left-[9px] md:left-[13px] top-1.5 w-[18px] h-[18px] bg-primary rounded-full ring-4 ring-surface-container-low z-10 flex items-center justify-center">
                  <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-50" style={{animationDelay: '500ms'}}></span>
                </span>
                <span className="text-sm font-label uppercase tracking-widest text-on-surface-variant">
                  2021 — 2024
                </span>
                <h3 className="text-2xl font-headline font-bold text-on-surface mt-2">
                  Cử nhân Kinh doanh Quốc tế
                </h3>
                <p className="text-primary font-medium">UFM University</p>
                <p className="mt-4 text-on-surface-variant font-body leading-relaxed">
                  Ngành Kinh doanh Quốc tế, tập trung phát triển kỹ năng tư duy phản biện, thương mại toàn cầu, tài chính doanh nghiệp và quản trị chiến lược.
                </p>

                <div className="mt-24 md:mt-32 pt-12 border-t border-outline-variant/30 flex justify-start items-center gap-6 md:gap-10 w-full pl-0 md:pl-12 lg:pl-24">
                  <Folder 
                    color="#00513f" 
                    size={1.6}
                    items={[
                      <div className="p-1 text-[8px] md:text-[10px] leading-normal text-[#002118] font-body text-center h-full w-full flex flex-col items-center justify-center border-[0.5px] border-primary/20 rounded-[10px] bg-gradient-to-br from-white to-[#f0fdf5]">
                        <span className="font-bold text-primary mb-1">95% học sinh</span>
                        <span>tiến bộ</span>
                        <span>vượt bậc</span>
                      </div>,
                      <div className="p-1 text-[8px] md:text-[10px] leading-normal text-[#002118] font-body text-center h-full w-full flex flex-col items-center justify-center border-[0.5px] border-primary/20 rounded-[10px] bg-gradient-to-br from-white to-[#f0fdf5]">
                        <span className="font-bold text-primary mb-1">Đỗ trường</span>
                        <span>chuyên</span>
                        <span>top đầu</span>
                      </div>,
                      <div className="p-1 text-[8px] md:text-[10px] leading-normal text-[#002118] font-body text-center h-full w-full flex flex-col items-center justify-center border-[0.5px] border-primary/20 rounded-[10px] bg-gradient-to-br from-white to-[#f0fdf5]">
                        <span className="font-bold text-primary mb-1">Làm chủ</span>
                        <span>tư duy</span>
                        <span>logic</span>
                      </div>
                    ]}
                  />
                  <div className="text-[10px] md:text-sm font-label font-bold text-primary uppercase tracking-widest text-left">
                    &larr; Click thả hồ sơ<br/><span className="text-on-surface-variant font-normal normal-case">Thành tích học viên</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
