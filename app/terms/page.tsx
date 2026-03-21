import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-8">
          <Link href="/" className="text-sm text-gray-500 transition-colors hover:text-black">
            &larr; Back to Home
          </Link>
        </div>
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-black">Terms of Service</h1>
        
        <div className="max-w-none">
          <p className="mb-6 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-black">1. Acceptance of Terms</h2>
            <p className="leading-relaxed text-gray-600">
              By accessing and using the Animode website and joining our waitlist, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-black">2. Description of Service</h2>
            <p className="leading-relaxed text-gray-600">
              Animode is currently in early access. Our website provides information about our upcoming motion design tool and allows users to join a waitlist for early access.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-black">3. User Obligations</h2>
            <p className="leading-relaxed text-gray-600">
              When joining our waitlist, you agree to provide accurate, current, and complete information, specifically your email address. You must not use our service for any illegal or unauthorized purpose.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-black">4. Intellectual Property</h2>
            <p className="leading-relaxed text-gray-600">
              All content on this website, including text, graphics, logos, and software, is the property of Animode and is protected by intellectual property laws.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-black">5. Limitation of Liability</h2>
            <p className="leading-relaxed text-gray-600">
              Animode shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-black">6. Contact Us</h2>
            <p className="leading-relaxed text-gray-600">
              If you have any questions about these Terms, please contact us by{" "}
              <a href="https://www.linkedin.com/in/jeet-pramanik/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                reaching out to the founder
              </a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
