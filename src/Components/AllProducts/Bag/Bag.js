import React from "react";
import { Link } from "react-router-dom";
import GymBag from "./../../Cetegories/BagCategories/GymBag";
import OfficeBag from "./../../Cetegories/BagCategories/OfficeBag";
import WomenBag from "../../Cetegories/BagCategories/WomenBag";
import LaptopBag from "../../Cetegories/BagCategories/LaptopBag";
import "../AllProducts.css";

const AllProducts = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.imgur.com/DMOilvc.jpg"
              className="d-block w-100"
              alt="..."
              height="350"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="m-4">
          <ul className="nav nav-tabs" id="myTab">
            <li className="nav-item">
              <Link to="#gym" className="nav-link active" data-bs-toggle="tab">
                LADIES BAG
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#Office" className="nav-link" data-bs-toggle="tab">
                OFFICE BAG
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#women" className="nav-link" data-bs-toggle="tab">
                LAPTOP BAG
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#laptop" className="nav-link" data-bs-toggle="tab">
                GYM BAG
              </Link>
            </li>
          </ul>
          <div className="tab-content mt-5">
            <div className="tab-pane fade show active" id="gym">
              <WomenBag />
            </div>
            <div className="tab-pane fade" id="Office">
              <OfficeBag />
            </div>
            <div className="tab-pane fade" id="women">
              <LaptopBag />
            </div>
            <div className="tab-pane fade" id="laptop">
              <GymBag />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
