import React from "react";
import { MapPin, Star, ShoppingCart, Flame, Brain } from "lucide-react";
import { motion } from "framer-motion";
import './index.css'; // Tailwind should be set up here

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50 flex flex-col items-center px-4 py-8">
      {/* Logo & Hero */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-8"
      >
        <img
          src="/logo-placeholder.png"
          alt="Chefs2Table Logo"
          className="h-20 w-20 rounded-full shadow-lg border-4 border-orange-200"
        />
        <h1 className="text-3xl font-bold mt-4 text-orange-800 leading-tight">Chefs2Table</h1>
        <p className="text-base text-orange-500 font-medium mt-2">Gourmet Meals, Exceptional Deals</p>
      </motion.div>

      {/* Tabs Navigation */}
      <nav className="mb-8 w-full max-w-xl">
        <ul className="flex gap-8 justify-center">
          <li><a href="#" className="text-lg text-orange-700 font-semibold hover:underline">Discover</a></li>
          <li><a href="#" className="text-lg text-orange-700 font-semibold hover:underline">Order</a></li>
          <li><a href="#" className="text-lg text-orange-700 font-semibold hover:underline">Profile</a></li>
        </ul>
      </nav>

      {/* Discover Section: Responsive Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl mb-24">
        {/* Chef Maria Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-6 flex flex-col"
        >
          <div className="flex justify-between items-center mb-3">
            <div>
              <h2 className="text-xl font-bold text-orange-900 flex items-center gap-2">
                <span>🔥 Chef Maria</span>
              </h2>
              <p className="text-sm text-orange-500">Authentic Cuban Cuisine</p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-base font-semibold text-gray-800">4.9</span>
            </div>
          </div>
          <p className="mt-2 text-gray-700 text-sm">Today's Dish: Ropa Vieja with Plantains</p>
          <button className="mt-6 px-6 py-2 bg-orange-500 text-white font-bold rounded-lg shadow hover:bg-orange-600 transition-all w-full">Order Now</button>
        </motion.div>

        {/* Chef Antonio Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-md p-6 flex flex-col"
        >
          <div className="flex justify-between items-center mb-3">
            <div>
              <h2 className="text-xl font-bold text-orange-900 flex items-center gap-2">
                <span>🍝 Chef Antonio</span>
              </h2>
              <p className="text-sm text-orange-500">Homemade Italian Pasta</p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-base font-semibold text-gray-800">4.8</span>
            </div>
          </div>
          <p className="mt-2 text-gray-700 text-sm">Today's Dish: Tagliatelle al Ragù</p>
          <button className="mt-6 px-6 py-2 bg-orange-500 text-white font-bold rounded-lg shadow hover:bg-orange-600 transition-all w-full">Order Now</button>
        </motion.div>
      </section>
    </main>
  );
}
