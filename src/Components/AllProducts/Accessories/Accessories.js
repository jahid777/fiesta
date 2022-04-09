import React from "react";
import { Link } from "react-router-dom";
import MousepadCategories from "../../Cetegories/AccessoriesCategories/MousepadCategories";

const Accessories = () => {
  return (
    <div>
      <div>
        <img
          style={{ height: "350px", width: "100%" }}
          src="https://i.ibb.co/FbzFGfH/accessories-Banner.webp"
          alt=""
        />
      </div>
      <div className="container-fluid mt-5">
        <div className="m-4">
          <ul className="nav nav-tabs" id="myTab">
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
            <div className="tab-pane fade show active" id="mousepad">
              <MousepadCategories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
