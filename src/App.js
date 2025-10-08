import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import "./index.css";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50 text-slate-800 font-sans px-4 py-10">
      {/* Brand + Hero */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-4xl mx-auto mb-8"
      >
        <div className="flex items-center gap-4">
          <span className="inline-grid place-items-center h-14 w-14 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 text-white font-black text-sm shadow-lg">
            C2T
          </span>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Chefs2Table
            </h1>
            <p className="text-sm md:text-base text-orange-600 font-medium">
              Gourmet Meals, Exceptional Deals
            </p>
          </div>
        </div>
      </motion.header>

      {/* Navigation */}
      <nav className="w-full max-w-4xl mx-auto mb-10">
        <ul className="flex items-center justify-center gap-2 rounded-xl bg-white/70 backdrop-blur border border-orange-100 p-1 shadow-sm">
          <li>
            <a href="#" className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-orange-600 shadow">
              Discover
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-2 rounded-lg text-sm font-semibold text-orange-700 hover:bg-orange-50">
              Order
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-2 rounded-lg text-sm font-semibold text-orange-700 hover:bg-orange-50">
              Profile
            </a>
          </li>
        </ul>
      </nav>

      {/* Discover grid */}
      <section className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chef Maria */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-white rounded-2xl border border-orange-100 shadow-sm p-6 hover:shadow-md transition"
        >
          <header className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">🔥 Chef Maria</h2>
              <p className="text-sm text-orange-600">Authentic Cuban Cuisine</p>
            </div>
            <div className="flex items-center gap-1 text-slate-800">
              <Star className="w-5 h-5 text-yellow-500" aria-hidden />
              <span className="text-sm font-semibold">4.9</span>
            </div>
          </header>
          <p className="mt-3 text-sm text-slate-700">
            Today's Dish: Ropa Vieja with Plantains
          </p>
          <button
            className="mt-6 inline-flex items-center justify-center w-full px-5 py-2.5 rounded-lg bg-orange-600 text-white font-semibold shadow hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
            type="button"
          >
            Order Now
          </button>
        </motion.article>

        {/* Chef Antonio */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl border border-orange-100 shadow-sm p-6 hover:shadow-md transition"
        >
          <header className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">🍝 Chef Antonio</h2>
              <p className="text-sm text-orange-600">Homemade Italian Pasta</p>
            </div>
            <div className="flex items-center gap-1 text-slate-800">
              <Star className="w-5 h-5 text-yellow-500" aria-hidden />
              <span className="text-sm font-semibold">4.8</span>
            </div>
          </header>
          <p className="mt-3 text-sm text-slate-700">
            Today's Dish: Tagliatelle al Ragù
          </p>
          <button
            className="mt-6 inline-flex items-center justify-center w-full px-5 py-2.5 rounded-lg bg-orange-600 text-white font-semibold shadow hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
            type="button"
          >
            Order Now
          </button>
        </motion.article>
      </section>
    </main>
  );
}
