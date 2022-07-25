import React from "react";
import data from "../Data/singleDrink.json";
import Card from "../UI/Card";

export default function Container(props) {
  const drinkData = data.drinks.map((drink) => {
    return <Card data={drink} />;
  });

  return (
    <div className="container mx-auto w-11/12 md:bd-red  lg:bg-yellow md:bg-red sm:bg-yellow">
      {drinkData}
    </div>
  );
}
