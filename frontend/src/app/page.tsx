import { Apple } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Highlighter } from "@/components/ui/highlighter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 p-8 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <ul className="flex gap-8 text-sm text-white">
            <li className="cursor-pointer hover:text-white/80 transition">
              Cleo
            </li>
            <li className="cursor-pointer hover:text-white/80 transition">
              Pricing
            </li>
            <li className="cursor-pointer hover:text-white/80 transition">
              Enterprise
            </li>
            <li className="cursor-pointer hover:text-white/80 transition">
              Careers
            </li>
            <li className="cursor-pointer hover:text-white/80 transition">
              Blog
            </li>
          </ul>
          <InteractiveHoverButton className="bg-white text-black hover:bg-gray-100 px-6 py-2.5 text-sm font-semibold">
            <span className="flex items-center gap-2">
              <Apple className="h-4 w-4" />
              Get for Mac
            </span>
          </InteractiveHoverButton>
        </div>
      </nav>

      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[url(/cleo_bg.svg)] text-white">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Your{" "}
          <Highlighter action="underline" color="#FCD34D">
            AI
          </Highlighter>{" "}
          assistant for{" "}
          <Highlighter action="highlight" color="#FCD34D">
            macOS
          </Highlighter>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-white/90">
          Cleo lives natively on your Mac, deeply integrated with macOS. Stay
          focused, learn faster, and work smarter with AI that's always there
          when you need it.
        </p>
        <InteractiveHoverButton className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold mb-12">
          <span className="flex items-center gap-2">
            <Apple className="h-6 w-6" />
            Get for Mac
          </span>
        </InteractiveHoverButton>

        {/* Keybinds */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
          {/* Keybind 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5 mb-1.5">
              <kbd className="px-2.5 py-1.5 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-md shadow-md text-xs font-semibold text-white">
                ⌃
              </kbd>
              <span className="text-white/40 font-light text-xs">+</span>
              <kbd className="px-2.5 py-1.5 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-md shadow-md text-xs font-semibold text-white">
                ⌘
              </kbd>
              <span className="text-white/40 font-light text-xs">+</span>
              <kbd className="px-2.5 py-1.5 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-md shadow-md text-xs font-semibold text-white">
                E
              </kbd>
            </div>
            <p className="text-xs font-medium text-white/70">Explain</p>
          </div>

          {/* Keybind 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5 mb-1.5">
              <kbd className="px-2.5 py-1.5 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-md shadow-md text-xs font-semibold text-white">
                ⌃
              </kbd>
              <span className="text-white/40 font-light text-xs">+</span>
              <kbd className="px-2.5 py-1.5 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-md shadow-md text-xs font-semibold text-white">
                ⌘
              </kbd>
              <span className="text-white/40 font-light text-xs">+</span>
              <kbd className="px-2.5 py-1.5 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-md shadow-md text-xs font-semibold text-white">
                S
              </kbd>
            </div>
            <p className="text-xs font-medium text-white/70">Summarize</p>
          </div>

          {/* Keybind 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5 mb-1.5">
              <kbd className="px-2.5 py-1.5 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-md shadow-md text-xs font-semibold text-white">
                ⌃
              </kbd>
              <span className="text-white/40 font-light text-xs">+</span>
              <kbd className="px-2.5 py-1.5 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-md shadow-md text-xs font-semibold text-white">
                ⌘
              </kbd>
              <span className="text-white/40 font-light text-xs">+</span>
              <kbd className="px-2.5 py-1.5 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-md shadow-md text-xs font-semibold text-white">
                W
              </kbd>
            </div>
            <p className="text-xs font-medium text-white/70">Revise text</p>
          </div>
        </div>
      </section>

      {/* Mini Footer */}
      <footer className="px-4 py-3 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400 mb-1 md:mb-0">
            © 2025 Cleo. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
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
