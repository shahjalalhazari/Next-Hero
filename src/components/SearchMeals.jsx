"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const SearchMeals = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  // get search input & set on useState.
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    // load all meals based on search input
    const getMeals = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      setMeals(data.meals);
    };
    getMeals();
  }, [search]);

  return (
    <>
      <div className="my-8">
        <input
          onChange={handleSearch}
          type="text"
          name="search"
          placeholder="Search Your Meal.."
          className="p-4 rounded-s-xl shadow-xl"
        />
        <button
          type="submit"
          className="bg-red-400 shadow-xl text-white p-4 rounded-e-xl hover:shadow-2xl"
        >
          Search
        </button>
      </div>

      {/* Display all searched meals */}
      <div className="grid grid-cols-4 gap-5">
        {meals?.map((meal) => (
          <div
            key={meal.idMeal}
            className="border-2 p-3 text-start border-red-400"
          >
            <Image
              src={meal.strMealThumb}
              width={500}
              height={150}
              alt={meal.strMeal}
            />
            <h3 className="text-lg mt-1.5 font-bold">
              <span className="text-red-400">Name: </span>
              {meal.strMeal}
            </h3>
            <h6 className="text-md font-bold mt-1.5">
              <span className="text-red-400">Category: </span>
              {meal.strCategory} |{" "}
              <span className="text-red-400">Country: </span>
              {meal.strArea}
            </h6>
            <button className="bg-red-400 px-4 py-2 rounded-md text-white mt-3">
              See Instructions
            </button>
            {/* <p className="mt-1.5">
                <span className="text-red-400">Instructions: </span>
                {meal.strInstructions}
              </p> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchMeals;
