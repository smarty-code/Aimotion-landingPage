import AnimatedHero from "./components/AnimatedHero";
import WaitlistForm from "./components/WaitlistForm";

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
            <span className="text-2xl text-black font-bold tracking-tight">Animode</span>
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
            Motion design,
            <br />
            in plain English.
          </h1>
        </div>

        {/* Waitlist CTA */}
        <div className="mb-16 text-center">
          <WaitlistForm />
        </div>

        {/* Feature Cards */}
        

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-gray-500">
          <p className="mb-2">
            Early access is limited, secure your spot before we launch.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/privacy" className="hover:text-gray-700">
              Privacy
            </a>
            <span>·</span>
            <a href="/terms" className="hover:text-gray-700">
              Terms
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
