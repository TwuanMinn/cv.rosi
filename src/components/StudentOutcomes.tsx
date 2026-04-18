const outcomes = [
  { icon: 'psychology',       label: 'Tư duy phản biện' },
  { icon: 'forum',            label: 'Kỹ năng giao tiếp' },
  { icon: 'self_improvement', label: 'Tự tin học thuật' },
  { icon: 'trending_up',      label: 'Cải thiện rõ rệt điểm số' },
  { icon: 'schedule',         label: 'Kỷ luật bản thân' },
  { icon: 'lightbulb',        label: 'Hiểu sâu – nhớ lâu' },
];

const VBW = 1200;
const VBH = 640;

const sidePositions = [
  { x: 260,  y: 110 },
  { x: 260,  y: 320 },
  { x: 260,  y: 530 },
  { x: 940,  y: 110 },
  { x: 940,  y: 320 },
  { x: 940,  y: 530 },
];

const center = { x: VBW / 2, y: VBH / 2 };

function Pill({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 pl-2 pr-4 py-2 rounded-xl bg-[#001a14]/80 border border-white/10 backdrop-blur-md shadow-xl">
      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-[#9ef3d6]">
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
      </span>
      <span className="text-white font-body text-sm md:text-base whitespace-nowrap">{label}</span>
    </div>
  );
}

function CenterNode() {
  return (
    <div className="inline-flex items-center gap-3 pl-3 pr-5 py-3 rounded-2xl bg-[#001a14] border border-[#9ef3d6]/40 shadow-[0_0_40px_rgba(158,243,214,0.25)]">
      <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#9ef3d6] text-[#00513f]">
        <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
      </span>
      <span className="text-white font-headline font-bold text-base md:text-lg">Học sinh</span>
    </div>
  );
}

export default function StudentOutcomes() {
  return (
    <div className="relative w-full" data-reveal="fade-in">
      {/* Desktop diagram */}
      <div
        className="hidden md:block relative mx-auto max-w-5xl"
        style={{ aspectRatio: `${VBW} / ${VBH}` }}
      >
        <svg
          viewBox={`0 0 ${VBW} ${VBH}`}
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          aria-hidden
        >
          {sidePositions.map((p, i) => {
            const dx = center.x - p.x;
            const d = `M ${p.x} ${p.y} C ${p.x + dx * 0.5} ${p.y} ${center.x - dx * 0.5} ${center.y} ${center.x} ${center.y}`;
            return (
              <g key={i}>
                <path d={d} fill="none" stroke="rgba(158,243,214,0.18)" strokeWidth={2} />
                <path
                  d={d}
                  fill="none"
                  stroke="#9ef3d6"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeDasharray="50 300"
                  style={{
                    animation: 'outcome-flow 3s linear infinite',
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
              </g>
            );
          })}
        </svg>

        {outcomes.map((o, i) => {
          const p = sidePositions[i];
          const onLeft = p.x < center.x;
          return (
            <div
              key={o.label}
              className="absolute"
              style={{
                left: `${(p.x / VBW) * 100}%`,
                top: `${(p.y / VBH) * 100}%`,
                transform: `translate(${onLeft ? '-100%' : '0%'}, -50%)`,
              }}
            >
              <Pill icon={o.icon} label={o.label} />
            </div>
          );
        })}

        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: '50%', top: '50%' }}
        >
          <CenterNode />
        </div>
      </div>

      {/* Mobile stack */}
      <div className="md:hidden flex flex-col items-center gap-6">
        <CenterNode />
        <div className="relative grid grid-cols-2 gap-3 w-full max-w-sm">
          <div className="absolute left-1/2 -top-4 w-px h-4 bg-[#9ef3d6]/40 -translate-x-1/2" />
          {outcomes.map((o) => (
            <Pill key={o.label} icon={o.icon} label={o.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
