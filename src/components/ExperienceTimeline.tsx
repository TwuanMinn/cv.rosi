import { useScrollRevealAll } from '../hooks/useScrollReveal';
import TrueFocus from './ui/TrueFocus';
import Folder from './ui/Folder';

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
                sentence="Hơn 4 năm,chuyên ngành"
                separator=","
                borderColor="#00513f"
                glowColor="rgba(0, 81, 63, 0.4)"
              />
              <p className="mt-6 md:mt-8 text-base md:text-lg text-on-surface-variant font-body leading-relaxed">
                Hành trình giảng dạy thực tế song song cùng kiến thức đại học tại UFM University — không ngừng cập nhật để trở thành một nhà giáo dục ưu tú.
              </p>
            </div>
          </div>
          <div className="md:w-2/3 relative mt-8 md:mt-0">
            {/* Vertical Line */}
            <div className="absolute left-[17px] md:left-[21px] top-4 bottom-2 w-0.5 bg-outline-variant/60 rounded-full"></div>

            <div className="space-y-12 md:space-y-16">
              {/* Item 1 */}
              <div className="relative pl-12 md:pl-16" data-reveal="up">
                {/* Timeline Dot */}
                <span className="absolute left-[9px] md:left-[13px] top-1.5 w-[18px] h-[18px] bg-primary rounded-full ring-4 ring-surface-container-low z-10 flex items-center justify-center">
                  <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-60"></span>
                </span>
                
                <h3 className="text-xl md:text-2xl font-headline font-bold text-primary mb-1">
                  Gia sư Trung học
                </h3>
                <span className="inline-block px-3 py-1 bg-surface-container text-xs md:text-sm font-label font-medium text-on-surface-variant rounded-full mb-4">
                  2025 - Hiện tại
                </span>
                <ul className="space-y-2 mb-4 text-sm md:text-base text-on-surface-variant font-body leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 mt-1">✦</span>
                    <span>Chuyên giảng dạy và bồi dưỡng (gia sư) cho học sinh đến từ Vstar School, cùng học sinh thuộc hai lớp 9 của trường THCS Phạm Hữu Lầu.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 mt-1">✦</span>
                    <span>Xây dựng lộ trình học tập cá nhân hóa, giúp học sinh nắm vững kiến thức trọng tâm và phát triển tư duy phản biện.</span>
                  </li>
                </ul>
              </div>

              {/* Experience Item 2 */}
              <div className="relative pl-12 md:pl-16" data-reveal="fade-in" style={{ transitionDelay: '200ms' }}>
                <span className="absolute left-[9px] md:left-[13px] top-1.5 w-[18px] h-[18px] bg-primary rounded-full ring-4 ring-surface-container-low z-10 flex items-center justify-center">
                  <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-50" style={{animationDelay: '100ms'}}></span>
                </span>
                <span className="text-sm font-label uppercase tracking-widest text-on-surface-variant">
                  2024 — 2025
                </span>
                <h3 className="text-2xl font-headline font-bold text-on-surface mt-2">
                  Gia sư Tiểu học & THCS
                </h3>
                <p className="text-primary font-medium">Học sinh công lập & Quốc tế</p>
                <p className="mt-4 text-on-surface-variant font-body leading-relaxed">
                  Đảm nhận dạy kèm (gia sư) cho học sinh Khối Lớp 8 & 9 (Phạm Hữu Lầu), Khối Lớp 8 (Bến Vân Đồn), và Lớp 4 (Vista School). Theo sát tiến độ học tập và quản lý giờ học linh hoạt.
                </p>
              </div>
              
              {/* Experience Item 3 */}
              <div className="relative pl-12 md:pl-16" data-reveal="fade-in" style={{ transitionDelay: '300ms' }}>
                <span className="absolute left-[9px] md:left-[13px] top-1.5 w-[18px] h-[18px] bg-primary rounded-full ring-4 ring-surface-container-low z-10 flex items-center justify-center">
                  <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-50" style={{animationDelay: '300ms'}}></span>
                </span>
                <span className="text-sm font-label uppercase tracking-widest text-on-surface-variant">
                  2021 — 2024
                </span>
                <h3 className="text-2xl font-headline font-bold text-on-surface mt-2">
                  Chuyên viên Giảng dạy
                </h3>
                <p className="text-primary font-medium">Nhiều đơn vị trường học</p>
                <p className="mt-4 text-on-surface-variant font-body leading-relaxed">
                  Xây dựng nền tảng từ Khối Lớp 1 (tiếng Việt tại Korean School) đến Khối Lớp 8. Củng cố kỹ năng truyền đạt kiến thức vững chắc trong nhiều môi trường khác biệt.
                </p>
              </div>

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

                <div className="mt-12 mb-4 flex items-center gap-6 md:gap-10">
                  <Folder 
                    color="#00513f" 
                    size={1.6}
                    items={[
                      <div className="px-2 pt-2 text-[10px] leading-tight text-[#002118] font-body text-center h-full flex items-center justify-center border-[0.5px] border-primary/20 rounded-[10px] bg-gradient-to-br from-white to-[#f0fdf5]">
                        <span className="font-bold text-primary block mb-1">95% học sinh</span><br/>tiến bộ<br/>vượt bậc
                      </div>,
                      <div className="px-2 pt-2 text-[10px] leading-tight text-[#002118] font-body text-center h-full flex items-center justify-center border-[0.5px] border-primary/20 rounded-[10px] bg-gradient-to-br from-white to-[#f0fdf5]">
                        <span className="font-bold text-primary block mb-1">Đỗ trường</span><br/>chuyên<br/>top đầu
                      </div>,
                      <div className="px-2 pt-2 text-[10px] leading-tight text-[#002118] font-body text-center h-full flex items-center justify-center border-[0.5px] border-primary/20 rounded-[10px] bg-gradient-to-br from-white to-[#f0fdf5]">
                        <span className="font-bold text-primary block mb-1">Làm chủ</span><br/>tư duy<br/>logic
                      </div>
                    ]}
                  />
                  <div className="text-[10px] md:text-sm font-label font-bold text-primary uppercase tracking-widest">
                    &larr; Click thả hồ sơ <br/><span className="text-on-surface-variant font-normal normal-case">Thành tích học viên</span>
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
