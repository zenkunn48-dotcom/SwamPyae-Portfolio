import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  Menu, X, Sun, Moon, ArrowRight, Mail, Phone, MapPin,
  Linkedin, Github, Facebook, Target, BarChart3, Search,
  Palette, Calendar, Send, TrendingUp, Sparkles, Briefcase,
  Globe, Building2, Share2, ShieldCheck, Lightbulb, Settings,
  Download, Megaphone, LineChart, PenTool, Music, Pin, Tags,
  LayoutDashboard, Brush, Compass, MessageSquare, ShieldAlert,
} from "lucide-react";
import { Magnetic } from "@/components/Magnetic";
import brandCherryOo from "@/assets/brand-cherryoo.jpg.asset.json";
import brandSaltPixel from "@/assets/brand-saltpixel.jpg.asset.json";
import brandOlor from "@/assets/brand-olor.jpg.asset.json";
import brandTaiju from "@/assets/brand-taiju.jpg.asset.json";
import brandWilltec from "@/assets/brand-willtec.jpg.asset.json";
import brandOneStep from "@/assets/brand-onestep.jpg.asset.json";
const profileAsset = { url: "/profile.jpg" };

const brands = [
  { name: "Grand Cherry Oo", url: brandCherryOo.url },
  { name: "Salt & Pixel", url: brandSaltPixel.url },
  { name: "Olor Aromatherapy", url: brandOlor.url },
  { name: "Taiju", url: brandTaiju.url },
  { name: "Willtec Myanmar", url: brandWilltec.url },
  { name: "One Step Myanmar", url: brandOneStep.url },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aung Swam Pyae — Digital Marketing Senior Supervisor" },
      { name: "description", content: "Results-driven digital marketing leader with 3+ years driving high-ROI multi-channel growth campaigns." },
    ],
  }),
  component: Portfolio,
});

const nav = [
  { id: "about", label: "About Me" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const services = [
  { icon: Lightbulb, title: "Digital Strategy", desc: "Formulating robust digital strategies based on in-depth market research and trend analysis. Expert in audience segmentation to ensure brand objectives align with long-term growth." },
  { icon: Target, title: "Paid Ads Campaign", desc: "Executing high-impact campaigns across Meta Ads and Google Ads. Leveraging advanced audience analysis, UTM tracking, and real-time optimization to maximize ROI and data-backed performance." },
  { icon: BarChart3, title: "Analytics & Local SEO", desc: "Managing global and local visibility through Google Business Profile management. Advanced tracking setup using Google Tag Manager, GA4 behavioral data, and custom CRM dashboard integrations." },
  { icon: Settings, title: "Marketing Automation & CMS", desc: "Designing lead-generation funnels and integrating automation workflows via HubSpot and Zapier. Seamless web development, optimization, and content updates on WordPress." },
  { icon: Palette, title: "Creative Direction & Content Strategy", desc: "Developing targeted content strategies, copywriting frameworks, and content calendars. Overseeing visual asset creation using Adobe Illustrator, Photoshop, and Canva." },
  { icon: Calendar, title: "Event Marketing & Execution", desc: "Directing the operational lifecycle of corporate events, from strategic planning and coordination to on-site execution, ensuring perfect alignment with marketing objectives." },
];

const domains = [
  { icon: Globe, title: "Digital Marketing Agency Ecosystem", desc: "Orchestrating media buying at scale across multiple client portfolios, managing cross-brand budgets, and leading multi-project delivery pipelines with precision." },
  { icon: Building2, title: "Corporate Marketing Leadership", desc: "Directing full-lifecycle corporate strategies from ideation to execution, aligning cross-departmental operations and unifying brand vision across stakeholders." },
  { icon: Share2, title: "Franchise & Network Operations", desc: "Specialized scaling for international education and franchise networks, localizing acquisition funnels and adapting global brand playbooks to regional markets." },
  { icon: ShieldCheck, title: "Management & Brand Activation", desc: "Architecting cohesive brand identities, executing high-impact on-ground activations, safeguarding digital assets, and protecting IP across all channels." },
];

const experience = [
  { date: "Oct 2025 – Present", role: "Digital Marketing Senior Supervisor", company: "Grand Cherry Oo Co., Ltd.", desc: "Orchestrated strategic brand initiatives, handled end-to-end media buying, developed campaign proposals, and directed the corporate events lifecycle." },
  { date: "May 2025 – Sep 2025", role: "Social Media Executive", company: "Salt & Pixel Digital Marketing Agency", desc: "Media buying, cross-brand marketing strategy, copyright claims management, asset protection, and team monitoring." },
  { date: "Jan 2025 – Apr 2025", role: "Digital Marketing Executive", company: "Olor Aromatherapy", desc: "Met conversion targets, analyzed consumer demographics, and deployed e-commerce branding strategies." },
  { date: "Dec 2023 – Dec 2024", role: "Digital Marketing Staff", company: "Willtec Myanmar", desc: "Drove digital acquisition for education services, career consulting, and the Japanese Language School franchise marketing." },
  { date: "Feb 2023 – Aug 2023", role: "Content Writer", company: "Yaung Ni Mobile", desc: "Engaging tech content creation and copywriting across product launches and platform updates." },
];

const toolStack = [
  {
    icon: Megaphone,
    title: "Media Buying & Paid Ads",
    from: "var(--violet)",
    to: "var(--cyan)",
    tools: [
      { icon: Facebook, label: "Meta Ads Manager" },
      { icon: Music, label: "TikTok Ads Manager" },
      { icon: Globe, label: "Google Ads" },
      { icon: Pin, label: "Pinterest Ads" },
    ],
  },
  {
    icon: Globe,
    title: "Google & Web Ecosystem",
    from: "var(--blue)",
    to: "var(--indigo)",
    tools: [
      { icon: Building2, label: "Google Business Manager" },
      { icon: Tags, label: "Google Tag Manager" },
      { icon: Search, label: "SEO (Search Engine Optimization)" },
      { icon: LayoutDashboard, label: "WordPress" },
    ],
  },
  {
    icon: LineChart,
    title: "Analytics & Reporting",
    from: "var(--lime)",
    to: "var(--emerald)",
    tools: [
      { icon: BarChart3, label: "Google Analytics (GA4)" },
      { icon: TrendingUp, label: "Looker Studio" },
    ],
  },
  {
    icon: Palette,
    title: "Creative Suite & Design",
    from: "var(--amber)",
    to: "var(--orange)",
    tools: [
      { icon: PenTool, label: "Adobe Photoshop" },
      { icon: Brush, label: "Adobe Illustrator" },
    ],
  },
  {
    icon: Lightbulb,
    title: "Brand Strategy & Positioning",
    from: "var(--rose)",
    to: "var(--coral)",
    tools: [
      { icon: Compass, label: "Digital Marketing Strategy" },
      { icon: MessageSquare, label: "Content Tone & Voice" },
      { icon: ShieldAlert, label: "Competitor Analysis" },
    ],
  },
];

// ---------- Animation Helpers ----------
function useInView<T extends HTMLElement>(opts: IntersectionObserverInit = { threshold: 0.2 }) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, opts);

    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

function AnimatedCounter({ value, duration = 1800 }: { value: string; duration?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) { setDisplay(value); return; }
    const target = parseFloat(match[1]);
    const suffix = match[2];
    const decimals = (match[1].split(".")[1] || "").length;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = target * eased;
      setDisplay(current.toFixed(decimals) + suffix);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return <span ref={ref}>{display}</span>;
}




function Portfolio() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Floating background blobs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="animate-float-slow absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(closest-side, var(--violet), transparent)" }} />
        <div className="animate-float-reverse absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full opacity-35 blur-3xl"
          style={{ background: "radial-gradient(closest-side, var(--cyan), transparent)" }} />
        <div className="animate-pulse-glow absolute bottom-0 left-1/4 h-[480px] w-[480px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(closest-side, var(--violet), transparent)" }} />
        <div className="animate-float-slow absolute top-2/3 right-1/3 h-[380px] w-[380px] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(closest-side, var(--cyan), transparent)" }} />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 w-full">



        <div className="glass gradient-border mx-auto mt-3 flex max-w-7xl items-center justify-between rounded-3xl px-6 py-3 md:px-16">
          <button onClick={() => scrollTo("about")} className="text-lg font-extrabold tracking-tight">
            ASP<span className="text-gradient">.</span>
          </button>
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map(n => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {n.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Magnetic strength={18}>
              <a
href="https://drive.google.com/drive/folders/1hbJ5HUWvG40tVizofBPtg48j5oOUIppD?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon inline-flex items-center gap-1.5 rounded-2xl px-3 py-1.5 text-[11px] font-semibold lg:px-4 lg:py-2 lg:text-xs"
              >
                <Download className="h-4 w-4 shrink-0" />
                <span className="inline whitespace-nowrap xl:hidden">Full Testimonial Portfolio</span>
                <span className="hidden whitespace-nowrap xl:inline">Download Full Testimonial Portfolio</span>
              </a>
            </Magnetic>
            <button onClick={() => setDark(d => !d)} aria-label="Toggle theme" className="rounded-full border border-border p-2 transition-colors hover:bg-secondary hover:text-foreground">
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button onClick={() => setOpen(o => !o)} className="rounded-full border border-border p-2 md:hidden" aria-label="Menu">
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="glass gradient-border mx-4 mt-2 rounded-3xl p-4 md:hidden">
            {nav.map(n => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="block w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-secondary">
                {n.label}
              </button>
            ))}
            <a
              href="https://drive.google.com/drive/folders/1hbJ5HUWvG40tVizofBPtg48j5oOUIppD?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon mt-3 flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold"
            >
              <Download className="h-4 w-4" />
              Full Testimonial Portfolio
            </a>
          </div>
        )}

      </header>

      <main className="mx-auto max-w-7xl overflow-x-hidden px-6 pt-28 md:px-16 md:pt-32">
        {/* Hero */}
        <section id="about" className="relative grid min-h-screen items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-[420px] w-[680px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(closest-side, var(--primary), transparent)" }}
          />
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Available for Management and Strategic Roles
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              {["Hello,", "I", "am", "Aung", "Swam", "Pyae"].map((word, i) => (
                <span
                  key={i}
                  className={`inline-block opacity-0 ${i >= 3 ? "font-bold bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent" : ""}`}
                  style={{
                    animation: `word-rise 0.7s ease-out forwards`,
                    animationDelay: `${i * 120}ms`,
                    marginRight: "0.3em",
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>
            <p className="mt-2 text-2xl font-semibold text-gradient sm:text-3xl">
              Digital Marketing Senior Supervisor
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              A results-driven Digital Marketing Senior Supervisor with over 3 years of experience orchestrating high-impact, multi-channel growth strategies. I specialize in driving brand visibility and maximizing ROI through data-backed decision-making, conversion optimization, and innovative content marketing.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Magnetic strength={22}>
                <button onClick={() => scrollTo("services")} className="btn-neon group inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold">
                  Explore Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </Magnetic>
              <Magnetic strength={14}>
                <button onClick={() => scrollTo("contact")} className="glass glow-hover inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold">
                  Let's Connect
                </button>
              </Magnetic>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { n: "500%", l: "MAXIMUM ACTUAL ROAS" },
                { n: "20M+", l: "Ad Impressions Managed" },
                { n: "60%+", l: "Average CPA Reduction" },
                { n: "3+ Years", l: "Enterprise Marketing Experience" },
              ].map((s, i) => (
                <Reveal key={s.l} delay={i * 100}>
                  <div className="glass gradient-border glow-hover flex h-full flex-col items-center rounded-3xl p-4 text-center transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.03]">
                    <div className="text-gradient text-2xl font-extrabold tracking-tight sm:text-3xl">
                      <AnimatedCounter value={s.n} />
                    </div>
                    <div className="mt-2 text-[11px] font-medium uppercase leading-snug tracking-wide text-muted-foreground">
                      {s.l}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>


          </div>
          <div className="relative mx-auto">
            <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-primary/40 blur-3xl" />
            <div className="glow-ring relative h-72 w-72 overflow-hidden rounded-full sm:h-96 sm:w-96">
              <img
                src={profileAsset.url}
                alt="Aung Swam Pyae"
                className="h-full w-full object-cover object-center"
                style={{
                  imageRendering: "-webkit-optimize-contrast",
                }}
              />
            </div>
            <div className="glass gradient-border absolute -bottom-4 -left-4 flex items-center gap-2 rounded-2xl px-4 py-2 text-sm">
              <TrendingUp className="h-4 w-4 text-emerald" /> Data-Driven Growth
            </div>
            <div className="glass gradient-border absolute -right-4 top-6 flex items-center gap-2 rounded-2xl px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4" style={{ color: "var(--cyan)" }} /> ROI Focused
            </div>
          </div>

        </section>

        {/* Services */}
        <section id="services" className="py-20">
          <SectionHead eyebrow="What I Do" title="Core Expertise & Services" sub="A full-stack marketing operator — from strategy and media buying to creative direction and event execution." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="glass gradient-border glow-hover group relative h-full overflow-hidden rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.02]">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: "linear-gradient(135deg, var(--violet), var(--cyan))", boxShadow: "0 10px 30px -10px color-mix(in oklab, var(--violet) 60%, transparent)" }}>
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                    style={{ background: "radial-gradient(closest-side, var(--cyan), transparent)" }} />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Strategic Marketing Domains — Bento Grid */}
        <section id="domains" className="py-20">
          <SectionHead eyebrow="Branding & Marketing" title="Strategic Marketing Domains" sub="Four core competencies that define my versatility across agency, corporate, franchise, and brand activation environments." />
          <div className="mt-10 flex flex-col gap-5">
            {domains.map((d, i) => (
              <Reveal key={d.title} delay={i * 110}>
                <div className="glass gradient-border glow-hover group relative flex w-full flex-col gap-5 overflow-hidden rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 sm:flex-row sm:items-center sm:gap-7 sm:p-8">
                  <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: "linear-gradient(135deg, var(--cyan), var(--violet))", boxShadow: "0 10px 30px -10px color-mix(in oklab, var(--cyan) 60%, transparent)" }}>
                    <d.icon className="h-8 w-8" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold sm:text-2xl">{d.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{d.desc}</p>
                  </div>
                  <div className="pointer-events-none absolute -right-16 -bottom-16 h-56 w-56 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                    style={{ background: "radial-gradient(closest-side, var(--violet), transparent)" }} />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Marketing Tool Stack & Workflow */}
        <section id="toolstack" className="py-20">
          <SectionHead eyebrow="Tech Stack" title="Marketing Tool Stack & Workflow" sub="A battle-tested arsenal of advertising, analytics, and creative platforms that power high-performance campaigns." />
          <div className="mt-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {toolStack.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 100}>
                <div className="glass gradient-border group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                  <div
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: `linear-gradient(135deg, ${cat.from}, ${cat.to})`,
                      boxShadow: `0 10px 30px -10px color-mix(in oklab, ${cat.from} 60%, transparent)`,
                    }}
                  >
                    <cat.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-4 text-lg font-semibold">{cat.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.tools.map((t) => (
                      <span
                        key={t.label}
                        className="group/badge relative inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:border-transparent hover:bg-background/80"
                      >
                        <span
                          className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0 transition-opacity duration-300 group-hover/badge:opacity-100"
                          style={{ boxShadow: `0 0 20px -5px ${cat.from}` }}
                        />
                        <t.icon className="h-3.5 w-3.5" style={{ color: cat.from }} />
                        {t.label}
                      </span>
                    ))}
                  </div>
                  <div
                    className="pointer-events-none absolute -right-16 -bottom-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                    style={{ background: `radial-gradient(closest-side, ${cat.from}, transparent)` }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Brands & Experience — Infinite Marquee */}
        <section id="brands" className="py-16">
          <SectionHead eyebrow="Collaborations" title="Brands & Experience" sub="Brands and organizations I've driven growth for across agency, retail, education, and corporate sectors." />
          <Reveal>
            <div className="glass-panel relative mt-10 overflow-hidden rounded-3xl py-8">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
              <div className="marquee-track flex w-max items-center gap-8 md:gap-14">
                {[...brands, ...brands].map((b, i) => (
                  <div
                    key={`${b.name}-${i}`}
                    className="group flex shrink-0 items-center justify-center"
                    title={b.name}
                  >
                    <img
                      src={b.url}
                      alt={`${b.name} logo`}
                      loading="lazy"
                      className="h-16 w-16 rounded-2xl object-contain p-1 opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:shadow-[0_0_40px_-8px_color-mix(in_oklab,var(--violet)_70%,transparent)] sm:h-20 sm:w-20 md:h-24 md:w-24"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>


        {/* Experience — Vertical Timeline */}
        <section id="experience" className="py-20">
          <SectionHead eyebrow="Career" title="Professional Journey" sub="A track record of compounding impact across agencies, e-commerce, education, and corporate brands." />
          <div className="relative mt-12">
            {/* Vertical glowing neon line */}
            <div
              aria-hidden
              className="absolute left-4 top-0 bottom-0 w-px sm:left-6"
              style={{
                background: "linear-gradient(to bottom, transparent, var(--violet), var(--cyan), var(--violet), transparent)",
                boxShadow: "0 0 12px color-mix(in oklab, var(--violet) 70%, transparent), 0 0 24px color-mix(in oklab, var(--cyan) 40%, transparent)",
              }}
            />
            <div className="flex flex-col gap-8">
              {experience.map((e, i) => (
                <Reveal key={i} delay={i * 90}>
                  <div className="relative pl-12 sm:pl-16">
                    {/* Timeline node */}
                    <div
                      aria-hidden
                      className="absolute left-4 top-6 h-4 w-4 -translate-x-1/2 rounded-full sm:left-6"
                      style={{
                        background: "linear-gradient(135deg, var(--violet), var(--cyan))",
                        boxShadow: "0 0 0 4px color-mix(in oklab, var(--background) 80%, transparent), 0 0 20px color-mix(in oklab, var(--violet) 80%, transparent), 0 0 40px color-mix(in oklab, var(--cyan) 60%, transparent)",
                      }}
                    />
                    <div className="glass gradient-border glow-hover group relative w-full overflow-hidden rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold sm:text-xl">{e.role}</h3>
                          <div className="mt-1.5 flex items-center gap-2 text-sm font-medium text-gradient">
                            <Briefcase className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--cyan)" }} /> {e.company}
                          </div>
                        </div>
                        <span className="glass shrink-0 rounded-full px-3 py-1 text-xs font-medium text-muted-foreground">{e.date}</span>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{e.desc}</p>
                      <div className="pointer-events-none absolute -right-16 -bottom-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                        style={{ background: "radial-gradient(closest-side, var(--cyan), transparent)" }} />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>



        {/* Contact */}
        <section id="contact" className="py-20">
          <SectionHead eyebrow="Contact" title="Get In Touch" sub="Open to senior digital marketing roles, consulting engagements, and strategic collaborations." />
          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-2">
              {[
                { icon: Mail, label: "Email", value: "aungswampyae3@gmail.com", href: "mailto:aungswampyae3@gmail.com" },
                { icon: Phone, label: "Phone", value: "09 755 158 687", href: "tel:+95755158687" },
                { icon: MapPin, label: "Address", value: "13 Quarters, Hlaing Township, Yangon" },
              ].map(c => (
                <a key={c.label} href={c.href} className="glass gradient-border glow-hover flex items-start gap-4 rounded-3xl p-5 transition-transform hover:-translate-y-0.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white"
                    style={{ background: "linear-gradient(135deg, var(--violet), var(--cyan))" }}>
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="mt-1 text-sm font-medium">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
            <form onSubmit={onSubmit} className="glass gradient-border space-y-4 rounded-3xl p-6 lg:col-span-3">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" name="name" />
                <Field label="Email Address" name="email" type="email" />
              </div>
              <Field label="Subject" name="subject" />
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Message</label>
                <textarea required rows={5} className="w-full resize-none rounded-2xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary" />
              </div>
              <button type="submit" className="btn-neon group inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold">
                {sent ? "Message Sent ✓" : (<>Submit Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></>)}
              </button>
            </form>

          </div>
        </section>

        <footer className="mt-10 border-t border-border py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">© 2026 Aung Swam Pyae. All rights reserved.</p>
            <div className="flex items-center gap-2">
              {[Linkedin, Github, Facebook].map((I, i) => (
                <a key={i} href="#" className="rounded-full border border-border p-2 text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div className="max-w-2xl">
      <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]"
        style={{ background: "color-mix(in oklab, var(--violet) 15%, transparent)", color: "var(--cyan)", border: "1px solid color-mix(in oklab, var(--cyan) 30%, transparent)" }}>
        {eyebrow}
      </div>
      <h2 className="text-gradient mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-3 text-base text-muted-foreground">{sub}</p>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</label>
      <input required name={name} type={type} className="w-full rounded-2xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary" />
    </div>

  );
}
