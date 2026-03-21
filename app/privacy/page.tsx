import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-8">
          <Link href="/" className="text-sm text-gray-500 transition-colors hover:text-black">
            &larr; Back to Home
          </Link>
        </div>
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-black">Privacy Policy</h1>
        
        <div className="max-w-none">
          <p className="mb-6 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-black">1. Introduction</h2>
            <p className="leading-relaxed text-gray-600">
              Welcome to Animode. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website and early access waitlist.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-black">2. Information We Collect</h2>
            <p className="leading-relaxed text-gray-600">
              Currently, we only collect the information you voluntarily provide to us when joining our waitlist, which includes your email address.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-black">3. How We Use Your Information</h2>
            <p className="leading-relaxed text-gray-600">
              We use the information we collect to communicate with you about our product, send you updates regarding Animode's development, and notify you when early access becomes available.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-black">4. Data Security</h2>
            <p className="leading-relaxed text-gray-600">
              We implement appropriate technical and organizational measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-black">5. Contact Us</h2>
            <p className="leading-relaxed text-gray-600">
              If you have any questions about this Privacy Policy, please contact us by{" "}
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
