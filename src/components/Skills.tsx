import { useScrollRevealAll } from '../hooks/useScrollReveal';
import { motion } from 'framer-motion';

export default function Skills() {
  const ref = useScrollRevealAll<HTMLElement>(0.1);

  return (
    <section ref={ref} className="py-16 md:py-32 bg-surface" id="skills">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
        <div className="mb-12 md:mb-20 text-center" data-reveal="fade-in">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-tight">Kỹ năng.</h2>
          <p className="mt-4 text-base md:text-xl text-on-surface-variant font-body">
            Các chứng chỉ, ngoại ngữ và năng lực giải quyết vấn đề.
          </p>
        </div>

        {/* Bento Grid for Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {/* Tech/Languages */}
           <div className="md:col-span-2 bg-surface-container-lowest p-6 sm:p-8 md:p-10 rounded-lg group hover:shadow-[0_20px_40px_rgba(25,28,27,0.04)] transition-all duration-500 cubic-bezier-transition" data-reveal="fade-in" style={{ transitionDelay: '100ms' }}>
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-primary text-3xl">translate</span>
              <h3 className="text-2xl font-headline font-bold">Năng lực ngoại ngữ</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-on-surface font-bold font-headline">IELTS Overall (5.5)</div>
                <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary" 
                    initial={{ width: 0 }}
                    whileInView={{ width: '70%' }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-on-surface font-bold font-headline">Khả năng Reading</div>
                <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary" 
                    initial={{ width: 0 }}
                    whileInView={{ width: '80%' }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-on-surface font-bold font-headline">Khả năng Writing</div>
                <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary" 
                    initial={{ width: 0 }}
                    whileInView={{ width: '60%' }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                  />
                </div>
              </div>
            </div>
            <p className="mt-8 text-on-surface-variant font-body">Thành thạo hiểu và xử lý thông tin từ giao tiếp. Có khả năng đọc và phân tích tài liệu, báo cáo chuyên ngành.</p>
          </div>

          {/* Strategy / Certification */}
          <div className="bg-primary text-on-primary p-6 sm:p-8 md:p-10 rounded-lg flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500 cubic-bezier-transition" data-reveal="fade-in" style={{ transitionDelay: '200ms' }}>
            <div>
              <h3 className="text-3xl font-headline font-bold leading-tight mb-4">
                MOS <br />
                2019
              </h3>
              <p className="text-primary-fixed opacity-90 font-body">
                Chứng chỉ Microsoft Office Specialist — thành thạo bộ công cụ văn phòng chuyên nghiệp trong môi trường doanh nghiệp hiện đại.
              </p>
            </div>
            <span className="material-symbols-outlined text-5xl self-end mt-4">workspace_premium</span>
          </div>

          {/* Soft Skills */}
          <div className="bg-surface-container-lowest p-6 sm:p-8 md:p-10 rounded-lg hover:shadow-[0_20px_40px_rgba(25,28,27,0.04)] transition-all duration-500 cubic-bezier-transition" data-reveal="fade-in" style={{ transitionDelay: '300ms' }}>
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">diversity_3</span>
              <h3 className="text-2xl font-headline font-bold">Kỹ năng mềm</h3>
            </div>
            <ul className="space-y-4 font-body text-on-surface-variant">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Thuyết trình chuyên nghiệp
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Quản lý & làm việc nhóm
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Phân tích tình huống
              </li>
            </ul>
          </div>

          {/* Layout Skill */}
          <div className="md:col-span-2 bg-[#e0e3df] p-6 sm:p-8 md:p-10 rounded-lg flex items-center justify-between group overflow-hidden relative" data-reveal="fade-in" style={{ transitionDelay: '400ms' }}>
            <div className="z-10">
              <h3 className="text-2xl font-headline font-bold text-on-background mb-4">
                Tin học & Xử lí dữ liệu
              </h3>
              <p className="max-w-md text-on-surface-variant font-body">
                Sử dụng thành thạo và nắm vững các thủ thuật của Excel, Word, và PowerPoint cho bài thuyết trình ấn tượng và lập trang dữ liệu kinh doanh.
              </p>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/3 bg-primary opacity-5 group-hover:opacity-10 transition-opacity" />
            <span className="material-symbols-outlined text-9xl text-primary opacity-10 absolute -right-4 -bottom-4">
              dataset
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
