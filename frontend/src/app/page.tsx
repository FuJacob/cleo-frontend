import { Apple } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Highlighter } from "@/components/ui/highlighter";
import Image from "next/image";

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
          <ShimmerButton className="shadow-2xl">
            <span className="flex items-center gap-1.5 md:gap-2 text-center text-xs md:text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white">
              <Apple className="h-3.5 w-3.5 md:h-4 md:w-4" />
              <span className="hidden sm:inline">Get for Mac</span>
              <span className="sm:hidden">Get</span>
            </span>
          </ShimmerButton>
        </div>
      </nav>

      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex flex-col items-center text-center px-4 sm:px-6 bg-[url(/cleo_bg.svg)] text-white pt-20 md:pt-32 relative">
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 pointer-events-none" />

        <div className="flex-1 flex flex-col justify-center max-w-5xl relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]">
            Your{" "}
            <Highlighter action="underline" color="#FCD34D">
              AI
            </Highlighter>{" "}
            assistant for{" "}
            <Highlighter action="highlight" color="#FCD34D">
              macOS
            </Highlighter>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl text-white/95 px-2 mx-auto drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)]">
            Cleo lives natively on your Mac, deeply integrated with macOS. Stay
            focused, learn faster, and work smarter with AI that&apos;s always
            there when you need it.
          </p>
          <ShimmerButton className="shadow-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            <span className="flex items-center gap-2 text-center text-base sm:text-lg leading-none font-medium tracking-tight whitespace-pre-wrap text-white">
              <Apple className="h-5 w-5 sm:h-6 sm:w-6" />
              Get for Mac
            </span>
          </ShimmerButton>
        </div>

        {/* Keybinds - Three Groups in a Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 pb-12 sm:pb-16 md:pb-20 relative z-10">
          {/* Group 1: Explain */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-base text-white" style={{ fontFamily: 'var(--font-instrument-serif)' }}>Explain</p>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
              <kbd className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-lg font-bold text-white">
                ⌃
              </kbd>
              <kbd className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-lg font-bold text-white">
                ⌘
              </kbd>
              <kbd className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-lg font-bold text-white">
                E
              </kbd>
            </div>
          </div>

          {/* Group 2: Summarize */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-base text-white" style={{ fontFamily: 'var(--font-instrument-serif)' }}>Summarize</p>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
              <kbd className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-lg font-bold text-white">
                ⌃
              </kbd>
              <kbd className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-lg font-bold text-white">
                ⌘
              </kbd>
              <kbd className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-lg font-bold text-white">
                S
              </kbd>
            </div>
          </div>

          {/* Group 3: Revise text */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-base text-white" style={{ fontFamily: 'var(--font-instrument-serif)' }}>Revise text</p>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
              <kbd className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-lg font-bold text-white">
                ⌃
              </kbd>
              <kbd className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-lg font-bold text-white">
                ⌘
              </kbd>
              <kbd className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-lg font-bold text-white">
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
