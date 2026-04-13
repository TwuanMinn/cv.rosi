export default function ExperienceTimeline() {
  return (
    <section className="py-32 bg-surface-container-low" id="experience">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-headline font-bold text-primary tracking-tight sticky top-32">
              Học vấn & <br />
              Kinh nghiệm.
            </h2>
            <p className="mt-6 text-on-surface-variant font-body leading-relaxed">
              Hơn 4 năm hành trình giảng dạy thực tế cùng kiến thức chuyên ngành tại môi trường giáo dục đại học.
            </p>
          </div>
          <div className="md:w-2/3 relative">
            {/* Vertical Line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-outline-variant opacity-30" />
            
            <div className="space-y-16">
              {/* Experience Item 1 */}
              <div className="relative pl-10">
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                <span className="text-sm font-label uppercase tracking-widest text-on-surface-variant">
                  2025 — HIỆN TẠI
                </span>
                <h3 className="text-2xl font-headline font-bold text-on-surface mt-2">
                  Giảng dạy Trung học
                </h3>
                <p className="text-primary font-medium">Nam Sài Gòn & Vista School</p>
                <p className="mt-4 text-on-surface-variant font-body leading-relaxed">
                  Đảm nhận công tác giảng dạy cho Khối Lớp 7 (Nam Sài Gòn) và Khối Lớp 5 (Vista School). Áp dụng phương pháp sư phạm hiện đại.
                </p>
              </div>

              {/* Experience Item 2 */}
              <div className="relative pl-10">
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
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
              <div className="relative pl-10">
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
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
              <div className="relative pl-10">
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
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
