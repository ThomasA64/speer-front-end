import React from "react";

export default function Reviews() {
  return (
    <div className="container-fluid musContain perks">
      <div className="row music-reviews">
        <div className="col-2">
          <div className="img-contain">
            <img
              className="img-review"
              src="https://audioengineusa.com/wp-content/uploads/2018/02/black1-1.png"
            />
          </div>
        </div>

        <div className="col-10 review-flex">
          <div className="col perks-review-first">
            <h1>REVIEWS</h1>
            <h1 className="stars">★★★★★</h1>
            <h2>ARTIST</h2>
            <h4 className="perk-description">
              'Love it, it's the best. I can't live without it!'
            </h4>{" "}
          </div>
          <div className="col perks-review">
            <h1 className="stars">
              <br></br>★★★★★
            </h1>
            <h2>PRODUCER</h2>
            <h4 className="perk-description">
              'Love it, it's the best. I can't live without it!'
            </h4>{" "}
          </div>
          <div className="col perks-review">
            <h1 className="stars">
              <br></br>★★★★★
            </h1>
            <h2>MUSIC FAN</h2>
            <h4 className="perk-description">
              'Love it, it's the best. I can't live without it!'
            </h4>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
