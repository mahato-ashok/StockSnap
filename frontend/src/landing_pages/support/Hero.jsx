import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="container-fluid heroWrapper">
      
      {/* Top Row */}
      <div className="row heroTop align-items-center">
        <div className="col-md-6">
          <h3 className="fw-semibold">Support Portal</h3>
        </div>

        <div className="col-md-6 text-md-end mt-3 mt-md-0">
          <a href="#" className="topLink">
            Track Tickets
          </a>
        </div>
      </div>

     
      <div className="row heroContent align-items-start">

      
        <div className="col-lg-7 mb-5 mb-lg-0">
          <p className="searchText">
            Search for an answer or browse help topics to create a ticket
          </p>

          <input
            type="text"
            placeholder="E.g: how do I activate F&O, why is my order getting rejected"
            className="searchBox"
          />

          <div className="quickLinks">
            <a href="#">Track account opening</a>
            <a href="#">Track segment activation</a>
            <a href="#">Intraday margins</a>
            <a href="#">Kite user manual</a>
          </div>
        </div>

     
        <div className="col-lg-5">
          <h4 className="mb-4">Featured</h4>

          <ul className="featureList">
            <li>
              <a href="#">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>

            <li>
              <a href="#">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}