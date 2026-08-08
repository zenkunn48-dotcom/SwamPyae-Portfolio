import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, ChevronLeft, ChevronRight, ImageIcon, Target, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export type ExperienceItem = {
  id: string;
  date: string;
  role: string;
  company: string;
  focus: string;
  desc: string;
  metrics: string[];
  wins: string[];
  skills: string[];
};

export const experienceTimeline: ExperienceItem[] = [
  {
    id: "grand-cherry-oo",
    date: "Oct 2025 – Present",
    role: "Digital Marketing Senior Supervisor",
    company: "Grand Cherry Oo Co., Ltd.",
    focus: "Corporate Marketing Leadership",
    desc: "Orchestrated strategic brand initiatives, handled end-to-end media buying, developed campaign proposals, and directed the corporate events lifecycle.",
    metrics: ["500% peak ROAS", "60%+ CPA reduction", "20M+ impressions"],
    wins: [
      "Directed full-lifecycle corporate campaigns across departments",
      "Owned end-to-end media buying and budget pacing",
      "Led on-ground corporate event planning to execution",
    ],
    skills: ["Media Buying", "Brand Strategy", "Event Marketing", "Team Leadership"],
  },
  {
    id: "salt-and-pixel",
    date: "May 2025 – Sep 2025",
    role: "Social Media Executive",
    company: "Salt & Pixel Digital Marketing Agency",
    focus: "Agency Ecosystem & Multi-Brand Scaling",
    desc: "Media buying, cross-brand marketing strategy, copyright claims management, asset protection, and team monitoring.",
    metrics: ["Multi-client portfolio", "Cross-brand scaling", "Asset protection"],
    wins: [
      "Scaled paid social for a diverse roster of brands",
      "Resolved copyright claims, appeals, and page reinstatements",
      "Monitored and mentored social media team output",
    ],
    skills: ["Paid Social", "Copyright Appeals", "Client Management", "Content Strategy"],
  },
  {
    id: "olor",
    date: "Jan 2025 – Apr 2025",
    role: "Digital Marketing Executive",
    company: "Olor Aromatherapy",
    focus: "E-Commerce Growth & Branding",
    desc: "Met conversion targets, analyzed consumer demographics, and deployed e-commerce branding strategies.",
    metrics: ["Sales targets hit", "Audience research", "Brand repositioning"],
    wins: [
      "Hit recurring product sales and conversion targets",
      "Mapped demographics and psychographics for targeting",
      "Built branding strategy for aromatherapy product lines",
    ],
    skills: ["E-Commerce", "Audience Insights", "Branding", "Social Commerce"],
  },
  {
    id: "willtec",
    date: "Dec 2023 – Dec 2024",
    role: "Digital Marketing Staff",
    company: "Willtec Myanmar",
    focus: "Franchise & Education Network Marketing",
    desc: "Drove digital acquisition for education services, career consulting, and the Japanese Language School franchise marketing.",
    metrics: ["Franchise funnels", "Myanmar–Japan sector", "Lead growth"],
    wins: [
      "Localized acquisition funnels for JLS franchise partners",
      "Grew brand visibility in the Myanmar–Japan education sector",
      "Supported career consulting and enrolment campaigns",
    ],
    skills: ["Lead Generation", "Franchise Marketing", "Localization", "Funnel Design"],
  },
  {
    id: "yaung-ni",
    date: "Feb 2023 – Aug 2023",
    role: "Content Writer",
    company: "Yaung Ni Mobile",
    focus: "Tech Content & Copywriting",
    desc: "Engaging tech content creation and copywriting across product launches and platform updates.",
    metrics: ["Product launch copy", "Editorial cadence"],
    wins: [
      "Wrote launch and update copy for mobile tech products",
      "Maintained a consistent publishing cadence",
    ],
    skills: ["Copywriting", "Content Planning", "Tech Writing"],
  },
];

/** Portfolio slide images attached per experience role. */
export const experienceSlidesMap: Record<string, string[]> = {
  "grand-cherry-oo": ["/slides/grand-cherry-oo-1.png"],
  "salt-and-pixel": ["/slides/salt-and-pixel-1.png"],
  olor: ["/slides/olor-1.png"],
  willtec: ["/slides/willtec-1.png"],
  "yaung-ni": [],
};

function SlideViewer({ item }: { item: ExperienceItem }) {
  const slides = experienceSlidesMap[item.id] ?? [];
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (total ? (i + dir + total) % total : 0)),
    [total],
  );

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3">
      <div className="glass relative flex min-h-[180px] flex-1 items-center justify-center overflow-hidden rounded-2xl">
        {total > 0 ? (
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[index]}
              src={slides[index]}
              alt={`${item.role} at ${item.company} — portfolio slide ${index + 1}`}
              loading="lazy"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="max-h-[46vh] w-full object-contain"
            />
          </AnimatePresence>
        ) : (
          <div className="flex flex-col items-center gap-3 p-8 text-center">
            <span
              className="idle-breathe flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ background: "linear-gradient(135deg, var(--violet), var(--cyan))" }}
            >
              <ImageIcon className="h-6 w-6" style={{ color: "var(--primary-foreground)" }} />
            </span>
            <p className="text-sm font-medium">Portfolio slide pending</p>
            <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
              Attach the JPEG slide for this role in chat and it will appear here automatically.
            </p>
          </div>
        )}

        {total > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => go(-1)}
              className="glass absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 transition hover:scale-110"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => go(1)}
              className="glass absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 transition hover:scale-110"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="flex items-center justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className="h-2 rounded-full transition-all"
              style={{
                width: i === index ? 22 : 8,
                background:
                  i === index
                    ? "linear-gradient(90deg, var(--violet), var(--cyan))"
                    : "color-mix(in oklab, var(--foreground) 25%, transparent)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function SlidePopup({ item, onClose }: { item: ExperienceItem; onClose: () => void }) {
  const slides = experienceSlidesMap[item.id] ?? [];

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div
        className="absolute inset-0 backdrop-blur-md"
        style={{ background: "color-mix(in oklab, var(--background) 70%, transparent)" }}
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 8 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="glass-panel glow-ring relative flex max-h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl p-4 sm:p-6"
      >
        <button
          type="button"
          aria-label="Close portfolio preview"
          onClick={onClose}
          className="glass absolute right-3 top-3 z-10 rounded-full p-2 transition hover:scale-110"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="flex flex-wrap items-start gap-3 pr-10">
          <div className="min-w-0">
            <h3 className="text-base font-semibold sm:text-xl">{item.role}</h3>
            <p className="mt-1 text-sm font-medium text-gradient">{item.company}</p>
          </div>
          <div className="ml-auto flex flex-wrap items-center gap-2">
            <span className="glass rounded-full px-3 py-1 text-[11px] font-medium text-muted-foreground">{item.date}</span>
            <span
              className="rounded-full px-3 py-1 text-[11px] font-semibold"
              style={{
                background: "linear-gradient(135deg, var(--violet), var(--cyan))",
                color: "var(--primary-foreground)",
              }}
            >
              {slides.length} slide{slides.length === 1 ? "" : "s"}
            </span>
          </div>
        </div>

        <div className="mt-4 grid min-h-0 flex-1 gap-4 overflow-y-auto lg:grid-cols-[1.6fr_1fr]">
          <SlideViewer item={item} />

          {/* Quick context sidebar */}
          <aside className="glass flex flex-col gap-4 rounded-2xl p-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Impact</p>
              <ul className="mt-2 space-y-1.5">
                {item.metrics.map((m) => (
                  <li key={m} className="flex items-center gap-2 text-sm font-semibold">
                    <Target className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--cyan)" }} />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Key wins</p>
              <ul className="mt-2 space-y-2">
                {item.wins.map((w) => (
                  <li key={w} className="text-xs leading-relaxed text-muted-foreground">• {w}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Skills</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {item.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full px-2.5 py-1 text-[11px] font-medium"
                    style={{
                      border: "1px solid color-mix(in oklab, var(--violet) 45%, transparent)",
                      background: "color-mix(in oklab, var(--violet) 12%, transparent)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ExperienceTimeline() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const active = experienceTimeline.find((e) => e.id === activeId) ?? null;

  const open = (id: string) => setActiveId(id);
  const close = () => setActiveId(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActiveId(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!activeId) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [activeId]);

  return (
    <div className="relative mt-12">
      <div
        aria-hidden
        className="absolute left-4 top-0 bottom-0 w-px sm:left-6"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--violet), var(--cyan), var(--violet), transparent)",
          boxShadow: "0 0 12px color-mix(in oklab, var(--violet) 70%, transparent), 0 0 24px color-mix(in oklab, var(--cyan) 40%, transparent)",
        }}
      />

      <div className="flex flex-col gap-8">
        {experienceTimeline.map((e, i) => {
          const primary = i === 0;
          const count = (experienceSlidesMap[e.id] ?? []).length;
          const hasSlides = count > 0;
          return (
            <div key={e.id} className="relative pl-12 sm:pl-16">
              <div
                aria-hidden
                className="absolute left-4 top-6 h-4 w-4 -translate-x-1/2 rounded-full sm:left-6"
                style={{
                  background: "linear-gradient(135deg, var(--violet), var(--cyan))",
                  boxShadow:
                    "0 0 0 4px color-mix(in oklab, var(--background) 80%, transparent), 0 0 20px color-mix(in oklab, var(--violet) 80%, transparent), 0 0 40px color-mix(in oklab, var(--cyan) 60%, transparent)",
                }}
              />
              <motion.button
                type="button"
                disabled={!hasSlides}
                aria-haspopup={hasSlides ? "dialog" : undefined}
                onClick={() => hasSlides && open(e.id)}
                whileHover={hasSlides ? { y: -4 } : undefined}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`glass gradient-border group relative w-full overflow-hidden rounded-3xl p-6 text-left sm:p-7 ${hasSlides ? "glow-hover cursor-pointer" : "cursor-default"} ${primary ? "glow-ring" : ""}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold sm:text-xl">{e.role}</h3>
                      {primary && (
                        <span
                          className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                          style={{
                            background: "linear-gradient(135deg, var(--violet), var(--cyan))",
                            color: "var(--primary-foreground)",
                          }}
                        >
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="mt-1.5 flex items-center gap-2 text-sm font-medium text-gradient">
                      <Briefcase className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--cyan)" }} /> {e.company}
                    </div>
                  </div>
                  <span className="glass shrink-0 rounded-full px-3 py-1 text-xs font-medium text-muted-foreground">{e.date}</span>
                </div>

                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--cyan)" }}>
                  {e.focus}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{e.desc}</p>

                {hasSlides && (
                  <p className="mt-4 text-xs font-medium text-muted-foreground">
                    {isMobile ? "Tap" : "Click"} to view {count} portfolio slide{count === 1 ? "" : "s"}
                  </p>
                )}

                <div
                  className="pointer-events-none absolute -right-16 -bottom-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: "radial-gradient(closest-side, var(--cyan), transparent)" }}
                />
              </motion.button>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {active && <SlidePopup key={active.id} item={active} onClose={close} />}
      </AnimatePresence>
    </div>
  );
}
