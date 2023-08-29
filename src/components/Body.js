import React, { useState } from "react";
import { restaurantData } from "../constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(restaurantData.pizza);
  console.log(restaurantList);
  return (
    <div className="restautant-cards">
      {restaurantList.map((item) => (
        <RestaurantCard {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Body;
