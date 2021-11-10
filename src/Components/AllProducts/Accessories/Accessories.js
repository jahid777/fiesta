import React from "react";
import { Link } from "react-router-dom";
import GiftCategories from "../../Cetegories/AccessoriesCategories/GiftCategories";
import MousepadCategories from "./MousepadCategories";

const Accessories = () => {
  return (
    <div className="container-fluid">
      <div className="m-4">
        <ul className="nav nav-tabs" id="myTab">
          <li className="nav-item">
            <Link
              to="#giftItem"
              className="nav-link active"
              data-bs-toggle="tab"
            >
              GIFT ITEM
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#mousepad" className="nav-link" data-bs-toggle="tab">
              MOUSE PAD
            </Link>
          </li>
        </ul>
        <div className="tab-content mt-5">
          <div className="tab-pane fade show active" id="giftItem">
            <h4 className="mt-2">Gift Item Collection</h4>
            <GiftCategories />
          </div>
          <div className="tab-pane fade" id="mousepad">
            <h4 className="mt-2">Mousepad Item Collection</h4>
            <MousepadCategories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
