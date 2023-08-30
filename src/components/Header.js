import React from "react";
import { lOGO_URL } from "../constants";
import { Link } from "react-router-dom";

const Title = () => {
  return <img className="logo" src={lOGO_URL} alt="logo" />;
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
