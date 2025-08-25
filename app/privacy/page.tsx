import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-16 px-4 md:px-20 bg-gray-50">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

        <div className="space-y-6 text-gray-700">
          <p>Last updated: July 2025</p>

          <p>Shree Nilkanth Enterprises ("we", "us", "our") respects your privacy and is committed to protecting your personal data. This policy explains how we collect, use, disclose, and secure your information when you visit our website.</p>

          <h2 className="text-2xl font-semibold mt-8">1. Information We Collect</h2>
          <ul className="list-disc ml-6">
            <li>Contact form details: name, email, phone, message</li>
            
            <li>Technical data: IP address, browser type, device info, usage logs</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">2. How We Use Your Information</h2>
          <ul className="list-disc ml-6">
            <li>Respond to your inquiries or messages</li>
           
            <li>Improve user experience on the website</li>
            <li>Maintain security and prevent fraud</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">3. Cookies & Analytics</h2>
          <p>We may use cookies or tracking technologies like Google Analytics to understand usage patterns. You can disable cookies through your browser settings.</p>

          <h2 className="text-2xl font-semibold mt-8">4. Sharing Your Information</h2>
          <p>We do not sell or trade your personal data. We may share information with trusted service providers (e.g., hosting, email systems) under confidentiality agreements.</p>

          <h2 className="text-2xl font-semibold mt-8">5. Data Security</h2>
          <p>We implement technical and administrative measures to protect your data. However, no online system can be guaranteed completely secure.</p>

          <h2 className="text-2xl font-semibold mt-8">6. Your Rights</h2>
          <p>You may request access, correction, or deletion of your personal data held by us. Contact us using details on our Contact page.</p>

          <h2 className="text-2xl font-semibold mt-8">7. Policy Updates</h2>
          <p>We may revisit and update this policy as needed. Changes take effect immediately upon posting.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
