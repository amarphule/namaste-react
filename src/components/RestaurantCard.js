import React, { useState } from "react";

const RestaurantCard = ({ name, image, ingredients, price, vegetarian }) => {
  return (
    <div className="card-Container">
      <img src={image} />
      <h2 className="item-name">{name}</h2>
      <p className="item-ingredients">{ingredients.join(", ")}</p>
      <div className="item-footer">
        <div className="item-rating">$ {price}</div>
        <div>
          {vegetarian ? (
            <small className="veg">Vegetarian</small>
          ) : (
            <small className="non-veg">Non-Vegetarian</small>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
