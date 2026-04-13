export default function Contact() {
  return (
    <section className="py-32 bg-surface px-8" id="contact">
      <div className="max-w-screen-xl mx-auto bg-primary-fixed p-12 lg:p-24 rounded-lg relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-5xl lg:text-7xl font-headline font-extrabold text-on-primary-fixed tracking-tighter leading-none mb-8">
            Sẵn sàng để hợp tác?
          </h2>
          <p className="text-xl text-on-primary-fixed-variant mb-12 font-body">
            Liên hệ với tôi để trao đổi cụ thể về những dự án và mục tiêu kinh doanh sắp tới.
          </p>
          <a
            className="inline-flex items-center gap-4 text-3xl font-headline font-bold text-primary group transition-all duration-300 no-underline"
            href="mailto:thaiduyen809@gmail.com"
          >
            Bắt đầu thảo luận
            <span className="material-symbols-outlined text-4xl group-hover:translate-x-4 transition-transform duration-300">
              east
            </span>
          </a>
        </div>
        {/* Decorative background elements */}
        <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] bg-primary opacity-10 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
