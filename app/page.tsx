import AnimatedHero from "./components/AnimatedHero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-5xl px-6 py-12">
        {/* Logo and Badge */}
        <div className="mb-16 flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-2xl text-black font-bold">maybe</span>
          </div>
          <span className="text-xs uppercase tracking-wider text-gray-400">
            in early access now
          </span>
        </div>

        {/* Animated Text Section */}
        <AnimatedHero />

        {/* Main Headline */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 main-text text-4xl text font-bold leading-tight tracking-tight text-black md:text-5xl ">
            Your business,
            <br />
            in plain English.
          </h1>
        </div>

        {/* CTA Button */}
        <div className="mb-16 text-center">
          <button className="mb-3 rounded-full bg-black px-8 py-4 text-base font-medium text-white transition-all hover:bg-gray-800">
            Start your free trial now
          </button>
          <p className="text-sm text-gray-500">Just $50/mo after your trial</p>
        </div>

        {/* Feature Cards */}
        

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-gray-500">
          <p className="mb-2">
            Looking for the personal finance version of Maybe?{" "}
            <a href="#" className="underline hover:text-gray-700">
              Find the repository here
            </a>
            .
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-gray-700">
              Privacy
            </a>
            <span>·</span>
            <a href="#" className="hover:text-gray-700">
              Terms
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
