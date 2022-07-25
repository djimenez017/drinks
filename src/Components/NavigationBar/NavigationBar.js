import React from "react";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div className="bg-dark text-center text-yellow p-2">
      <h1>Drink App</h1>
      <Link to="/drink">Drink</Link>
    </div>
  );
}
