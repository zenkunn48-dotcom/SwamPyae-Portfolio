import { useEffect, useRef, useState } from "react";
import { Compass, Sparkles, Target, Search, MapPin, Palette } from "lucide-react";

const items = [
  { label: "Marketing Strategies", icon: Compass, pos: { left: "31.25%", top: "14.3%" } },
  { label: "Creative Content", icon: Sparkles, pos: { left: "68.75%", top: "14.3%" } },
  { label: "Media Buying", icon: Target, pos: { left: "12.5%", top: "50%" } },
  { label: "SEO", icon: Search, pos: { left: "87.5%", top: "50%" } },
  { label: "On Ground Marketing", icon: MapPin, pos: { left: "31.25%", top: "85.7%" } },
  { label: "Graphic Design", icon: Palette, pos: { left: "68.75%", top: "85.7%" } },
];

const FIG8 =
  "M400,210 A150,150 0 0,1 100,210 A150,150 0 0,1 400,210 A150,150 0 0,0 700,210 A150,150 0 0,0 400,210";

function Pill({
  label,
  Icon,
  delay,
  style,
}: {
  label: string;
  Icon: typeof Compass;
  delay: number;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="glass gradient-border idle-glow absolute flex -translate-x-1/2 -translate-y-1/2 items-center rounded-full font-medium whitespace-nowrap transition-transform duration-300 hover:scale-105"
      style={{
        animationDelay: `${delay}s`,
        fontSize: "clamp(8px, 2.1cqw, 14px)",
        gap: "0.55em",
        padding: "0.6em 1em",
        ...style,
      }}
    >
      <Icon className="shrink-0" style={{ width: "1.25em", height: "1.25em", color: "var(--cyan)" }} />
      <span>{label}</span>
    </div>
  );
}

export function EcosystemLoop({ name = "Swam Pyae" }: { initials?: string; name?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={active ? "" : "motion-paused"}>
      <div
        className="relative mx-auto aspect-[800/420] w-full max-w-4xl"
        style={{ containerType: "inline-size" }}
      >
        <svg
          viewBox="0 0 800 420"
          preserveAspectRatio="xMidYMid meet"
          className="h-full w-full"
          aria-hidden
        >
          <defs>
            <linearGradient id="loop-comet" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--violet)" stopOpacity="0" />
              <stop offset="60%" stopColor="var(--violet)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="var(--cyan)" stopOpacity="1" />
            </linearGradient>
            <radialGradient id="loop-halo">
              <stop offset="0%" stopColor="var(--violet)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--violet)" stopOpacity="0" />
            </radialGradient>
            <filter id="loop-blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>

          <ellipse cx="400" cy="210" rx="360" ry="190" fill="url(#loop-halo)" />

          <path
            d={FIG8}
            fill="none"
            stroke="var(--cyan)"
            strokeOpacity="0.22"
            strokeWidth="1.5"
            strokeDasharray="6 10"
          />
          <path
            className="loop-comet-glow"
            d={FIG8}
            fill="none"
            stroke="url(#loop-comet)"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#loop-blur)"
          />
          <path
            className="loop-comet"
            d={FIG8}
            fill="none"
            stroke="url(#loop-comet)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {items.map((it, i) => (
          <Pill key={it.label} label={it.label} Icon={it.icon} delay={i * 0.45} style={it.pos} />
        ))}

        <div
          className="idle-breathe absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full font-semibold whitespace-nowrap text-primary-foreground shadow-lg"
          style={{
            fontSize: "clamp(9px, 2.4cqw, 15px)",
            padding: "0.7em 1.4em",
            background: "linear-gradient(135deg, var(--violet), var(--cyan))",
            boxShadow: "0 10px 40px -10px color-mix(in oklab, var(--violet) 70%, transparent)",
          }}
        >
          {name}
        </div>
      </div>
    </div>
  );
}
