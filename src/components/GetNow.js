import React from "react";

export default function GetNow() {
  return (
    <div className="container-fluid musContain">
      <div className="row get-now">
        <div className="col-8">
          <h1 className="stack-description-get">GET EXP|CON NOW</h1>
          <h2>Purchase and download the app.</h2>
        </div>

        <div className="col-4">
          <button className="btn-mix-noborder">
            {" "}
            <a href="/pricing">TRY IT NOW</a>
          </button>
        </div>
      </div>
    </div>
  );
}
