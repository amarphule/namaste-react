import React from "react";
import { lOGO_URL } from "../constants";

const Title = () => {
  return <img className="logo" src={lOGO_URL} alt="logo" />;
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
