import { Apple } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Highlighter } from "@/components/ui/highlighter";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Sarah Chen",
    username: "@sarahchen",
    body: "Cleo has completely transformed how I work on my Mac. It's like having an AI assistant that actually understands context.",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Michael Rodriguez",
    username: "@mrodriguez",
    body: "The keyboard shortcuts are genius. I can explain, summarize, or revise anything without breaking my workflow.",
    img: "https://avatar.vercel.sh/michael",
  },
  {
    name: "Emily Watson",
    username: "@emilyw",
    body: "Best productivity tool I've added to my Mac this year. The native integration is seamless.",
    img: "https://avatar.vercel.sh/emily",
  },
  {
    name: "David Park",
    username: "@davidpark",
    body: "I'm amazed at how natural it feels to use. Cleo just gets what I need without any friction.",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Jessica Liu",
    username: "@jessicaliu",
    body: "Finally, an AI assistant that doesn't feel like it's fighting against macOS. It just works.",
    img: "https://avatar.vercel.sh/jessica",
  },
  {
    name: "Alex Thompson",
    username: "@alexthompson",
    body: "The contextual understanding is incredible. Cleo knows exactly what I'm working on and provides relevant help.",
    img: "https://avatar.vercel.sh/alex",
  },
];

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-white/10 bg-white/5 hover:bg-white/10",
        "backdrop-blur-sm transition-colors"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white/80">{body}</blockquote>
    </figure>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 p-4 md:p-8 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <ul className="flex gap-4 md:gap-8 text-sm md:text-base text-white items-center">
            <li className="cursor-pointer hover:text-white/80 transition flex items-center gap-2">
              <Image src="/cleo_logo.svg" alt="Cleo Logo" width={32} height={32} className="w-7 h-7 md:w-8 md:h-8" />
              <span className="font-bold text-lg md:text-xl">Cleo</span>
            </li>
            <li className="hidden sm:block cursor-pointer hover:text-white/80 transition">
              Pricing
            </li>
            <li className="hidden md:block cursor-pointer hover:text-white/80 transition">
              Enterprise
            </li>
            <li className="hidden md:block cursor-pointer hover:text-white/80 transition">
              Careers
            </li>
            <li className="hidden lg:block cursor-pointer hover:text-white/80 transition">
              Blog
            </li>
          </ul>
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300/40 via-white/40 to-blue-300/40 blur-lg rounded-lg" />
            <ShimmerButton className="relative shadow-2xl shadow-blue-300/50 rounded-lg">
              <span className="flex items-center gap-1.5 md:gap-2 text-center text-xs md:text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white">
                <Apple className="h-3.5 w-3.5 md:h-4 md:w-4" />
                <span className="hidden sm:inline">Get for Mac</span>
                <span className="sm:hidden">Get</span>
              </span>
            </ShimmerButton>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex flex-col items-center text-center bg-[url(/cleo_bg.svg)] bg-cover bg-center text-white pt-24 sm:pt-28 md:pt-32 relative overflow-hidden">
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 pointer-events-none" />

        <div className="flex-1 flex flex-col justify-center w-full relative z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]">
              Your{" "}
              <Highlighter action="underline" color="#FCD34D">
                AI
              </Highlighter>{" "}
              copilot, one{" "}
              <Highlighter action="highlight" color="#FCD34D">
                shortcut
              </Highlighter>{" "}
              away
            </h1>

            {/* Divider */}
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mb-6 sm:mb-8"></div>

            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl text-white/95 px-2 drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)]">
              Lightweight, fast, and invisible until you need it. Three shortcuts give you instant explanations, summaries, and revisions—without disrupting your flow.
            </p>
            <div className="relative mb-12 sm:mb-16">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300/40 via-white/40 to-blue-300/40 blur-xl rounded-lg" />
              <ShimmerButton className="relative shadow-2xl shadow-blue-300/50 rounded-lg">
                <span className="flex items-center gap-2 text-center text-base sm:text-lg leading-none font-medium tracking-tight whitespace-pre-wrap text-white">
                  <Apple className="h-5 w-5 sm:h-6 sm:w-6" />
                  Get for Mac
                </span>
              </ShimmerButton>
            </div>
          </div>

          {/* Reviews Marquee - Full Width */}
          <div className="relative w-full overflow-hidden">
            <Marquee pauseOnHover className="[--duration:40s]">
              {reviews.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>

          </div>
        </div>

        {/* Keybinds - Three Groups in a Row */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 pb-8 sm:pb-12 md:pb-16 lg:pb-20 relative z-10 px-4">
          {/* Group 1: Explain */}
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <p className="text-sm sm:text-base text-white" style={{ fontFamily: 'var(--font-instrument-serif)' }}>Explain</p>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-white/20">
              <kbd className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-base sm:text-lg font-bold text-white">
                ⌃
              </kbd>
              <kbd className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-base sm:text-lg font-bold text-white">
                ⌘
              </kbd>
              <kbd className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-base sm:text-lg font-bold text-white">
                E
              </kbd>
            </div>
          </div>

          {/* Group 2: Summarize */}
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <p className="text-sm sm:text-base text-white" style={{ fontFamily: 'var(--font-instrument-serif)' }}>Summarize</p>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-white/20">
              <kbd className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-base sm:text-lg font-bold text-white">
                ⌃
              </kbd>
              <kbd className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-base sm:text-lg font-bold text-white">
                ⌘
              </kbd>
              <kbd className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-base sm:text-lg font-bold text-white">
                S
              </kbd>
            </div>
          </div>

          {/* Group 3: Revise text */}
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <p className="text-sm sm:text-base text-white" style={{ fontFamily: 'var(--font-instrument-serif)' }}>Revise text</p>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-white/20">
              <kbd className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-base sm:text-lg font-bold text-white">
                ⌃
              </kbd>
              <kbd className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-base sm:text-lg font-bold text-white">
                ⌘
              </kbd>
              <kbd className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-base sm:text-lg font-bold text-white">
                W
              </kbd>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Footer */}
      <footer className="px-4 py-4 sm:py-3 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex items-center gap-2">
            <Image src="/cleo_logo.svg" alt="Cleo Logo" width={16} height={16} className="w-4 h-4" />
            <p className="text-xs text-gray-400 mb-0 text-center sm:text-left">
              © 2025 <span className="font-bold">Cleo</span>. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4 sm:gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Terms
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
