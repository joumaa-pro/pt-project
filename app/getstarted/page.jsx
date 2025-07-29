"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-xl mx-auto">
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Let's Get Started
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-gray-900 p-8 rounded-3xl shadow-lg space-y-6"
        >
          <div>
            <label className="block mb-1 text-gray-400">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-black border border-gray-600 text-white"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-black border border-gray-600 text-white"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-400">Your Goal</label>
            <textarea
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-black border border-gray-600 text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition-all py-3 rounded-xl font-semibold text-white"
          >
            Submit Now
          </button>
        </motion.form>
      </div>
    </section>
  );
}