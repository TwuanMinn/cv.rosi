export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 bg-[#f2f4f2]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-screen-2xl mx-auto">
        <div className="text-[#3e4944] font-['Inter'] text-sm leading-relaxed">
          © 2025 Thái Duyên. All rights reserved.
        </div>
        <div className="flex gap-8">
          <a
            className="text-[#3e4944] font-['Inter'] text-sm hover:text-[#00513f] underline-offset-4 transition-all duration-300 no-underline"
            href="mailto:thaiduyen809@gmail.com"
          >
            Email
          </a>
          <a
            className="text-[#3e4944] font-['Inter'] text-sm hover:text-[#00513f] underline-offset-4 transition-all duration-300 no-underline"
            href="https://fb.com/thaiduyen809"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            className="text-[#3e4944] font-['Inter'] text-sm hover:text-[#00513f] underline-offset-4 transition-all duration-300 no-underline"
            href="tel:0707272484"
          >
            Phone
          </a>
        </div>
      </div>
    </footer>
  )
}
