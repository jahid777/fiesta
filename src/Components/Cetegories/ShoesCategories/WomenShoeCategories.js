import React, { useState } from "react";
import { womenShoes } from "../../../AllData/ShoesData";
import PopupModal from "../../Shared/PopupModal/PopupModal";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import logo from "../../../Image/logo/loading.gif";

const WomenShoeCategories = () => {
  const [womensShoe, setWomenShoe] = useState(womenShoes);
  return (
    <main className="container-fluid">
      <PopupModal />

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {womensShoe.map((singleWomensShoe) => (
          <div key={singleWomensShoe?.id} className="col">
            <div
              className="card h-100 cardBody"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <LazyLoadImage
                src={singleWomensShoe?.img}
                className="card-img-top img-fluid homeProductImage"
                alt="..."
                placeholderSrc={logo}
              />
              <div className="card-body homeProductDes">
                <h5 className="card-title">Tk. {singleWomensShoe?.price}</h5>
                <p className="card-text">{singleWomensShoe?.description}</p>
                <p className="card-text">Color: {singleWomensShoe?.color}</p>
                <p className="card-text">Size: {singleWomensShoe?.size}</p>
              </div>
              <div className="card-footer ProductModelNumber">
                <small>{singleWomensShoe?.ProductCode}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default WomenShoeCategories;
