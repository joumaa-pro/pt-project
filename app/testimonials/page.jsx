"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Alex completely changed the way I view fitness. I've never felt stronger or more confident!",
  },
  {
    name: "Mark T.",
    text: "The personalized training and support helped me drop 25 pounds. Highly recommend!",
  },
  {
    name: "Jessica L.",
    text: "Nutrition coaching + training = game changer. Alex is the real deal.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12"
        >
          What Clients Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-black border border-gray-700 rounded-3xl p-8 shadow-lg relative"
            >
              <FaQuoteLeft className="absolute top-4 left-4 text-red-500 text-xl" />
              <p className="text-gray-300 italic mb-6">"{testimonial.text}"</p>
              <p className="text-sm font-semibold text-gray-400">— {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
