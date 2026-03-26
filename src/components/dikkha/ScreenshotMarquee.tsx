"use client"

const ROW1 = [
  { src: "/products/dikkha/slides/slide1.png", alt: "Dikkha AI launch screen" },
  { src: "/products/dikkha/slides/slide2.png", alt: "My Library – all books in one place" },
  { src: "/products/dikkha/slides/slide3.png", alt: "Select text → Flashcard or AI" },
  { src: "/products/dikkha/slides/slide4.png", alt: "AI explanation in Bangla with math" },
  { src: "/products/dikkha/slides/slide5.png", alt: "SSC 2026 suggestions" },
  { src: "/products/dikkha/slides/slide6.png", alt: "Flashcard study mode" },
  { src: "/products/dikkha/slides/slide7.png", alt: "Formula sheet" },
  { src: "/products/dikkha/slides/slide8.png", alt: "AI Infographic generation" },
]

const ROW2 = [
  { src: "/products/dikkha/slides/slide5.png", alt: "SSC 2026 suggestions" },
  { src: "/products/dikkha/slides/slide6.png", alt: "Flashcard study mode" },
  { src: "/products/dikkha/slides/slide7.png", alt: "Formula sheet" },
  { src: "/products/dikkha/slides/slide8.png", alt: "AI Infographic generation" },
  { src: "/products/dikkha/slides/slide1.png", alt: "Dikkha AI launch screen" },
  { src: "/products/dikkha/slides/slide2.png", alt: "My Library – all books in one place" },
  { src: "/products/dikkha/slides/slide3.png", alt: "Select text → Flashcard or AI" },
  { src: "/products/dikkha/slides/slide4.png", alt: "AI explanation in Bangla with math" },
]

function MarqueeTrack({ slides, direction }: { slides: typeof ROW1; direction: "left" | "right" }) {
  const doubled = [...slides, ...slides]
  const animClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right"

  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className={`flex gap-4 shrink-0 ${animClass} group-hover:[animation-play-state:paused]`}>
        {doubled.map((slide, i) => (
          <div
            key={i}
            className="relative shrink-0 w-[155px] sm:w-[175px] h-[240px] sm:h-[265px] rounded-2xl overflow-hidden border border-[#8b38bc]/25 shadow-[0_0_24px_rgba(139,56,188,0.18)] transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_36px_rgba(139,56,188,0.35)]"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover object-top block"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function ScreenshotMarquee() {
  return (
    <div className="group flex flex-col gap-4 w-full overflow-hidden">
      <MarqueeTrack slides={ROW1} direction="left" />
      <MarqueeTrack slides={ROW2} direction="right" />
    </div>
  )
}
