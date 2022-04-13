import React from "react";
import { useState } from "react";
import { womenBag } from "../../../AllData/BagData";
import WomenBagPopup from "../../Shared/PopupModal/WomenBagPopup";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import logo from "../../../Image/logo/loading.gif";

const WomenBag = () => {
  const [womenBags, setWomenBags] = useState(womenBag);
  return (
    <main>
      <WomenBagPopup />
      <div className="row row-cols-1 row-cols-md-4 g-4 container-fluid">
        {womenBags.map((singleWomenBag) => (
          <div key={singleWomenBag.id} className="col">
            <div
              className="card h-100 cardBody"
              data-bs-toggle="modal"
              data-bs-target="#WomenBagModal"
            >
              <LazyLoadImage
                src={singleWomenBag.img}
                className="card-img-top img-fluid homeProductImage"
                alt="..."
                placeholderSrc={logo}
              />
              <div className="card-body homeProductDes">
                <h5 className="card-title">Tk. {singleWomenBag?.price}</h5>
                <p className="card-text">{singleWomenBag?.description}</p>
                <p className="card-text">Color: {singleWomenBag?.color}</p>
              </div>
              <div className="card-footer ProductModelNumber">
                <small>{singleWomenBag.ProductCode}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default WomenBag;
