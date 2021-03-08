import React from "react";
import Nav from "./Nav";

export default function Music() {
  return (
    <>
      <Nav />
      <div className="container-fluid musContain">
        <div className="row music">
          <div className="col-8">
            <h1 className="stack-description">Superior Sound</h1>
            <h2>
              Experience live versions of your
              <br></br>
              favourite songs.
            </h2>
            <button className="demo-red">See Demo</button>
          </div>

          <div className="col-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOlzftZ6hhMRbHQf78PxwelnfvtQTi2yX_TA&usqp=CAU"
              alt="image of a music speaker"
            />
          </div>
        </div>
      </div>
    </>
  );
}
