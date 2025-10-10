import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ChefGrid from "./components/ChefGrid";
// import AsideSection from "./components/AsideSection"; // we removed this

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      {/* <AsideSection />  removed this safely */}
      <ChefGrid />
    </div>
  );
}



