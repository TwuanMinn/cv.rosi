export default function Hero() {
  return (
    <section className="min-h-[100svh] lg:min-h-[921px] flex items-center px-6 md:px-8 max-w-screen-2xl mx-auto relative overflow-hidden pt-32 lg:pt-0 pb-20 lg:pb-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7 z-10">
          <span className="text-sm uppercase tracking-widest text-on-surface-variant font-medium font-label mb-4 block">
            Kinh doanh Quốc tế & Giảng dạy
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-9xl font-headline font-extrabold tracking-tighter leading-none text-primary mb-8 break-words select-none">
            Thái <br />
            Duyên.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-on-surface-variant font-body leading-relaxed max-w-2xl mb-12">
            Sinh viên Kinh doanh Quốc tế tại UFM University — với hành trình giảng dạy hơn 4 năm và niềm đam mê phát triển bản thân không ngừng. Kết nối tri thức và giá trị trong từng dự án nghiên cứu và lớp học.
          </p>
          <div className="flex flex-col gap-4 mb-10 w-full">
            {[
              { icon: 'mail', text: 'thaiduyen809@gmail.com', href: 'mailto:thaiduyen809@gmail.com' },
              { icon: 'call', text: '0707 272 484', href: 'tel:0707272484' },
              { icon: 'language', text: 'thaiduyen809@fb.com', href: 'https://fb.com/thaiduyen809' },
              { icon: 'location_on', text: 'Quận 7, Tp. Hồ Chí Minh' },
            ].map((contact, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded shrink-0 bg-[#be312e] text-white flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {contact.icon}
                  </span>
                </div>
                {contact.href ? (
                  <a href={contact.href} className="text-[#002118] font-body text-base md:text-lg hover:text-[#00513f] transition-colors no-underline break-words md:break-normal max-w-[85%]">
                    {contact.text}
                  </a>
                ) : (
                  <span className="text-[#002118] font-body text-base md:text-lg break-words md:break-normal max-w-[85%]">
                    {contact.text}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#experience"
              className="bg-primary text-on-primary px-6 md:px-8 py-4 rounded-lg font-bold tracking-tight flex items-center justify-center gap-2 group transition-all duration-300 cubic-bezier-transition no-underline w-full sm:w-auto text-center"
            >
              Xem quá trình làm việc
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
            <a
              href="/cv.pdf"
              download
              className="border-2 border-primary text-primary px-6 md:px-8 py-4 rounded-lg font-bold tracking-tight flex items-center justify-center gap-2 group transition-all duration-300 hover:bg-primary hover:text-on-primary cubic-bezier-transition no-underline w-full sm:w-auto text-center"
            >
              Tải CV
              <span className="material-symbols-outlined group-hover:-translate-y-1 transition-transform">
                download
              </span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] bg-surface-container-high rounded-lg overflow-hidden transition-all duration-700 cubic-bezier-transition shadow-2xl">
            <img
              alt="Thái Duyên"
              className="w-full h-full object-cover object-top"
              src="/profile.png"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-fixed -z-10 rounded-full opacity-50 blur-3xl" />
        </div>
      </div>
    </section>
  )
}
