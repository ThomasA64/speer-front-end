import React from "react";
import Nav from "./Nav";

export default function Music() {
  return (
    <>
      <Nav />
      <div class="container">
        <div className="row music">
          <div className="col-lg">
            <h1>Superior Sound</h1>
            <h2>
              Experience live versions of your
              <br></br>
              favourite songs
            </h2>
            <button>See Demo</button>
          </div>

          <div className="col-lg ">
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
