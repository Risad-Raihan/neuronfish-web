"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX, Play, Pause } from "lucide-react"

const BLOB_URL = "https://vutsp95hxyxhxwf2.public.blob.vercel-storage.com/mockup.mp4"

export function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(false)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          video.play().catch(() => {})
          setPlaying(true)
          setStarted(true)
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [started])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setPlaying(true)
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
  }

  return (
    <div ref={containerRef} className="relative group cursor-pointer" onClick={togglePlay}>
      {/* Ambient glow */}
      <div className="absolute -inset-8 rounded-3xl bg-[#8b38bc]/15 blur-[60px] pointer-events-none" />

      {/* Video frame */}
      <div className="relative rounded-2xl overflow-hidden border border-[#8b38bc]/30 bg-black shadow-[0_0_80px_rgba(139,56,188,0.2)]">
        <video
          ref={videoRef}
          src={BLOB_URL}
          muted
          playsInline
          loop
          preload="metadata"
          className="w-full h-auto block"
        />

        {/* Overlay gradient at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        {/* Controls */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          {/* Play/Pause pill */}
          <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 backdrop-blur-sm text-white text-xs font-medium select-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {playing ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
            {playing ? "Pause" : "Play"}
          </div>

          {/* Mute toggle */}
          <button
            onClick={toggleMute}
            className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 backdrop-blur-sm text-white text-xs font-medium select-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white/10"
            aria-label={muted ? "Unmute video" : "Mute video"}
          >
            {muted ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
            {muted ? "Unmute" : "Mute"}
          </button>
        </div>

        {/* Big play icon when paused */}
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 border border-white/25 backdrop-blur-sm">
              <Play className="h-7 w-7 text-white fill-white ml-1" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
