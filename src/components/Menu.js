import React from "react";

export default function Menu({ open }) {
  return (
    <ul open={open} className="nav-menu">
      <li className="nav-item">WHAT IS IT</li>
      <li className="nav-item">PERKS</li>
      <li className="nav-item">PRICING</li>
    </ul>
  );
}
