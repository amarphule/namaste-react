import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const RestaurantDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Details: {id}</h1>
    </div>
  );
};

export default RestaurantDetails;
