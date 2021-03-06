import React from "react";

export default function Pricing() {
  return (
    <>
      <div class="container">
        <div className="row pricing-main">
          <h1>PRICING</h1>
          <h2>
            Test out our app Today! Choose from three subscription
            <br></br>
            Based payment models.
          </h2>
        </div>
        <div class="row options">
          <div class="col-lg plan">
            <h1>BASIC</h1>
            ____________
            <h1>MONTHLY</h1>
            <h1>$9</h1>
            <ul className="repeating-counter-rule">
              <li>♪ Very Good</li>
              <li>♪ Amazing</li>
              <li>♪ Perfect Job</li>
              <li>♪ Love this</li>
              <li>♪ It's so good</li>
              <li>♪ Features</li>
            </ul>
          </div>
          <div class="col-lg plan">
            <h1>ADVANCED</h1>
            ____________
            <h1>YEARLY</h1>
            <h1>$99</h1>
            <ul>
              <li>♪ Very very Good</li>
              <li>♪ Even Amazing</li>
              <li>♪ Perfect job</li>
              <li>♪ Love this more</li>
              <li>♪ It's so so good</li>
              <li>♪ More Features</li>
            </ul>
          </div>
          <div class="col-lg plan">
            <h1>PRO</h1>
            ____________
            <h1>YEARLY</h1>
            <h1>$120</h1>
            <ul>
              <li>♪ Very very Good</li>
              <li>♪ Even more</li>
              <li>♪ Perfect job</li>
              <li>♪ Love this more</li>
              <li>♪ It's so so good</li>
              <li>♪ More Features</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
