import React from "react";

const CategoryDetailsPage = ({ params }) => {
  console.log(params);
  if (params.features.length == 3)
    return <div>Display details of Iphone 15 Pro.</div>;
  else if (params.features.length == 2)
    return <div>Show All Mobile Phones of 2023.</div>;
  else if (params.features.length == 1)
    return <div>Show All Mobile Phones.</div>;
  return <div>Category Details Page</div>;
};

export default CategoryDetailsPage;
