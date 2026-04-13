const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thái Duyên - CV</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
    <style>
      body { font-family: 'Inter', sans-serif; color: #191c1b; background: #ffffff; padding: 40px; }
      h1, h2, h3, h4 { font-family: 'Manrope', sans-serif; }
      .material-symbols-outlined { font-size: 16px; margin-right: 8px; vertical-align: text-bottom; }
    </style>
  </head>
  <body>
    <!-- Header -->
    <div class="border-b-2 border-[#00513f] pb-8 mb-8 flex justify-between items-start">
      <div>
        <h1 class="text-5xl font-extrabold text-[#00513f] mb-2 tracking-tight">Thái Duyên.</h1>
        <p class="text-xl text-[#3e4944] font-medium mb-4">Gia sư / Sinh viên Kinh doanh Quốc tế</p>
        <p class="text-sm text-[#3e4944] max-w-xl">
          Sinh viên Kinh doanh Quốc tế tại UFM University — với hành trình giảng dạy bồi dưỡng năng lực học sinh hơn 4 năm và định hướng phát triển bản thân không ngừng.
        </p>
      </div>
      <div class="text-right text-sm space-y-2 mt-2">
        <p class="text-[#191c1b] flex items-center justify-end"><span class="material-symbols-outlined text-[#00513f]">mail</span> thaiduyen809@gmail.com</p>
        <p class="text-[#191c1b] flex items-center justify-end"><span class="material-symbols-outlined text-[#00513f]">call</span> 0707 272 484</p>
        <p class="text-[#191c1b] flex items-center justify-end"><span class="material-symbols-outlined text-[#00513f]">location_on</span> Quận 7, Tp. HCM</p>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-12">
      <!-- Left Column (Experience) -->
      <div class="col-span-2">
        <h2 class="text-2xl font-bold text-[#00513f] mb-6 flex items-center uppercase tracking-wider text-sm"><span class="material-symbols-outlined">work</span> Kinh nghiệm</h2>
        
        <div class="space-y-6">
          <div class="border-l-2 border-[#9ef3d6] pl-4 relative">
            <div class="absolute w-3 h-3 bg-[#00513f] rounded-full -left-[7px] top-1"></div>
            <p class="text-xs font-semibold text-[#6f7a74] uppercase tracking-wide">2025 - Hiện tại</p>
            <h3 class="text-lg font-bold mt-1">Gia sư Trung học</h3>
            <p class="text-[#00513f] font-medium text-sm">Học sinh Vstar, Phạm Hữu Lầu & Bến Vân Đồn</p>
            <p class="text-sm text-[#3e4944] mt-2">Chuyên giảng dạy và bồi dưỡng (gia sư) cho học sinh đến từ Vstar School, cùng học sinh thuộc hai lớp 9 của trường THCS Phạm Hữu Lầu và THCS Bến Vân Đồn.</p>
          </div>

          <div class="border-l-2 border-[#9ef3d6] pl-4 relative">
            <div class="absolute w-3 h-3 bg-[#00513f] rounded-full -left-[7px] top-1"></div>
            <p class="text-xs font-semibold text-[#6f7a74] uppercase tracking-wide">2024 - 2025</p>
            <h3 class="text-lg font-bold mt-1">Gia sư Tiểu học & THCS</h3>
            <p class="text-[#00513f] font-medium text-sm">Học sinh công lập & Quốc tế</p>
            <p class="text-sm text-[#3e4944] mt-2">Đảm nhận dạy kèm bồi dưỡng cho học sinh Khối Lớp 8 & 9 (Phạm Hữu Lầu), Khối Lớp 8 (Bến Vân Đồn), và Lớp 4 (Vista School). Theo sát tiến độ học tập.</p>
          </div>

          <div class="border-l-2 border-[#9ef3d6] pl-4 relative">
            <div class="absolute w-3 h-3 bg-[#00513f] rounded-full -left-[7px] top-1"></div>
            <p class="text-xs font-semibold text-[#6f7a74] uppercase tracking-wide">2021 - 2024</p>
            <h3 class="text-lg font-bold mt-1">Chuyên viên Giảng dạy</h3>
            <p class="text-[#00513f] font-medium text-sm">Gia sư nhiều khối lớp</p>
            <p class="text-sm text-[#3e4944] mt-2">Xây dựng nền tảng từ Khối Lớp 1 (tiếng Việt tại Korean School) đến Khối Lớp 8. Củng cố kỹ năng truyền đạt kiến thức vững chắc trong nhiều trường hợp học sinh khác nhau.</p>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-[#00513f] mt-10 mb-6 flex items-center uppercase tracking-wider text-sm"><span class="material-symbols-outlined">school</span> Học vấn</h2>
        <div class="border-l-2 border-[#9ef3d6] pl-4 relative">
          <div class="absolute w-3 h-3 bg-[#00513f] rounded-full -left-[7px] top-1"></div>
          <p class="text-xs font-semibold text-[#6f7a74] uppercase tracking-wide">2021 - 2024</p>
          <h3 class="text-lg font-bold mt-1">Cử nhân Kinh doanh Quốc tế</h3>
          <p class="text-[#00513f] font-medium text-sm">UFM University</p>
          <p class="text-sm text-[#3e4944] mt-2">Ngành Kinh doanh Quốc tế, tập trung phát triển kỹ năng tư duy phản biện, thương mại toàn cầu, tài chính doanh nghiệp và quản trị chiến lược.</p>
        </div>
      </div>

      <!-- Right Column (Skills) -->
      <div>
        <h2 class="text-2xl font-bold text-[#00513f] mb-6 flex items-center uppercase tracking-wider text-sm"><span class="material-symbols-outlined">verified</span> Kỹ năng</h2>
        
        <div class="bg-[#f2f4f2] p-5 rounded-lg mb-6">
          <h3 class="font-bold mb-3 flex items-center"><span class="material-symbols-outlined">translate</span> Ngoại ngữ</h3>
          <ul class="text-sm space-y-2 text-[#191c1b]">
            <li class="flex justify-between"><span>IELTS Overall</span> <span class="font-bold">5.5</span></li>
            <li class="flex justify-between"><span>Reading</span> <span class="font-bold text-[#00513f]">Proficient</span></li>
            <li class="flex justify-between"><span>Writing</span> <span class="font-bold text-[#00513f]">Intermediate</span></li>
          </ul>
        </div>

        <div class="bg-[#e0e3df] p-5 rounded-lg mb-6">
          <h3 class="font-bold mb-3 flex items-center"><span class="material-symbols-outlined">dataset</span> Tin học</h3>
          <ul class="text-sm space-y-2 text-[#191c1b]">
            <li class="flex font-bold">MOS 2019 (Microsoft Office Specialist)</li>
            <li>Thành thạo Excel, PowerPoint, Word.</li>
          </ul>
        </div>

        <div class="bg-[#f2f4f2] p-5 rounded-lg">
          <h3 class="font-bold mb-3 flex items-center"><span class="material-symbols-outlined">diversity_3</span> Kỹ năng mềm</h3>
          <ul class="text-sm space-y-2 text-[#191c1b]">
            <li class="flex items-center"><span class="material-symbols-outlined text-[12px]">check_circle</span> Thuyết trình chuyên nghiệp</li>
            <li class="flex items-center"><span class="material-symbols-outlined text-[12px]">check_circle</span> Quản lý & làm việc nhóm</li>
            <li class="flex items-center"><span class="material-symbols-outlined text-[12px]">check_circle</span> Phân tích tình huống</li>
          </ul>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;
  
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
  await page.pdf({ 
    path: 'public/cv.pdf', 
    format: 'A4',
    printBackground: true,
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
  });

  await browser.close();
  console.log("PDF updated successfully!");
})();
