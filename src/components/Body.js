import React, { useEffect, useState } from "react";
import { restaurantData } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { searchFilter } from "../helper/searchFilter";
const initialList = restaurantData.pizza;
const Body = () => {
  const [restaurantList, setRestaurantList] = useState(initialList);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    if (text == "") {
      setRestaurantList(initialList);
    } else {
      const filterdList = searchFilter(text, restaurantList);
      setRestaurantList(filterdList);
      setSearchText("");
    }
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="btn-search" onClick={() => handleSearch(searchText)}>
          Search
        </button>
      </div>
      <div className="restautant-cards">
        {restaurantList.map((item) => (
          <RestaurantCard {...item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
