export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f8faf7]/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter text-[#00513f] font-headline">
          Thái Duyên
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a
            className="text-[#00513f] font-bold border-b-2 border-[#00513f] pb-1 font-headline tracking-tight transition-all duration-300 cubic-bezier-transition"
            href="#experience"
          >
            Kinh nghiệm
          </a>
          <a
            className="text-[#3e4944] font-medium font-headline tracking-tight hover:text-[#00513f] transition-all duration-300 cubic-bezier-transition"
            href="#skills"
          >
            Kỹ năng
          </a>
          <a
            className="text-[#3e4944] font-medium font-headline tracking-tight hover:text-[#00513f] transition-all duration-300 cubic-bezier-transition"
            href="#contact"
          >
            Liên hệ
          </a>
        </div>
        <a
          href="mailto:thaiduyen809@gmail.com"
          className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold tracking-tight active:scale-95 opacity-100 transition-all duration-300 cubic-bezier-transition no-underline"
        >
          Liên hệ ngay
        </a>
      </div>
    </nav>
  )
}
