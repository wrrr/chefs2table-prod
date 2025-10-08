import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Star, ShoppingCart, Flame, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { ChefDashboard } from "./components/ChefDashboard";

export default function App() {
  return (
    <main className="min-h-screen bg-white px-4 py-6">
      {/* Logo & Hero */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <img src="/logo-placeholder.png" alt="Chefs2Table Logo" className="mx-auto h-16 w-16 rounded-full" />
        <h1 className="text-2xl font-bold mt-2">Chefs2Table</h1>
        <p className="text-sm text-gray-600">Gourmet Meals, Exceptional Deals</p>
      </motion.div>

      {/* Tabs for Navigation */}
      <Tabs defaultValue="discover" className="mb-4">
        <TabsList className="grid grid-cols-3 gap-1">
          <TabsTrigger value="discover">Discover</TabsTrigger>
          <TabsTrigger value="order">Order</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Discover Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">🔥 Chef Maria</h2>
                <p className="text-sm text-muted">Authentic Cuban Cuisine</p>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium">4.9</span>
              </div>
            </div>
            <p className="text-sm mt-2">Today's Dish: Ropa Vieja with Plantains</p>
            <Button className="mt-3 w-full">Order Now</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">👨‍🍳 Hidden Chef Amir</h2>
                <p className="text-sm text-muted">Persian Fusion</p>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium">4.8</span>
              </div>
            </div>
            <p className="text-sm mt-2">Today's Dish: Saffron Chicken Tahdig</p>
            <Button className="mt-3 w-full">Order Now</Button>
          </CardContent>
        </Card>
      </motion.section>

      {/* Footer Icons */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-2 flex justify-around">
        <Button variant="ghost" className="flex flex-col items-center">
          <Flame className="w-5 h-5" />
          <span className="text-xs">Trending</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <ShoppingCart className="w-5 h-5" />
          <span className="text-xs">Orders</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <Brain className="w-5 h-5" />
          <span className="text-xs">AI Picks</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <MapPin className="w-5 h-5" />
          <span className="text-xs">Near Me</span>
        </Button>
      </footer>
    </main>
  );
}



