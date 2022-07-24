import React from "react";
import data from "../Data/singleDrink.json";
import Card from "../UI/Card";

export default function Container(props) {
  const drinkData = data.drinks.map((drink) => {
    return <Card data={drink} />;
  });

  return (
    <div className="container mx-auto  w-10/12 mt-5 h-full md:bd-red lg:w-4/12 lg:bg-yellow md:bg-red sm:w-5/12 bg-white">
      {drinkData}
    </div>
  );
}
