"use client";

import {
  ArrowBigUpDash,
  ArrowUpRight,
  Clapperboard,
  Music2,
  Share2,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { type ReactNode, useRef } from "react";
import clsx from "clsx";

const kineticSlides = [
  {
    title: "Neon Frontiers",
    caption: "Intro slide with holographic typography and audio-reactive particles.",
    hue: "from-[#4f68ff] via-[#00d8ff] to-[#00ffa3]",
  },
  {
    title: "Creative Stack",
    caption: "Explain the tooling and frameworks powering the music player experience.",
    hue: "from-[#ff6cf2] via-[#6c7bff] to-[#00d8ff]",
  },
  {
    title: "Social Resonance",
    caption: "Highlight the connected social accounts and community reach.",
    hue: "from-[#6c7bff] via-[#00ffa3] to-[#ffef9f]",
  },
];

const presentationBeats = [
  {
    title: "01 — Atmosphere",
    description:
      "Set the tone with a dark-room intro, kinetic lasers, and zoom-masked typography synced to ambient pulses.",
  },
  {
    title: "02 — Showcase",
    description:
      "Step into the music player UI. Glide through playlists, real-time equalizer, and responsive interactions.",
  },
  {
    title: "03 — Amplification",
    description:
      "Reveal the social layer: Instagram snippets, TikTok loops, GitHub repo, and live demo QR portals.",
  },
  {
    title: "04 — Futureproof",
    description:
      "Close with Web3-ready access, spatial audio upgrades, and community remix challenges.",
  },
];

const socialBursts = [
  {
    label: "Instagram Stories",
    stat: "Immersive swipes",
    detail: "Loop the hero animation as a 15s story with reactive subtitles.",
  },
  {
    label: "YouTube Shorts",
    stat: "Cinematic teasers",
    detail: "Cut mini-trailers inspired by Luis Urrutia’s techno pacing.",
  },
  {
    label: "Spotify Canvas",
    stat: "Audio-linked visuals",
    detail: "Extend the morphing gradient as a looping 8s canvas.",
  },
];

const technoPalette = [
  "#6c7bff",
  "#00d8ff",
  "#8f6fff",
  "#00ffa3",
  "#ff6cf2",
  "#ffe066",
];

const springConfig = { damping: 18, stiffness: 140 };

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  const progressX = useSpring(scrollYProgress, springConfig);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.75]);

  return (
    <div ref={scrollRef} className="relative overflow-hidden">
      <span className="techno-grid" />
      <span className="scanline" />
      <span className="glow-orb orb-1" />
      <span className="glow-orb orb-2" />
      <span className="glow-orb orb-3" />

      <motion.span
        style={{ scaleX: progressX }}
        className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left bg-gradient-to-r from-[#6c7bff] via-[#00d8ff] to-[#ff6cf2]"
      />

      <motion.div
        className="pointer-events-none fixed inset-0 z-[-1]"
        style={{
          opacity: glowOpacity,
          background:
            "radial-gradient(circle at 25% 20%, rgba(108, 123, 255, 0.18), transparent 55%)",
        }}
      />

      <main className="relative mx-auto flex min-h-screen w-full max-w-[1180px] flex-col gap-24 px-6 pb-28 pt-24 sm:px-10 md:px-16">
        <header className="relative flex flex-col-reverse gap-10 md:flex-row md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex-1 space-y-8"
          >
            <div className="inline-flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#6c7bff]/50 bg-[#03031d]/80 px-4 py-1 text-sm tracking-[0.3em] uppercase text-[#00d8ff] shadow-[0_0_15px_rgba(0,216,255,0.35)]">
                Neo-Deck 2025
              </span>
              <motion.span
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xs uppercase tracking-[0.35em] text-[#ff6cf2]/80"
              >
                Web Development x Sonic Storytelling
              </motion.span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1.1, ease: "easeOut" }}
              className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
            >
              <span className="bg-gradient-to-r from-[#6c7bff] via-[#00d8ff] to-[#ff6cf2] bg-clip-text text-transparent">
                Futuristic Web Development
              </span>{" "}
              <span className="relative inline-flex flex-col">
                <span className="contrast-[1.15] drop-shadow-[0_0_28px_rgba(108,123,255,0.5)]">
                  Presentation Deck
                </span>
                <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#00d8ff] to-transparent blur-sm" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="max-w-xl text-pretty text-lg text-[#cfd7ff]/85 md:text-xl"
            >
              Deliver a cinematic tour of your music player web app — morphing
              gradients, holographic UI, immersive 3D slides, and social-powered
              storytelling crafted for the college stage.
            </motion.p>

            <div className="flex flex-wrap items-center gap-5 pt-2">
              <NeonAction
                icon={<Sparkles className="size-4" />}
                label="Launch Presentation Flow"
              />
              <NeonAction
                variant="outline"
                icon={<ArrowUpRight className="size-4" />}
                label="Drop live demo QR"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotateX: 15 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ delay: 0.35, duration: 1.1, ease: "easeOut" }}
            className="relative flex flex-1 items-center justify-center"
          >
            <KineticHero />
          </motion.div>
        </header>

        <section className="relative rounded-[28px] border border-white/10 bg-white/[0.02] px-6 py-10 backdrop-blur-xl sm:px-10 md:px-14">
          <div className="pointer-events-none absolute inset-x-0 -top-24 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 0.65, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="h-32 w-32 rounded-full bg-gradient-to-b from-[#6c7bff] to-transparent blur-[60px]"
            />
          </div>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="space-y-5">
              <SectionTitle
                kicker="Slide Architecture"
                title="Build an immersive techno narrative"
              />
              <p className="text-balance text-base text-[#cfd7ff]/80 md:text-lg">
                Render each chapter with zoom-masked text, morphing backgrounds,
                and pulse-synced transitions. Use the slides below as anchors
                for your Sky Work AI prompt and live delivery.
              </p>
              <div className="grid gap-4">
                {presentationBeats.map((beat, index) => (
                  <motion.div
                    key={beat.title}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: index * 0.08, duration: 0.8 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.018] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/[0.03] opacity-0 transition-opacity group-hover:opacity-100" />
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00d8ff]/90">
                      {beat.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#dce2ff]/80 md:text-base">
                      {beat.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <SlideCarousel />
            </div>
          </div>
        </section>

        <section className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] shadow-[0_25px_70px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(108,123,255,0.4),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(0,216,255,0.5),transparent_45%)] opacity-70" />
            <div className="relative flex flex-col gap-8 p-8 md:p-10">
              <SectionTitle
                kicker="Music Player Showcase"
                title="Drop the hyperreal screenshot"
              />
              <p className="max-w-2xl text-base text-[#cfd7ff]/85">
                Embed a high-resolution frame of your music player web app. Work
                in responsive cards, glassmorphism, and neon equalizers to echo
                the live demo vibe. Sky Work AI prompt below already instructs
                the cinematic renders and morph transitions.
              </p>
              <MusicPlayerMock />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="relative flex flex-col gap-6 rounded-[28px] border border-white/10 bg-white/[0.02] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
          >
            <SectionTitle
              kicker="Social Energy"
              title="Link every surface to community"
              align="left"
            />
            <p className="text-sm text-[#d2dcff]/80 md:text-base">
              Guide the audience from the deck into your content ecosystem.
              Blend social handles into QR-coded slides, animate icons with wave
              distortion, and promise remixable assets for creators.
            </p>
            <div className="grid gap-3">
              {socialBursts.map((burst, idx) => (
                <motion.div
                  key={burst.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: idx * 0.12, duration: 0.9 }}
                  className="group flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/[0.015] p-4"
                >
                  <span className="text-xs uppercase tracking-[0.25em] text-[#00d8ff]/90">
                    {burst.label}
                  </span>
                  <span className="text-lg font-semibold text-white">
                    {burst.stat}
                  </span>
                  <p className="text-xs text-[#dce2ff]/75 md:text-sm">
                    {burst.detail}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-[#ff6cf2]/75">
              <Share2 className="size-4" />
              Broadcast the drop in real time
            </div>
          </motion.div>
        </section>

        <section className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#040017]/70 px-6 py-12 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-3xl sm:px-12 md:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_70%)]" />
          <div className="relative flex flex-col gap-8">
            <SectionTitle
              kicker="Cinematic Motion Plan"
              title="Prompt blueprint for Sky Work AI"
            />
            <PromptBlock />
            <div className="grid gap-8 md:grid-cols-3">
              <InfoBurst
                icon={<Clapperboard className="size-6 text-[#6c7bff]" />}
                title="Futuristic Storyboarding"
                copy="Map scenes with parallax nebula fog, scanning light rays, and rapid zoom cuts synced to audio cues."
              />
              <InfoBurst
                icon={<Music2 className="size-6 text-[#00d8ff]" />}
                title="Sonic Visualizers"
                copy="Drive typography reveal with waveform-powered masks, spectrum bars, and refracted particle bursts."
              />
              <InfoBurst
                icon={<TrendingUp className="size-6 text-[#ff6cf2]" />}
                title="Impact Metrics"
                copy="Call out deployment speed, Core Web Vitals, and social reach using animated stat counters."
              />
            </div>
          </div>
        </section>

        <section className="relative rounded-[28px] border border-white/10 bg-white/[0.02] px-6 py-10 backdrop-blur-2xl sm:px-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="space-y-6"
            >
              <SectionTitle
                kicker="Flow of the Presentation"
                title="Command the room with immersive sequencing"
              />
              <p className="text-sm text-[#dce2ff]/80 md:text-base">
                Layer the talk in three acts — unveil the web fundamentals,
                glide into the music player build, then crescendo with community
                impact. Use ambient drones and synced click triggers to keep the
                experience fluid.
              </p>
              <div className="grid gap-5">
                {["High-energy intro with LED tunnel zoom",
                  "Real-time code highlights over the UI demo",
                  "Social proof splash with kinetic counters",
                  "Finale: invite to remix + live QR scan"].map(
                  (item, idx) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ delay: idx * 0.1, duration: 0.7 }}
                      className="flex items-center gap-4"
                    >
                      <span className="flex size-9 items-center justify-center rounded-full border border-white/20 bg-[#030318] text-xs font-semibold text-[#00d8ff]">
                        {idx + 1}
                      </span>
                      <span className="text-sm text-[#eef2ff]/85 md:text-base">
                        {item}
                      </span>
                    </motion.div>
                  ),
                )}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
              className="relative flex flex-col gap-5 overflow-hidden rounded-[24px] border border-white/10 bg-[#050020]/80 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.6)]"
            >
              <div className="absolute -right-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#6c7bff]/40 blur-[70px]" />
              <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#ff6cf2]/80">
                <ArrowBigUpDash className="size-4" />
                Stage Enhancements
              </span>
              <p className="text-pretty text-lg text-white/90">
                Install LED strips around the projector frame, play a deep techno
                loop underneath your narration, and trigger particle bursts when
                revealing the code-to-design transitions.
              </p>
              <p className="text-sm text-[#dce2ff]/70">
                Bonus move: wrap up by flashing a real-time deploy log (Vercel)
                to prove the music player is production-ready. Confidence level:
                off the charts.
              </p>
            </motion.div>
          </div>
        </section>

        <footer className="relative flex flex-col items-center gap-6 py-12">
          <div className="text-center text-sm uppercase tracking-[0.35em] text-[#7c89ff]/75">
            Crafted for the college stage · Rendered for the future web
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-8 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 backdrop-blur-2xl"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#cfd7ff]/80">
              Now Streaming
            </span>
            <div className="flex items-center gap-2 text-sm text-white/85">
              <span className="h-2 w-2 rounded-full bg-[#00ffa3] animate-pulse" />
              agentic-723d947f.vercel.app
            </div>
          </motion.div>
        </footer>
      </main>
    </div>
  );
}

function SectionTitle({
  kicker,
  title,
  align = "left",
}: {
  kicker: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={clsx("flex flex-col gap-3", {
        "items-center text-center": align === "center",
      })}
    >
      <span className="text-xs uppercase tracking-[0.28em] text-[#7f8aff]/80">
        {kicker}
      </span>
      <h2 className="text-pretty text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function NeonAction({
  icon,
  label,
  variant = "solid",
}: {
  icon: ReactNode;
  label: string;
  variant?: "solid" | "outline";
}) {
  return (
    <button
      type="button"
      className={clsx(
        "group flex items-center gap-2 rounded-full px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] transition-all",
        {
          "bg-white text-[#050017] shadow-[0_12px_30px_rgba(108,123,255,0.35)]":
            variant === "solid",
          "border border-white/20 bg-white/[0.02] text-[#dce2ff]/90 hover:border-[#6c7bff]/60":
            variant === "outline",
        },
      )}
    >
      <span className="transition-transform group-hover:scale-[1.1]">
        {icon}
      </span>
      <span>{label}</span>
    </button>
  );
}

function SlideCarousel() {
  return (
    <div className="flex h-full w-full max-w-[420px] flex-col gap-4 perspective-[1600px]">
      {kineticSlides.map((slide, index) => (
        <motion.div
          key={slide.title}
          initial={{ opacity: 0, rotateX: 25, y: 40 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: index * 0.15,
          }}
          whileHover={{ y: -6, scale: 1.02 }}
          className="relative overflow-hidden rounded-[22px] border border-white/12 bg-[#050019]/85 px-6 py-7 shadow-[0_18px_45px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          style={{
            transformOrigin: "center",
          }}
        >
          <div
            className={clsx(
              "absolute inset-x-0 top-0 h-1.5",
              `bg-gradient-to-r ${slide.hue}`,
            )}
          />
          <div className="absolute -left-20 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-[#ffffff]/5 blur-[55px]" />
          <h3 className="text-lg font-semibold text-white md:text-xl">
            {slide.title}
          </h3>
          <p className="mt-3 text-xs text-[#dce2ff]/75 md:text-sm">
            {slide.caption}
          </p>
          <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-[#9aa6ff]/70">
            <Sparkles className="size-4" />
            Cinematic Zoom + Text Mask
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function MusicPlayerMock() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative flex flex-col gap-4 rounded-[24px] border border-white/10 bg-[#060021]/90 p-6 shadow-[0_25px_55px_rgba(0,0,0,0.55)]"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="size-10 rounded-full bg-gradient-to-br from-[#6c7bff] via-[#00d8ff] to-[#ff6cf2] shadow-[0_0_20px_rgba(108,123,255,0.6)]" />
          <div>
            <p className="text-sm font-semibold text-white">
              Midnight Pulse Radio
            </p>
            <p className="text-xs text-[#dce2ff]/70">Live · Synthwave</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#66ffd2]/80">
          <Sparkles className="size-4" />
          3D Visualizer On
        </div>
      </div>

      <div className="relative h-44 overflow-hidden rounded-[20px] border border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(108,123,255,0.5),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(0,216,255,0.55),transparent_45%)] blur" />
        <div className="relative flex h-full items-end justify-between px-5 pb-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.25em] text-white/70">
              Now Playing
            </span>
            <span className="text-lg font-semibold text-white">
              Chromatic Drift
            </span>
            <span className="text-xs text-[#eef2ff]/70">AURORA · Remix</span>
          </div>
          <div className="flex items-end gap-2">
            {Array.from({ length: 12 }).map((_, index) => (
              <span
                key={index}
                className="w-1 rounded-full bg-white/80"
                style={{
                  height: `${Math.sin(index + 1) * 18 + 22}px`,
                  background: `linear-gradient(180deg, ${technoPalette[index % technoPalette.length]}, rgba(255,255,255,0.1))`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-[0.4em] text-[#7f8aff]/80">
            02:18
          </span>
          <div className="h-[3px] w-40 rounded-full bg-white/10">
            <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#6c7bff] via-[#00d8ff] to-[#ff6cf2]" />
          </div>
          <span className="text-xs uppercase tracking-[0.4em] text-[#7f8aff]/80">
            05:42
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-white/20 bg-white/[0.06] text-white/90 transition hover:border-[#6c7bff]/60"
          >
            <Music2 className="size-4" />
          </button>
          <button
            type="button"
            className="grid size-12 place-items-center rounded-full bg-white text-[#030015] shadow-[0_18px_45px_rgba(108,123,255,0.5)] transition hover:scale-105"
          >
            <ArrowUpRight className="size-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function KineticHero() {
  return (
    <motion.div
      className="relative aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-[32px] border border-white/10 bg-[#040017]/70 p-6 backdrop-blur-2xl"
      initial={{ opacity: 0, rotateY: -15 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.04),transparent_65%)]" />
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#00d8ff]/80">
            Slide 00
          </span>
          <span className="rounded-full border border-white/20 bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-[#ff6cf2]/80">
            Live
          </span>
        </div>
        <div className="space-y-4 text-white">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#cfd7ff]/70">
            Web Dev x Music Experience
          </p>
          <h3 className="text-2xl font-semibold leading-tight">
            Hyperloop your web presentation with{" "}
            <span className="bg-gradient-to-r from-[#6c7bff] via-[#00d8ff] to-[#ff6cf2] bg-clip-text text-transparent">
              techno cinematic motion
            </span>
          </h3>
        </div>
        <div className="relative flex flex-col gap-3">
          <div className="absolute inset-0 translate-y-4 rounded-[22px] bg-gradient-to-br from-[#6c7bff]/40 to-transparent blur-3xl" />
          <div className="relative flex items-center justify-between rounded-[22px] border border-white/15 bg-white/[0.04] px-4 py-5">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.35em] text-[#9ba9ff]/75">
                Sky Work AI
              </span>
              <span className="text-sm text-white">Futuristic deck generator</span>
            </div>
            <div className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-[#6c7bff] via-[#00d8ff] to-[#ff6cf2] text-white shadow-[0_10px_35px_rgba(108,123,255,0.5)]">
              <Sparkles className="size-4" />
            </div>
          </div>
          <div className="relative rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-3 text-[11px] uppercase tracking-[0.4em] text-[#d0d7ff]/70">
            Morph · Zoom · Mask · 3D Parallax · Cinematic Beats
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function InfoBurst({
  icon,
  title,
  copy,
}: {
  icon: ReactNode;
  title: string;
  copy: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6"
    >
      <div className="flex items-center gap-3 text-sm font-semibold text-white/90">
        <span className="grid size-10 place-items-center rounded-full bg-white/[0.05]">
          {icon}
        </span>
        {title}
      </div>
      <p className="text-sm text-[#d3dcff]/75">{copy}</p>
    </motion.div>
  );
}

function PromptBlock() {
  const lines = [
    "Design a 12-slide cinematic presentation about futuristic web development featuring a neon music player website with social media integrations.",
    "Visual language: techno nightclub, holographic UI, volumetric lighting, chromatic aberration, and morphing glass panels.",
    "Animation directives: aggressive zoom transitions, text masks that reveal headlines through waveform silhouettes, 3D parallax slides, particle trails synchronized to beats.",
    "Include high-resolution renders of the music player interface (desktop + mobile), showcasing playlists, equalizers, and linked social accounts with glowing QR codes.",
    "Color spectrum: midnight indigo, cyan laser, ultraviolet, vaporwave magenta, and emerald audio pulses inspired by Luis Urrutia’s YouTube motion edits.",
    "Add sections for intro atmosphere, development stack breakdown, UI/UX walkthrough, deployment via Vercel, and social amplification strategy.",
    "Deliver variants with immersive background loops, animated typography, and depth-of-field transitions for Sky Work AI to synthesize.",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative rounded-[26px] border border-[#6c7bff]/35 bg-[#060022]/85 p-6 text-sm text-[#e5e9ff]/90 shadow-[0_25px_70px_rgba(0,0,0,0.6)]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-10" />
      <div className="absolute -right-8 top-1/2 hidden h-32 w-32 -translate-y-1/2 rounded-full bg-[#6c7bff]/30 blur-[60px] md:block" />
      <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#7f8aff]/80">
        Sky Work AI Prompt
      </span>
      <div className="mt-4 space-y-3">
        {lines.map((line, idx) => (
          <div
            key={line}
            className="flex gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3"
          >
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#00d8ff]/70">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <p className="text-sm leading-relaxed text-[#d8dfff]/85">{line}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
