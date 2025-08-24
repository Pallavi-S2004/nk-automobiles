// components/Navbar.tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-red-500">
          NK Automobiles
        </a>
        <div className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-red-400">Home</a>
          <a href="#about" className="hover:text-red-400">About</a>
          <a href="#products" className="hover:text-red-400">Products</a>
          <a href="#contact" className="hover:text-red-400">Contact</a>
        </div>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-gray-800 px-6 pb-4 flex flex-col gap-4">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#products" onClick={() => setOpen(false)}>Products</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
