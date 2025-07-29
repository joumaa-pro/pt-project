"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BeforeAfterClient() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12"
        >
          Transformation Spotlight
        </motion.h2>

        <div className="flex  md:flex-row gap-8 justify-center items-center">
          <div className="flex-1 rounded-3xl overflow-hidden shadow-lg max-w-md mx-auto">
            <Image
              src="/h1.jpg"
              alt="Before"
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
            <p className="mt-4 text-gray-400 text-lg font-semibold">Before</p>
          </div>

          <div className="flex-1 rounded-3xl overflow-hidden shadow-lg max-w-md mx-auto">
            <Image
              src="/h2.jpg"
              alt="After"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
            <p className="mt-4 text-gray-400 text-lg font-semibold">After</p>
          </div>
        </div>
      </div>
    </section>
  );
}
