"use client";

import Link from "next/link";
import { useState } from "react";
import { FaDumbbell } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md text-white shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
          <FaDumbbell className="text-red-600" />
          <span>FitMaster</span>
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="#about" className="hover:text-red-500 transition-all">About</Link>
          <Link href="#services" className="hover:text-red-500 transition-all">Services</Link>
          <Link href="#gallery" className="hover:text-red-500 transition-all">Gallery</Link>
          <Link href="#testimonials" className="hover:text-red-500 transition-all">Testimonials</Link>
          <Link href="#contact" className="hover:text-red-500 transition-all">Contact</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="#gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </motion.nav>
  );
}
