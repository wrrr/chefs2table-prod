import React from "react";
import { Star, Search } from "lucide-react";
import { motion } from "framer-motion";
import "./index.css";

function Nav() {
  return (
    <header className="sticky top-4 z-40">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div style={{ color: 'rgb(144, 26, 24)', display: 'flex', flexDirection: 'column', font: '400 26px/54px __Inter_d65c78, sans-serif', width: 'fit-content' }}>
            <div style={{ display: 'inline', fontSize: 45, fontWeight: 600, lineHeight: '68px' }}>
              Chefs2Table.com
            </div>
            <div style={{ fontSize: '21px', fontWeight: 600, lineHeight: '0px', alignSelf: 'flex-end' }}>
              <div style={{ fontWeight: 600 }}>
                Gourmet Meals, Exceptional Deals
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Red navigation band per diff */}
      <div style={{ display: 'flex', flexDirection: 'column', fontWeight: 400, gap: '34px', margin: '24px 0 -3px', padding: '0 200px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', marginTop: 30, height: 65, backgroundColor: 'rgba(199, 64, 64, 1)' }}>
          <div
            style={{
              gap: '27px',
              display: 'flex',
              alignItems: 'center',
              fontWeight: 400,
              height: '100%',
              padding: '0 12px',
              justifyContent: 'center',
              color: 'rgba(175, 27, 27, 1)',
              lineHeight: '20px',
              backgroundColor: 'rgba(255, 255, 255, 1)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', fontWeight: 400, textAlign: 'center', width: '33%', backgroundColor: 'rgba(209, 139, 8, 1)', borderRadius: '11px', overflow: 'hidden' }}>
              <div style={{ color: 'rgb(255, 255, 255)', fontSize: '34px', fontWeight: 400, lineHeight: '45px', margin: '0 auto' }}>Discover</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', fontWeight: 400, textAlign: 'center', width: '33%', backgroundColor: 'rgba(209, 139, 8, 1)', borderRadius: '11px', overflow: 'hidden' }}>
              <div style={{ color: 'rgb(255, 255, 255)', fontSize: '34px', fontWeight: 400, lineHeight: '45px', margin: '0 auto' }}>Order</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', fontWeight: 400, textAlign: 'center', width: '33%', color: 'rgba(209, 139, 8, 1)', backgroundColor: 'rgba(209, 139, 8, 1)', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ color: 'rgb(255, 255, 255)', fontSize: '34px', fontWeight: 400, lineHeight: '45px', margin: '0 auto' }}>Profile</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div>
        <motion.h2 initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Home-cooked meals, delivered by expert local chefs
        </motion.h2>
        <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06 }} className="mt-4 text-slate-700 max-w-xl">
          Discover unique menus prepared with seasonal ingredients. Browse local chefs, order a meal, and support culinary creators in your community.
        </motion.p>

        <div className="mt-6 flex gap-3">
          <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-orange-600 text-white font-semibold shadow hover:bg-orange-700">Explore Menus</a>
          <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white border border-orange-100 shadow-sm text-slate-800">How it works</a>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <div className="relative w-full md:w-3/4">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-muted-foreground text-orange-400" />
            </div>
            <input aria-label="Search chefs or dishes" placeholder="Search dishes, chefs or cuisines" className="w-full pl-10 pr-4 py-3 rounded-lg border border-orange-100 bg-white shadow-sm focus:ring-2 focus:ring-orange-200" />
          </div>
        </div>
      </div>

      <div>
        <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 card-shadow border border-orange-100">
          <div className="flex items-start gap-4">
            <div className="h-32 w-32 rounded-xl bg-gradient-to-br from-orange-400 to-rose-400 flex items-center justify-center text-white text-2xl font-bold">🍲</div>
            <div>
              <div className="text-sm font-semibold text-orange-600">Featured</div>
              <div className="text-lg font-bold text-slate-900 mt-1">Ropa Vieja by Chef Maria</div>
              <div className="mt-2 text-sm text-slate-700">A slow-cooked Cuban classic served with sweet plantains and saffron rice.</div>
              <div className="mt-4 flex items-center gap-3">
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-orange-100">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-semibold">4.9</span>
                </div>
                <a href="#" className="ml-auto inline-flex items-center px-3 py-1.5 rounded-lg bg-orange-600 text-white font-semibold">Order</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChefCard({ name, emoji, cuisine, rating, dish }) {
  return (
    <article className="bg-white rounded-2xl border border-transparent hover:border-orange-100 transition card-shadow p-5 flex flex-col">
      <div className="flex items-center gap-4">
        <div className="avatar text-xl font-bold bg-gradient-to-br from-orange-100 to-white">{emoji}</div>
        <div>
          <div className="text-lg font-semibold text-slate-900">{name}</div>
          <div className="text-sm text-orange-600">{cuisine}</div>
        </div>
        <div className="ml-auto inline-flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-semibold">{rating}</span>
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-700 flex-1">Today's Dish: <span className="font-medium">{dish}</span></p>
      <div className="mt-5">
        <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700">Order Now</button>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50 text-slate-800">
      <Nav />
      <Hero />

      <section className="container mx-auto mt-12">
        <h3 className="text-2xl font-bold text-slate-900">Local Chefs</h3>
        <p className="text-sm text-slate-600 mt-1">Handpicked menus from chefs near you.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ChefCard name="Chef Maria" emoji="🔥" cuisine="Authentic Cuban Cuisine" rating="4.9" dish="Ropa Vieja with Plantains" />
          <ChefCard name="Chef Antonio" emoji="🍝" cuisine="Homemade Italian Pasta" rating="4.8" dish="Tagliatelle al Ragù" />
          <ChefCard name="Chef Aisha" emoji="🍛" cuisine="Modern Indian" rating="4.7" dish="Butter Chicken with Garlic Naan" />
        </div>
      </section>

      <footer className="container mx-auto mt-16 py-8 text-center text-sm text-slate-600">© {new Date().getFullYear()} Chefs2Table — Crafted with care</footer>
    </main>
  );
}
