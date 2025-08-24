// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-red-500 font-bold text-lg">NK Automobiles</h2>
          <p className="mt-2 text-sm">
            Reliable spare parts and trusted service since 2004.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-red-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-red-400">About</Link></li>
            <li><Link href="/products" className="hover:text-red-400">Products</Link></li>
            <li><Link href="/contact" className="hover:text-red-400">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Contact</h3>
          <p className="text-sm">123 Main Road, Bengaluru, India</p>
          <p className="text-sm">+91 98765 43210</p>
        </div>
      </div>
      <div className="text-center text-sm border-t border-gray-700 py-4">
        © {new Date().getFullYear()} NK Automobiles. All rights reserved.
      </div>
    </footer>
  );
}
