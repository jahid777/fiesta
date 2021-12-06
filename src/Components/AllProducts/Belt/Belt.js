import React from "react";
import { Link } from "react-router-dom";
import MenBeltCategories from "../../Cetegories/BeltCategories/MenBeltCategories";
import WomenBeltCategories from "../../Cetegories/BeltCategories/WomenBeltCategories";

const Belt = () => {
  return (
    <div>
      <div>
        <img
          style={{ height: "350px", width: "100%" }}
          src="https://i.imgur.com/yZIJ3ND.jpg"
          alt=""
        />
      </div>
      <div className="container-fluid mt-5">
        <div className="m-4">
          <ul className="nav nav-tabs" id="myTab">
            <li className="nav-item">
              <Link
                to="#WomenBelt"
                className="nav-link active"
                data-bs-toggle="tab"
              >
                WOMEN BELT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#menBelt" className="nav-link" data-bs-toggle="tab">
                MEN BELT
              </Link>
            </li>
          </ul>
          <div className="tab-content mt-5">
            <div className="tab-pane fade show active" id="WomenBelt">
              <WomenBeltCategories />
            </div>
            <div className="tab-pane fade" id="menBelt">
              <MenBeltCategories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Belt;
