import React, { useState } from "react";
import { womenBelt } from "../../../AllData/BeltData";
import PopupModal from "../../Shared/PopupModal/PopupModal";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import logo from "../../../Image/logo/loading.gif";
import "../../Home/HomeComp/HomeComp.css";

const WomenBeltCategories = () => {
  const [womensBelt, setWomensbelt] = useState(womenBelt);
  return (
    <main>
      <PopupModal />
      <div className="row row-cols-1 row-cols-md-4 g-4 container-fluid">
        {womensBelt.map((singleWomensBelt) => (
          <div key={singleWomensBelt.id} className="col">
            <div
              className="card h-100 cardBody"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <LazyLoadImage
                src={singleWomensBelt.img}
                className="card-img-top img-fluid homeProductImage"
                alt="..."
                placeholderSrc={logo}
              />

              <div className="card-body homeProductDes">
                <h5 className="card-title">Tk. {singleWomensBelt.price}</h5>
                <p className="card-text">
                  <p className="card-text">{singleWomensBelt.description}</p>
                  <p className="card-text">Color: {singleWomensBelt.color}</p>
                </p>
              </div>
              <div className="card-footer ProductModelNumber">
                <small>{singleWomensBelt.ProductCode}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default WomenBeltCategories;
