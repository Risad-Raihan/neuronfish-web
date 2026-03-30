"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "motion/react"
import Lottie from "lottie-react"
import flagAnimation from "@/../public/bd-flag.json"

const TITLE = "Made in Bangladesh"

function TypingText({ text, className }: { text: string; className?: string }) {
  const [displayed, setDisplayed] = useState("")
  const [phase, setPhase] = useState<"typing" | "hold" | "erasing">("typing")
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: false, margin: "-60px" })

  useEffect(() => {
    if (!isInView) return

    let timeout: ReturnType<typeof setTimeout>

    if (phase === "typing") {
      if (displayed.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length + 1))
        }, 70 + Math.random() * 50)
      } else {
        timeout = setTimeout(() => setPhase("hold"), 2200)
      }
    } else if (phase === "hold") {
      timeout = setTimeout(() => setPhase("erasing"), 100)
    } else if (phase === "erasing") {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 35)
      } else {
        timeout = setTimeout(() => setPhase("typing"), 600)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, phase, isInView, text])

  return (
    <span ref={ref} className={className} aria-label={text}>
      {displayed}
      <motion.span
        className="inline-block w-[3px] h-[0.85em] bg-white/80 ml-0.5 align-middle rounded-full"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  )
}

function CottonCloud({ className, duration, delay, size = 1 }: { className: string; duration: number; delay: number; size?: number }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ x: "120%" }}
      animate={{ x: "-140%" }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    >
      <svg
        viewBox="0 0 300 120"
        className="w-full h-full"
        style={{ transform: `scale(${size})` }}
      >
        <defs>
          <radialGradient id={`cg-${duration}`} cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="white" stopOpacity="0.35" />
            <stop offset="60%" stopColor="white" stopOpacity="0.18" />
            <stop offset="100%" stopColor="white" stopOpacity="0.04" />
          </radialGradient>
        </defs>
        <g fill={`url(#cg-${duration})`}>
          {/* Main body — large soft ellipse */}
          <ellipse cx="150" cy="68" rx="90" ry="36" />
          {/* Top puffs — the cotton bumps */}
          <ellipse cx="110" cy="48" rx="42" ry="32" />
          <ellipse cx="155" cy="40" rx="50" ry="36" />
          <ellipse cx="195" cy="50" rx="38" ry="28" />
          {/* Extra puffs for volume */}
          <ellipse cx="130" cy="38" rx="35" ry="26" />
          <ellipse cx="175" cy="36" rx="40" ry="28" />
          {/* Bottom fill */}
          <ellipse cx="150" cy="78" rx="85" ry="26" />
        </g>
      </svg>
    </motion.div>
  )
}

function TreeSilhouette({ className, variant = 0 }: { className: string; variant?: number }) {
  const trees = [
    // Tall tree with round canopy
    <svg key="0" viewBox="0 0 50 140" className="w-full h-full" fill="none">
      <rect x="22" y="70" width="6" height="70" rx="2" fill="rgba(12,35,18,0.85)" />
      <g className="origin-bottom animate-tree-sway">
        <ellipse cx="25" cy="55" rx="24" ry="22" fill="rgba(15,55,28,0.75)" />
        <ellipse cx="20" cy="40" rx="20" ry="20" fill="rgba(18,62,32,0.7)" />
        <ellipse cx="32" cy="38" rx="18" ry="18" fill="rgba(16,58,30,0.65)" />
        <ellipse cx="25" cy="28" rx="16" ry="15" fill="rgba(20,65,35,0.65)" />
        <ellipse cx="25" cy="20" rx="11" ry="10" fill="rgba(22,70,38,0.6)" />
      </g>
    </svg>,
    // Tall pine-like
    <svg key="1" viewBox="0 0 40 150" className="w-full h-full" fill="none">
      <rect x="17" y="80" width="6" height="70" rx="2" fill="rgba(12,35,18,0.85)" />
      <g className="origin-bottom animate-tree-sway" style={{ animationDelay: "-1.5s" }}>
        <ellipse cx="20" cy="65" rx="18" ry="20" fill="rgba(14,50,26,0.75)" />
        <ellipse cx="20" cy="48" rx="16" ry="18" fill="rgba(16,56,30,0.7)" />
        <ellipse cx="20" cy="34" rx="13" ry="15" fill="rgba(18,60,32,0.65)" />
        <ellipse cx="20" cy="22" rx="10" ry="12" fill="rgba(20,64,35,0.6)" />
        <ellipse cx="20" cy="14" rx="6" ry="8" fill="rgba(22,68,38,0.55)" />
      </g>
    </svg>,
    // Bushy wide tree
    <svg key="2" viewBox="0 0 60 130" className="w-full h-full" fill="none">
      <rect x="26" y="75" width="7" height="55" rx="2" fill="rgba(12,35,18,0.85)" />
      <g className="origin-bottom animate-tree-sway" style={{ animationDelay: "-2.8s" }}>
        <ellipse cx="30" cy="58" rx="28" ry="22" fill="rgba(14,52,27,0.75)" />
        <ellipse cx="22" cy="42" rx="22" ry="20" fill="rgba(17,58,30,0.7)" />
        <ellipse cx="38" cy="44" rx="20" ry="18" fill="rgba(16,55,29,0.65)" />
        <ellipse cx="30" cy="34" rx="18" ry="16" fill="rgba(20,62,34,0.65)" />
      </g>
    </svg>,
  ]

  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {trees[variant % trees.length]}
    </div>
  )
}

export function MadeInBangladesh() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden rounded-2xl border border-white/[0.06] min-h-[380px] md:min-h-[420px] flex flex-col items-center justify-center text-center"
    >
      {/* Sky background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sky gradient — warm daylight */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3b6fa0] via-[#5a8fb8] via-55% to-[#8bb5a0]/40" />

        {/* Sun */}
        <motion.div
          className="absolute top-[8%] right-[12%]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        >
          {/* Sun glow — outer */}
          <div className="absolute -inset-8 bg-[radial-gradient(circle,rgba(255,220,120,0.25),transparent_65%)]" />
          {/* Sun glow — mid */}
          <div className="absolute -inset-4 bg-[radial-gradient(circle,rgba(255,200,80,0.3),transparent_60%)]" />
          {/* Sun core */}
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#ffe580] via-[#ffd24d] to-[#f5a623] shadow-[0_0_40px_rgba(255,210,80,0.5),0_0_80px_rgba(255,180,50,0.2)]" />
          {/* Sun rays — subtle rotating lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-24 h-24 md:w-32 md:h-32 opacity-[0.08]"
              style={{
                background: "conic-gradient(from 0deg, transparent, white 2%, transparent 4%,transparent, white 27%, transparent 29%,transparent, white 52%, transparent 54%,transparent, white 77%, transparent 79%)",
                animation: "spin 30s linear infinite",
              }}
            />
          </div>
        </motion.div>

        {/* Warm horizon glow */}
        <div className="absolute bottom-0 inset-x-0 h-[35%] bg-gradient-to-t from-[#a08040]/10 via-[#c4a060]/5 to-transparent" />

        {/* Cotton clouds */}
        <CottonCloud className="top-[6%] w-[220px] h-[90px]" duration={50} delay={0} />
        <CottonCloud className="top-[20%] w-[180px] h-[75px]" duration={60} delay={10} />
        <CottonCloud className="top-[10%] w-[260px] h-[100px] opacity-70" duration={72} delay={25} />
        <CottonCloud className="top-[30%] w-[150px] h-[65px] opacity-60" duration={45} delay={15} />
        <CottonCloud className="top-[16%] w-[200px] h-[80px] opacity-50" duration={80} delay={35} />

        {/* Trees — taller, varied, along bottom edge */}
        <TreeSilhouette className="bottom-0 left-[2%] w-[45px] h-[120px]" variant={0} />
        <TreeSilhouette className="bottom-0 left-[10%] w-[35px] h-[140px]" variant={1} />
        <TreeSilhouette className="bottom-0 left-[20%] w-[50px] h-[110px] scale-x-[-1]" variant={2} />
        <TreeSilhouette className="bottom-0 right-[3%] w-[40px] h-[130px]" variant={1} />
        <TreeSilhouette className="bottom-0 right-[12%] w-[48px] h-[115px] scale-x-[-1]" variant={0} />
        <TreeSilhouette className="bottom-0 right-[22%] w-[36px] h-[135px]" variant={2} />

        {/* Ground */}
        <div className="absolute bottom-0 inset-x-0 h-[6%] bg-gradient-to-t from-[#0a1a10]/70 via-[#122818]/40 to-transparent" />

        {/* Floating pollen/dust */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] rounded-full bg-white/20"
            style={{
              left: `${15 + (i * 13) % 70}%`,
              top: `${30 + (i * 11) % 40}%`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [0, -15 - (i % 3) * 8, -30],
              x: [0, (i % 2 === 0 ? 6 : -6), 0],
            }}
            transition={{
              duration: 4 + (i % 3),
              delay: i * 0.7,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-12">
        {/* Waving flag */}
        <motion.div
          className="relative mb-4"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
        >
          <div className="absolute inset-0 scale-[2] pointer-events-none">
            <div className="w-full h-full bg-[radial-gradient(ellipse,rgba(0,106,78,0.15),transparent_55%)] blur-lg" />
          </div>
          <Lottie
            animationData={flagAnimation}
            loop
            autoplay
            className="w-28 h-28 md:w-36 md:h-36 relative drop-shadow-[0_6px_25px_rgba(0,0,0,0.4)]"
          />
        </motion.div>

        {/* "Made in Bangladesh" — looping typewriter */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] min-h-[1.2em]">
          <TypingText text={TITLE} />
        </h3>
      </div>
    </div>
  )
}
