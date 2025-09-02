"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function Home() {
  // Form state
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message ❌");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 scroll-smooth">
      {/* Hero */}
      <section className="bg-gray-900 text-white text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Genuine Spare Parts for Every Ride 🚗
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          NK Automobiles – Trusted by thousands for quality and service.
        </p>
        <Link href="#products">
          <Button className="bg-red-500 hover:bg-red-600 text-lg px-6 py-3">
            Explore Products
          </Button>
        </Link>
      </section>

      {/* About */}
      <section id="about" className="p-8 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p>
          NK Automobiles provides genuine spare parts for multiple car brands.
          Our mission is simple: make it easy for you to find the right part,
          every time.
        </p>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Spare Parts by Brand
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Maruti Suzuki", slug: "maruti", logo: "/logos/maruti.png" },
              { name: "Hyundai", slug: "hyundai", logo: "/logos/hyundai.png" },
              { name: "Toyota", slug: "toyota", logo: "/logos/toyota.png" },
              { name: "Benz", slug: "benz", logo: "/logos/benz.png" },
              { name: "BMW", slug: "bmw", logo: "/logos/bmw.png" },
              { name: "Audi", slug: "audi", logo: "/logos/audi.png" },
              { name: "Tata", slug: "tata", logo: "/logos/tata.png" },
            ].map((brand) => (
              <Link key={brand.slug} href={`/brands/${brand.slug}`}>
                <div className="border rounded-lg shadow p-6 text-center hover:shadow-lg transition cursor-pointer">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-20 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-xl font-semibold mb-2">{brand.name}</h3>
                  <p className="text-gray-600">
                    Browse genuine {brand.name} spare parts.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info + Map */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              Have questions about spare parts or want to place an order? Reach
              out to us.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Phone:</strong> +91-9876543210
              </li>
              <li>
                <strong>Email:</strong> info@nkautomobiles.com
              </li>
              <li>
                <strong>Address:</strong> NK Automobiles, Bangalore, India
              </li>
            </ul>

            {/* Google Maps Embed */}
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5966406711187!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670d2f13b!2sBangalore!5e0!3m2!1sen!2sin!4v000000000"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send Inquiry</h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-white p-6 shadow rounded-lg"
            >
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help?"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Inquiry"}
              </Button>
              {status && (
                <p className="text-sm mt-2 text-center text-gray-600">{status}</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        <p>© {new Date().getFullYear()} NK Automobiles | All Rights Reserved</p>
      </footer>
    </main>
  );
}
