import React from "react";
import Navbar from "react-bootstrap/Navbar";

export default function Nav() {
  return (
    <nav class="navstyle">
      <div className="logo"> EXP|CON </div>
      <ul className="nav-menu">
        <li className="nav-item">WHAT IS IT</li>
        <li className="nav-item">PERKS</li>
        <li className="nav-item">PRICING</li>
      </ul>
    </nav>
  );
}
