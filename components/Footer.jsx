"use client";

import Link from "next/link";
import { useState } from "react";
import { FaDumbbell, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

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

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4">Meet Your Trainer</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hi, I'm <span className="text-red-500 font-semibold">Alex Stone</span>, a certified personal trainer with over a decade of experience helping people transform their bodies and lives.
            My approach combines strength training, mindset coaching, and nutrition planning tailored to your unique goals.
          </p>
          <p className="mt-4 text-gray-400">
            Whether you're a beginner or looking to break through a plateau, I’ll guide you every step of the way.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="rounded-3xl overflow-hidden shadow-lg max-w-sm">
            <Image
              src="/trainer.jpg"
              alt="Personal Trainer"
              width={500}
              height={500}
              className="object-cover h-full w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 mt-20 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-xl">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-xl">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-xl">
            <FaTwitter />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} FitMaster. All rights reserved.</p>
      </div>
    </footer>
  );
}
