import React from "react";

export default function Card({ data }) {
  return (
    <div className="flex flex-col items-center bg-dark rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-5">
      <img
        className="object-cover w-full h-100 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={data.strDrinkThumb}
        alt={data.strDrink}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.strDrink}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data.strAlcoholic}
        </p>
      </div>
    </div>
  );
}
