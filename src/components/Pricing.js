import React from "react";

export default function Pricing() {
  return (
    <>
      <div className="container-fluid priceContain">
        <div className="row pricing-main">
          <h1>PRICING</h1>
          <h2>
            Test out our app Today! Choose from three subscription
            <br></br>
            Based payment models.
          </h2>
        </div>
        <div className="row options">
          <div className="col-lg plan basic">
            <h1>BASIC</h1>
            ____________
            <h1>MONTHLY</h1>
            <h1 className="price">$9</h1>
            <ul className="features">
              <li> Very Good</li>
              <li> Amazing</li>
              <li> Perfect Job</li>
              <li> Love this</li>
              <li> It's so good</li>
              <li> Features</li>
            </ul>
            <button className="sel bas">
              {" "}
              <a className="features sela" href="/pricing">
                SELECT
              </a>
            </button>
          </div>
          <div className="col-lg plan advanced">
            <h1>ADVANCED</h1>
            ____________
            <h1>YEARLY</h1>
            <h1 className="price">$99</h1>
            <ul className="features">
              <li> Very very Good</li>
              <li> Even Amazing</li>
              <li> Perfect job</li>
              <li> Love this more</li>
              <li> It's so so good</li>
              <li> More Features</li>
            </ul>
            <button className="sel adv">
              {" "}
              <a className="features sela" href="/pricing">
                SELECT
              </a>
            </button>
          </div>
          <div className="col-lg plan pro">
            <h1>PRO</h1>
            ____________
            <h1>YEARLY</h1>
            <h1 className="price">$120</h1>
            <ul className="features">
              <li> Very very Good</li>
              <li> Even more</li>
              <li> Perfect job</li>
              <li> Love this more</li>
              <li> It's so so good</li>
              <li> More Features</li>
            </ul>
            <button className="sel prosel">
              {" "}
              <a className="features sela" href="/pricing">
                SELECT
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
