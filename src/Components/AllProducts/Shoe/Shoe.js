import React from "react";
import { Link } from "react-router-dom";
import MenShoeCategories from "../../Cetegories/ShoesCategories/MenShoeCategories";
import WomenShoeCategories from "../../Cetegories/ShoesCategories/WomenShoeCategories";

const Shoe = () => {
  return (
    <div className="container-fluid">
      <div className="m-4">
        <ul className="nav nav-tabs" id="myTab">
          <li className="nav-item">
            <Link
              to="#ladiesShoeCategories"
              className="nav-link active"
              data-bs-toggle="tab"
            >
              WOMEN SHOES
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
          <div className="tab-pane fade show active" id="ladiesShoeCategories">
            <h4 className="mt-2">Women Shoes Collection</h4>
            <WomenShoeCategories />
          </div>
          <div className="tab-pane fade" id="gentsShoeCategories">
            <h4 className="mt-2">Men Shoes Collection</h4>
            <MenShoeCategories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoe;
