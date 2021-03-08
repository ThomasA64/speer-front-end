import React from "react";

export default function FrontRow() {
  return (
    <div>
      <div class="container-fluid musContain">
        <div className="row front">
          <div className="col-4 img-gold">
            <div />
            <h1 className="image">IMAGE</h1>
          </div>
          <div className="col-8">
            <h1 className="stack-description">FRONT ROW SEATS</h1>
            <h2>
              Experience concerts up close
              <br></br>
              and personal.
            </h2>
            <button className="demo-gold">See Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
}
