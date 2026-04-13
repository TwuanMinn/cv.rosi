export default function ExperienceTimeline() {
  return (
    <section className="py-16 md:py-32 bg-surface-container-low" id="experience">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-tight sticky top-24 lg:top-32">
              Học vấn & <br className="hidden md:block" />
              Kinh nghiệm.
            </h2>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-on-surface-variant font-body leading-relaxed">
              Hơn 4 năm hành trình giảng dạy thực tế cùng kiến thức chuyên ngành tại môi trường giáo dục đại học.
            </p>
          </div>
          <div className="md:w-2/3 relative mt-8 md:mt-0">
            {/* Vertical Line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-outline-variant opacity-30" />
            
            <div className="space-y-16">
              {/* Experience Item 1 */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary ring-4 ring-[#f8faf7] z-10">
                  <div className="absolute top-0 left-0 w-full h-full rounded-full bg-primary animate-[ping_1s_ease-out_infinite] opacity-75"></div>
                </div>
                <span className="text-sm font-label uppercase tracking-widest text-on-surface-variant">
                  2025 — HIỆN TẠI
                </span>
                <h3 className="text-2xl font-headline font-bold text-on-surface mt-2">
                  Giảng dạy Trung học
                </h3>
                <p className="text-primary font-medium">Vstar School, Phạm Hữu Lầu & Bến Vân Đồn</p>
                <p className="mt-4 text-on-surface-variant font-body leading-relaxed">
                  Đảm nhận công tác giảng dạy tại Vstar School, kết hợp phụ trách hai lớp 9 tại trường THCS Phạm Hữu Lầu và trường THCS Bến Vân Đồn.
                </p>
              </div>

              {/* Experience Item 2 */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary ring-4 ring-[#f8faf7] z-10">
                  <div className="absolute top-0 left-0 w-full h-full rounded-full bg-primary animate-[ping_1.2s_ease-out_infinite] opacity-75" style={{animationDelay: '100ms'}}></div>
                </div>
                <span className="text-sm font-label uppercase tracking-widest text-on-surface-variant">
                  2024 — 2025
                </span>
                <h3 className="text-2xl font-headline font-bold text-on-surface mt-2">
                  Giảng dạy Tiểu học & THCS
                </h3>
                <p className="text-primary font-medium">Trường công lập & Quốc tế</p>
                <p className="mt-4 text-on-surface-variant font-body leading-relaxed">
                  Phụ trách Khối Lớp 8 & 9 tại Phạm Hữu Lầu, Khối Lớp 8 tại Bến Vân Đồn, và Lớp 4 tại cơ sở Vista School. Quản lý lớp học linh hoạt và hiệu quả.
                </p>
              </div>
              
              {/* Experience Item 3 */}
              <div className="relative pl-12">
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
              <div className="relative pl-12">
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
