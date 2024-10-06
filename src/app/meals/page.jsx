import SearchMeals from "@/components/SearchMeals";
import React from "react";

const MealsPage = () => {
  return (
    <div className="mx-40 my-10 p-10 bg-gray-200 text-center">
      <h1 className="text-2xl font-semibold text-red-400">
        Enjoy Your Meal!
      </h1>
      <SearchMeals />
    </div>
  );
};

export default MealsPage;
