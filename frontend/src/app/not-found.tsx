import Link from "next/link";
import Image from "next/image";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Highlighter } from "@/components/ui/highlighter";
import { Apple } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 p-4 md:p-8 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="flex gap-2 items-center cursor-pointer hover:opacity-80 transition"
          >
            <Image
              src="/cleo_logo.svg"
              alt="Cleo Logo"
              width={32}
              height={32}
              className="w-7 h-7 md:w-8 md:h-8"
            />
            <span className="font-bold text-lg md:text-xl text-white">
              Cleo
            </span>
          </Link>
          <Link href="/">
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
          </Link>
        </div>
      </nav>

      {/* 404 Hero Section - Full Screen */}
      <section className="min-h-screen flex flex-col items-center text-center bg-[url(/cleo_bg.svg)] bg-cover bg-center text-white pt-24 sm:pt-28 md:pt-32 relative overflow-hidden">
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 pointer-events-none" />

        <div className="flex-1 flex flex-col justify-center w-full relative z-10 pb-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center">
            <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold mb-6 sm:mb-8 leading-tight drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]">
              <Highlighter action="highlight" color="#FCD34D">
                404
              </Highlighter>
            </h1>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]">
              Lost in the{" "}
              <Highlighter action="underline" color="#FCD34D">
                menu bar
              </Highlighter>
              ?
            </h2>

            {/* Divider */}
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mb-6 sm:mb-8"></div>

            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl text-white/95 px-2 drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)]">
              Even Cleo can&apos;t find this page. Let&apos;s get you back to
              your AI assistant.
            </p>
            <Link href="/">
              <div className="relative mb-12 sm:mb-16">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300/40 via-white/40 to-blue-300/40 blur-xl rounded-lg" />
                <ShimmerButton className="relative shadow-2xl shadow-blue-300/50 rounded-lg">
                  <span className="flex items-center gap-2 text-center text-base sm:text-lg leading-none font-medium tracking-tight whitespace-pre-wrap text-white">
                    Back to Home
                  </span>
                </ShimmerButton>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
