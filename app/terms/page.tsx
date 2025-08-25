import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-16 px-4 md:px-20 bg-gray-50">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms of Service</h1>

        <div className="space-y-6 text-gray-700">
          <p>Last updated: July 2025</p>

          <h2 className="text-2xl font-semibold mt-8">1. Acceptance of Terms</h2>
          <p>By accessing or using this website of Shree Nilkanth Enterprises, you agree to these Terms. Please discontinue use if you disagree.</p>

          <h2 className="text-2xl font-semibold mt-8">2. Use of Website</h2>
          <p>You agree to use the website only for lawful purposes and not violate any regulations or interfere with others' access.</p>

          <h2 className="text-2xl font-semibold mt-8">3. Intellectual Property</h2>
          <p>All content, logos, and graphics are our property. Unauthorized use or reproduction is prohibited.</p>

          <h2 className="text-2xl font-semibold mt-8">4. Product Information</h2>
          <p>We strive to keep product details accurate but reserve the right to modify content without notice.</p>

          <h2 className="text-2xl font-semibold mt-8">5. Limitation of Liability</h2>
          <p>We are not liable for indirect or incidental losses arising from your use of the website.</p>

          <h2 className="text-2xl font-semibold mt-8">6. External Links</h2>
          <p>If the site contains third-party links, we are not responsible for their content or privacy practices.</p>

          <h2 className="text-2xl font-semibold mt-8">7. Changes to These Terms</h2>
          <p>We may revise these Terms at any time. Continued use implies acceptance.</p>

          <h2 className="text-2xl font-semibold mt-8">8. Governing Law</h2>
          <p>These Terms are governed by the laws of India. Disputes will be resolved in the appropriate courts at Ujjain.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
