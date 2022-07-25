import React from "react";
import data from "../Data/singleDrink.json";

export default function SingleDrink(props) {
  const drinks = data.drinks[0];

  //   console.log(drink);

  let ingredients = drinks.filter((drink) => drinks.includes("Ingredient"));

  console.log(ingredients);

  return (
    <div>
      <p>KLJHNKJN</p>
      <h2>{drinks.strDrink}</h2>
      <div>Category: {drinks.strCategory}</div>
      <img src={drinks.strDrinkThumb} alt={drinks.strDrink} />
      <p>Type of Glass: {drinks.strGlass}</p>
    </div>
  );
}
