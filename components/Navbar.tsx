"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-zinc-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">NK Automobiles</h1>
      <div className="space-x-6">
        <Link href="/" className="hover:text-zinc-300">Home</Link>
        <Link href="/about" className="hover:text-zinc-300">About</Link>
        <Link href="/products" className="hover:text-zinc-300">Products</Link>
        <Link href="/contact" className="hover:text-zinc-300">Contact</Link>


      </div>
    </nav>
  );
}
