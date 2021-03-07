import React, { useState } from "react";
import Menu from "./Menu";

export default function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hamburger" open={open} onClick={() => setOpen(!open)}>
        <div className="hamDiv" />
        <div className="hamDiv" />
        <div className="hamDiv" />
      </div>
      <Menu open={open} />
    </>
  );
}
