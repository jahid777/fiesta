import React from "react";
import { Link } from "react-router-dom";
import "./Bag.css";
import GymBag from "./../../Cetegories/BagCategories/GymBag";
import OfficeBag from "./../../Cetegories/BagCategories/OfficeBag";
import WomenBag from "../../Cetegories/BagCategories/WomenBag";
import LaptopBag from "../../Cetegories/BagCategories/LaptopBag";

const AllProducts = () => {
  return (
    <div className="container-fluid">
      <div className="m-4">
        <ul className="nav nav-tabs" id="myTab">
          <li className="nav-item">
            <Link to="#gym" className="nav-link active" data-bs-toggle="tab">
              GYM BAG
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#Office" className="nav-link" data-bs-toggle="tab">
              OFFICE BAG
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#women" className="nav-link" data-bs-toggle="tab">
              WOMEN BAG
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#laptop" className="nav-link" data-bs-toggle="tab">
              LAPTOP BAG
            </Link>
          </li>
        </ul>
        <div className="tab-content mt-5">
          <div className="tab-pane fade show active" id="gym">
            <h4 className="mt-2">Gym bag </h4>
            <GymBag />
          </div>
          <div className="tab-pane fade" id="Office">
            <h4 className="mt-2">Office bag </h4>
            <OfficeBag />
          </div>
          <div className="tab-pane fade" id="women">
            <h4 className="mt-2">Women bag </h4>
            <WomenBag />
          </div>
          <div className="tab-pane fade" id="laptop">
            <h4 className="mt-2">Laptop bag </h4>
            <LaptopBag />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
