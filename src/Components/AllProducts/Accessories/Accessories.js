import React from "react";
import { Link } from "react-router-dom";
import GiftCategories from "../../Cetegories/AccessoriesCategories/GiftCategories";
import MousepadCategories from "../../Cetegories/AccessoriesCategories/MousepadCategories";

const Accessories = () => {
  return (
    <div>
      <div>
        <img
          style={{ height: "350px", width: "100%" }}
          src="https://cdn.shopify.com/s/files/1/1480/7070/files/legacy_leather_banner.jpg"
          alt=""
        />
      </div>
      <div className="container-fluid">
        <div className="m-4">
          <ul className="nav nav-tabs" id="myTab">
            {/* <li className="nav-item">
              <Link
                to="#giftItem"
                className="nav-link active"
                data-bs-toggle="tab"
              >
                GIFT ITEM
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                to="#mousepad"
                className="nav-link active"
                data-bs-toggle="tab"
              >
                MOUSE PAD
              </Link>
            </li>
          </ul>
          <div className="tab-content mt-5">
            {/* <div className="tab-pane fade show active" id="giftItem">
              <h4 className="mt-2">Gift Item Collection</h4>
              <GiftCategories />
            </div> */}
            <div className="tab-pane fade show active" id="mousepad">
              <h4 className="mt-2">Mousepad Item Collection</h4>
              <MousepadCategories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
