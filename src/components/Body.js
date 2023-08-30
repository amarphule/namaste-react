import React, { useEffect, useState } from "react";
import { restaurantData } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { searchFilter } from "../helper/searchFilter";
import { Link } from "react-router-dom";
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
          <Link className="product-link" to={`/resto/${item.id}`} key={item.id}>
            <RestaurantCard {...item} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
