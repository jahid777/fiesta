import React from "react";
import { Link } from "react-router-dom";
import MenShoeCategories from "../../Cetegories/ShoesCategories/MenShoeCategories";
import WomenShoeCategories from "../../Cetegories/ShoesCategories/WomenShoeCategories";

const Shoe = () => {
  return (
    <div>
      <div>
        <img
          style={{ height: "350px", width: "100%" }}
          src="https://i.imgur.com/u63K4gf.jpg"
          alt=""
        />
      </div>
      <div className="container-fluid mt-5">
        <div className="m-4">
          <ul className="nav nav-tabs" id="myTab">
            <li className="nav-item">
              <Link
                to="#ladiesShoeCategories"
                className="nav-link active"
                data-bs-toggle="tab"
              >
                LADIES SHOES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="#gentsShoeCategories"
                className="nav-link"
                data-bs-toggle="tab"
              >
                MEN SHOES
              </Link>
            </li>
          </ul>
          <div className="tab-content mt-5">
            <div
              className="tab-pane fade show active"
              id="ladiesShoeCategories"
            >
              <WomenShoeCategories />
            </div>
            <div className="tab-pane fade" id="gentsShoeCategories">
              <MenShoeCategories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoe;
