import React, { useState } from "react";

// const RestaurantCard = ({ url, name, rating, type_of_food }) => {
const RestaurantCard = ({ name, image, ingredients, price, vegetarian }) => {
  return (
    <div className="card-Container">
      <img src={image} />
      <h2 className="item-name">{name}</h2>
      <h3 className="item-ingredients">{ingredients.join(", ")}</h3>
      <h4 className="item-rating">${price}</h4>
      {vegetarian ? <h5>Vegetarian</h5> : <h5>Non-Vegetarian</h5>}
    </div>
  );
};

export default RestaurantCard;
