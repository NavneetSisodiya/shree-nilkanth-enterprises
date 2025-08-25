"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  };

  return (
    <main className="min-h-screen font-sans bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-black text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl text-gray-200 font-semibold mb-4 tracking-tight">Contact Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get in touch with us for all your pipe solution needs. We're here to help!
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            {
              icon: <MapPin className="h-8 w-8 text-blue-600" />,
              title: "Address",
              desc: (
                <>
                  Industrial Area, Maxi Road<br />Ujjain, Madhya Pradesh 456001<br />India
                </>
              ),
            },
            {
              icon: <Phone className="h-8 w-8 text-blue-600" />,
              title: "Phone",
              desc: (
                <>
                  +91 81099 09680<br />
                </>
              ),
            },
            {
              icon: <Mail className="h-8 w-8 text-blue-600" />,
              title: "Email",
              desc: (
                <>
                  akshaysisodiya286@gmail.com<br />
                </>
              ),
            },
            {
              icon: <Clock className="h-8 w-8 text-blue-600" />,
              title: "Business Hours",
              desc: (
                <>
                  Mon - Sat: 9 AM - 6 PM<br />Sunday: Closed
                </>
              ),
            },
          ].map((item, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-10 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-8 text-gray-900">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                <div className="flex items-center justify-center gap-2">
                  <Send className="h-5 w-5" />
                  Send Message
                </div>
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-xl shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7335.501973298539!2d75.80942799275586!3d23.17928681625667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963738e9a2e3321%3A0xcdb38718d85fe458!2sIndustrial%20Area%2C%20Agrasen%20Nagar%2C%20Ujjain%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1753693510566!5m2!1sen!2sin"
              width="100%"
              height="520"
              loading="lazy"
              className="w-full h-full border-none"
            />
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors flex items-center justify-center"
        >
          <MessageSquare className="h-6 w-6" />
        </a>
      </div>

      <Footer />
    </main>
  );
}
