import { Apple } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Highlighter } from "@/components/ui/highlighter";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

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
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-200 bg-gray-50 hover:bg-gray-100",
        "transition-colors"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-black">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-black/60">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-black/70">{body}</blockquote>
    </figure>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 p-4 md:p-8 z-10 animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <ul className="flex gap-4 md:gap-8 text-sm md:text-base text-white items-center">
            <li className="cursor-pointer hover:text-white/80 transition-colors duration-200 flex items-center gap-2">
              <Image
                src="/cleo_logo.svg"
                alt="Cleo Logo"
                width={32}
                height={32}
                className="w-7 h-7 md:w-8 md:h-8"
              />
              <span className="font-bold text-lg md:text-xl">Cleo</span>
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
        {/* White glow at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-[5]" />

        <div className="flex-1 flex flex-col justify-end w-full relative z-10 pb-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] animate-in fade-in slide-in-from-bottom-4 duration-700">
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
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mb-6 sm:mb-8 animate-in fade-in zoom-in duration-500 delay-200"></div>

            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl text-white/95 px-2 drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)] animate-in fade-in slide-in-from-bottom-3 duration-700 delay-300">
              Lightweight, fast, and invisible until you need it. Three
              shortcuts give you instant explanations, summaries, and
              revisions—without disrupting your flow.
            </p>
            <div className="relative mb-12 sm:mb-16 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-500">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300/40 via-white/40 to-blue-300/40 blur-xl rounded-lg" />
              <ShimmerButton className="relative shadow-2xl shadow-blue-300/50 rounded-lg hover:scale-105 transition-transform duration-300">
                <span className="flex items-center gap-2 text-center text-base sm:text-lg leading-none font-medium tracking-tight whitespace-pre-wrap text-white">
                  <Apple className="h-5 w-5 sm:h-6 sm:w-6" />
                  Get for Mac
                </span>
              </ShimmerButton>
            </div>
          </div>
        </div>

        {/* Keybinds - Three Groups in a Row */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 pb-8 sm:pb-12 md:pb-16 lg:pb-20 relative z-10 px-4">
          {/* Group 1: Explain */}
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-3 duration-700 delay-700">
            <p
              className="text-sm sm:text-base text-white"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Explain
            </p>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300">
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
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-3 duration-700 delay-[800ms]">
            <p
              className="text-sm sm:text-base text-white"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Summarize
            </p>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300">
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
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-3 duration-700 delay-[900ms]">
            <p
              className="text-sm sm:text-base text-white"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Revise text
            </p>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300">
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

      {/* Testimonials Section */}
      <section className="bg-white text-black py-20 md:py-32">
        <div className="w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center px-4 sm:px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            What our users say
          </h2>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* Explain Feature Section */}
      <section className="bg-white text-black py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="flex items-center gap-2 mb-6 animate-in fade-in slide-in-from-left-4 duration-500 delay-200">
                <kbd className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-lg font-bold text-white hover:scale-110 transition-transform duration-200">
                  ⌃
                </kbd>
                <kbd className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-lg font-bold text-white hover:scale-110 transition-transform duration-200">
                  ⌘
                </kbd>
                <kbd className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-lg font-bold text-white hover:scale-110 transition-transform duration-200">
                  E
                </kbd>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-in fade-in slide-in-from-left-6 duration-600 delay-300">
                Explain
              </h2>
              <p className="text-lg md:text-xl text-black/70 animate-in fade-in slide-in-from-left-4 duration-600 delay-500">
                Get instant explanations of any text, code, or concept. Cleo
                breaks down complex ideas into easy-to-understand language.
              </p>
            </div>
            <div className="bg-gray-100 border border-gray-200 rounded-xl aspect-video flex items-center justify-center hover:border-gray-300 hover:shadow-lg transition-all hover:transition-all animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
              {/* Placeholder for image/gif */}
              <span className="text-gray-400">Image placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Summarize Feature Section */}
      <section className="bg-white text-black py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 border border-gray-200 rounded-xl aspect-video flex items-center justify-center order-2 md:order-1 hover:border-gray-300 hover:shadow-lg transition-all hover:transition-all animate-in fade-in slide-in-from-left-8 duration-700 delay-200">
              {/* Placeholder for image/gif */}
              <span className="text-gray-400">Image placeholder</span>
            </div>
            <div className="order-1 md:order-2 animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="flex items-center gap-2 mb-6 animate-in fade-in slide-in-from-right-4 duration-500 delay-200">
                <kbd className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-lg font-bold text-white hover:scale-110 transition-transform duration-200">
                  ⌃
                </kbd>
                <kbd className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-lg font-bold text-white hover:scale-110 transition-transform duration-200">
                  ⌘
                </kbd>
                <kbd className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-lg font-bold text-white hover:scale-110 transition-transform duration-200">
                  S
                </kbd>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-in fade-in slide-in-from-right-6 duration-600 delay-300">
                Summarize
              </h2>
              <p className="text-lg md:text-xl text-black/70 animate-in fade-in slide-in-from-right-4 duration-600 delay-500">
                Quickly condense long documents, articles, or conversations into
                concise summaries. Save time and get to the key points faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Revise Text Feature Section */}
      <section className="bg-white text-black py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="flex items-center gap-2 mb-6 animate-in fade-in slide-in-from-left-4 duration-500 delay-200">
                <kbd className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-lg font-bold text-white hover:scale-110 transition-transform duration-200">
                  ⌃
                </kbd>
                <kbd className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-lg font-bold text-white hover:scale-110 transition-transform duration-200">
                  ⌘
                </kbd>
                <kbd className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black border-2 border-gray-600 rounded-lg text-lg font-bold text-white hover:scale-110 transition-transform duration-200">
                  W
                </kbd>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-in fade-in slide-in-from-left-6 duration-600 delay-300">
                Revise text
              </h2>
              <p className="text-lg md:text-xl text-black/70 animate-in fade-in slide-in-from-left-4 duration-600 delay-500">
                Improve your writing instantly. Cleo helps you refine grammar,
                tone, and clarity to make your message shine.
              </p>
            </div>
            <div className="bg-gray-100 border border-gray-200 rounded-xl aspect-video flex items-center justify-center hover:border-gray-300 hover:shadow-lg transition-all hover:transition-all animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
              {/* Placeholder for image/gif */}
              <span className="text-gray-400">Image placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-white text-black py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            AI that works with you, not after you.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-2xl md:text-3xl mb-8">
            <div className="flex items-center justify-center gap-4 animate-in fade-in slide-in-from-left-6 duration-700 delay-200">
              <span className="text-5xl font-bold">Most</span>
              <span className="text-black/60">AI assistants</span>
            </div>
            <div className="flex items-center justify-center gap-4 animate-in fade-in slide-in-from-right-6 duration-700 delay-300">
              <span className="text-black/60">wait till you ask.</span>
            </div>
          </div>
          <div className="text-2xl md:text-3xl mb-12 animate-in fade-in zoom-in duration-700 delay-500">
            <span className="text-blue-500">Cleo is ready</span>
            <br />
            <span className="text-black/80">when you need it.</span>
          </div>
          <div className="relative inline-block animate-in fade-in slide-in-from-bottom-3 duration-700 delay-700">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300/40 via-white/40 to-blue-300/40 blur-xl rounded-lg" />
            <ShimmerButton className="relative shadow-2xl shadow-blue-300/50 rounded-lg hover:scale-105 transition-transform duration-300">
              <span className="flex items-center gap-2 text-center text-base sm:text-lg leading-none font-medium tracking-tight whitespace-pre-wrap text-white">
                <Apple className="h-5 w-5 sm:h-6 sm:w-6" />
                Get for Mac
              </span>
            </ShimmerButton>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white text-black py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-gray-200">
              <AccordionTrigger className="text-black hover:text-black/80 text-lg">
                What makes Cleo different from other AI assistants?
              </AccordionTrigger>
              <AccordionContent className="text-black/70 text-base">
                Cleo is always ready when you need it. With just three keyboard
                shortcuts, you can instantly explain, summarize, or revise
                anything on your Mac—without disrupting your workflow.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-gray-200">
              <AccordionTrigger className="text-black hover:text-black/80 text-lg">
                Who is Cleo for?
              </AccordionTrigger>
              <AccordionContent className="text-black/70 text-base">
                Cleo is perfect for anyone working on a Mac who wants instant AI
                assistance. Whether you&apos;re a developer, writer, student, or
                professional, Cleo adapts to your needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-gray-200">
              <AccordionTrigger className="text-black hover:text-black/80 text-lg">
                Is Cleo free?
              </AccordionTrigger>
              <AccordionContent className="text-black/70 text-base">
                Yes! Cleo is free and open-source. Download it today and start
                using AI assistance with just a keyboard shortcut.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-gray-200">
              <AccordionTrigger className="text-black hover:text-black/80 text-lg">
                How does Cleo protect my privacy?
              </AccordionTrigger>
              <AccordionContent className="text-black/70 text-base">
                Cleo runs locally on your Mac and is privacy-first. We never
                store your data or track your usage. Everything stays on your
                device.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-gray-200">
              <AccordionTrigger className="text-black hover:text-black/80 text-lg">
                What apps does Cleo work with?
              </AccordionTrigger>
              <AccordionContent className="text-black/70 text-base">
                Cleo works with any app on macOS. Whether you&apos;re in a
                browser, text editor, email client, or any other application,
                Cleo is ready to assist.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-gray-200">
              <AccordionTrigger className="text-black hover:text-black/80 text-lg">
                Can I customize the keyboard shortcuts?
              </AccordionTrigger>
              <AccordionContent className="text-black/70 text-base">
                Yes! Cleo&apos;s keyboard shortcuts are fully customizable. Set
                them to whatever feels most natural for your workflow.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white text-black py-20 md:py-32 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Your AI assistant is just a shortcut away.
          </h2>
          <p className="text-lg md:text-xl text-black/70 mb-12 animate-in fade-in slide-in-from-bottom-3 duration-600 delay-200">
            Download Cleo and start working smarter today.
          </p>
          <div className="relative inline-block animate-in fade-in zoom-in duration-700 delay-400">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300/40 via-white/40 to-blue-300/40 blur-xl rounded-lg" />
            <ShimmerButton className="relative shadow-2xl shadow-blue-300/50 rounded-lg hover:scale-105 transition-transform duration-300">
              <span className="flex items-center gap-2 text-center text-base sm:text-lg leading-none font-medium tracking-tight whitespace-pre-wrap text-white">
                <Apple className="h-5 w-5 sm:h-6 sm:w-6" />
                Get for Mac
              </span>
            </ShimmerButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Large CTA */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to transform your Mac experience?
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
              Join thousands using Cleo as their personal AI assistant
            </p>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300/40 via-white/40 to-blue-300/40 blur-xl rounded-lg" />
              <ShimmerButton className="relative shadow-2xl shadow-blue-300/50 rounded-lg">
                <span className="flex items-center gap-2 text-center text-lg md:text-xl leading-none font-medium tracking-tight whitespace-pre-wrap text-white px-4 py-1">
                  <Apple className="h-6 w-6 md:h-7 md:w-7" />
                  Download for Mac - Free
                </span>
              </ShimmerButton>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/cleo_logo.svg"
                alt="Cleo Logo"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <p className="text-sm text-gray-400">
                © 2025 <span className="font-bold">Cleo</span>. All rights
                reserved.
              </p>
            </div>
            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms
              </a>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
