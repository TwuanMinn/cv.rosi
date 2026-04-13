import { useScrollRevealAll } from '../hooks/useScrollReveal';
import TrueFocus from './ui/TrueFocus';

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
            <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-outline-variant opacity-30" />
            
            <div className="space-y-16">
              {/* Experience Item 1 */}
              <div className="relative pl-12" data-reveal="fade-in" style={{ transitionDelay: '100ms' }}>
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary ring-4 ring-[#f8faf7] z-10">
                  <div className="absolute top-0 left-0 w-full h-full rounded-full bg-primary animate-[ping_1s_ease-out_infinite] opacity-75"></div>
                </div>
                <span className="text-sm font-label uppercase tracking-widest text-on-surface-variant">
                  2025 — HIỆN TẠI
                </span>
                <h3 className="text-2xl font-headline font-bold text-on-surface mt-2">
                  Gia sư Trung học
                </h3>
                <p className="text-primary font-medium">Học sinh Vstar School, Phạm Hữu Lầu & Bến Vân Đồn</p>
                <p className="mt-4 text-on-surface-variant font-body leading-relaxed">
                  Chuyên giảng dạy và bồi dưỡng (gia sư) cho học sinh đến từ Vstar School, cùng học sinh thuộc hai lớp 9 của trường THCS Phạm Hữu Lầu và trường THCS Bến Vân Đồn.
                </p>
              </div>

              {/* Experience Item 2 */}
              <div className="relative pl-12" data-reveal="fade-in" style={{ transitionDelay: '200ms' }}>
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary ring-4 ring-[#f8faf7] z-10">
                  <div className="absolute top-0 left-0 w-full h-full rounded-full bg-primary animate-[ping_1.2s_ease-out_infinite] opacity-75" style={{animationDelay: '100ms'}}></div>
                </div>
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
              <div className="relative pl-12" data-reveal="fade-in" style={{ transitionDelay: '300ms' }}>
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary ring-4 ring-[#f8faf7] z-10">
                  <div className="absolute top-0 left-0 w-full h-full rounded-full bg-primary animate-[ping_1.2s_ease-out_infinite] opacity-75" style={{animationDelay: '300ms'}}></div>
                </div>
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
              <div className="relative pl-12" data-reveal="fade-in" style={{ transitionDelay: '400ms' }}>
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary ring-4 ring-[#f8faf7] z-10">
                  <div className="absolute top-0 left-0 w-full h-full rounded-full bg-primary animate-[ping_1.2s_ease-out_infinite] opacity-75" style={{animationDelay: '500ms'}}></div>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
