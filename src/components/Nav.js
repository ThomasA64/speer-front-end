import React from "react";
import Burger from "./Burger";

export default function Nav() {
  return (
    <nav className="navstyle">
      <div className="hamAni">
        <label for="toggle">
          <i className="fas fa-bars">
            <h4 className="logo"> EXP | CON </h4>
          </i>
        </label>

        <input type="checkbox" id="toggle"></input>
        <div className="menu">
          <a href="#">WHAT IS IT</a>
          <a href="#">PERKS</a>
          <a href="#">PRICING</a>
        </div>
      </div>
    </nav>
  );
}
