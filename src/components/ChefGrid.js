import React from "react";
import chef1 from "../assets/images/chef1.jpg";
import chef2 from "../assets/images/chef2.jpg";
import chef3 from "../assets/images/chef3.jpg";
import chef4 from "../assets/images/chef4.jpg";
import chef5 from "../assets/images/chef5.jpg";

const chefs = [
  { id: 1, name: "Chef Olivia Rossi", specialty: "Italian Cuisine", image: chef1 },
  { id: 2, name: "Chef Kenji Sato", specialty: "Japanese Fusion", image: chef2 },
  { id: 3, name: "Chef Maria González", specialty: "Modern Mexican", image: chef3 },
  { id: 4, name: "Chef Marcus Lee", specialty: "Farm-to-Table", image: chef4 },
  { id: 5, name: "Chef Amina Yusuf", specialty: "Mediterranean Flavors", image: chef5 },
];

export default function ChefGrid() {
  return (
    <section className="container">
      <h2>Meet Our Featured Chefs</h2>
      <div className="chef-grid">
        {chefs.map((chef) => (
          <div key={chef.id} className="chef-card">
            <img src={chef.image} alt={chef.name} />
            <h3>{chef.name}</h3>
            <p>{chef.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


