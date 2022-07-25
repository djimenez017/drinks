import React from "react";

export default function Form() {
  return (
    <form className="text-center flex justify-center flex-col justify-items-center w-11/12 lg:bg-red m-auto mt-5 sm:w-4/12 ">
      <label htmlFor="drink" className="font-bold">
        Search your favorite Mixed Drinks
      </label>
      <div className=" flex flex-row mt-4">
        <input
          type="text"
          name="drink"
          id="drink"
          className="w-8/12 m-auto p-1"
        />
        <button className="w-4/12 m-auto bg-red p-1 " type="button">
          Search
        </button>
      </div>
    </form>
  );
}
