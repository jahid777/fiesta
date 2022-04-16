import React, { useState } from "react";
import { mousepadData } from "../../../AllData/AccessoriesData";
import PopupModal from "../../Shared/PopupModal/PopupModal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import logo from "../../../Image/logo/loading.gif";

const MousepadCategories = () => {
  const [mousepads, setMousepads] = useState(mousepadData);
  return (
    <main>
      <PopupModal />
      <div className="row row-cols-1 row-cols-md-4 g-4 container-fluid">
        {mousepads.map((singleMousepad) => (
          <div key={singleMousepad.id} className="col">
            <div
              className="card h-100 cardBody"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <LazyLoadImage
                style={{ height: "250px", width: "auto" }}
                src={singleMousepad?.img}
                className="card-img-top img-fluid homeProductImage"
                alt="..."
                placeholderSrc={logo}
              />
              <div className="card-body homeProductDes">
                <h5 className="card-title">Tk. {singleMousepad.price}</h5>
                <p className="card-text">
                  <p className="card-text">{singleMousepad.description}</p>
                  <p className="card-text">Color: {singleMousepad.color}</p>
                  <p className="card-text">Size: {singleMousepad.size}</p>
                </p>
              </div>
              <div className="card-footer ProductModelNumber">
                <small>{singleMousepad.ProductCode}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MousepadCategories;
