import { Apple } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-[url(/cleo_bg.svg)] text-white flex flex-col">
      <nav className="p-8">
        <ul className="flex justify-center gap-8 text-sm">
          <li>Cleo</li>
          <li>Pricing</li>
          <li>Enterprise</li>
          <li>Careers</li>
          <li>Blog</li>
        </ul>
      </nav>
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Your AI assistant for meetings
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-white/90">
          Takes perfect notes, answers questions in real-time, and makes you
          the most prepared person on every call.
        </p>
        <Button className="bg-white text-black hover:bg-gray-200 px-6 py-3 text-base">
          <Apple className="mr-2 h-5 w-5" />
          Get for Mac
        </Button>
      </section>
    </main>
  );
}
