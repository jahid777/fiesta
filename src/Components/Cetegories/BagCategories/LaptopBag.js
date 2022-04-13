import React, { useState } from "react";
import { laptopBag } from "../../../AllData/BagData";
import LaptopBagPopup from "../../Shared/PopupModal/LaptopBagPopup";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import logo from "../../../Image/logo/loading.gif";

const LaptopBag = () => {
  const [laptopBags, setLaptopBag] = useState(laptopBag);
  return (
    <main>
      <LaptopBagPopup />
      <div className="row row-cols-1 row-cols-md-4 g-4 container-fluid">
        {laptopBags.map((singleLaptopBag) => (
          <div key={singleLaptopBag.id} className="col">
            <div
              className="card h-100 cardBody"
              data-bs-toggle="modal"
              data-bs-target="#laptopBagModal"
            >
              <LazyLoadImage
                src={singleLaptopBag.img}
                className="card-img-top img-fluid homeProductImage"
                alt="..."
                placeholderSrc={logo}
              />
              <div className="card-body homeProductDes">
                <h5 className="card-title">Tk. {singleLaptopBag.price}</h5>
                <p className="card-text">{singleLaptopBag.description}</p>
                <p className="card-text">Color: {singleLaptopBag.color}</p>
                <p className="card-text">Size: {singleLaptopBag.size}</p>
              </div>
              <div className="card-footer ProductModelNumber">
                <small>{singleLaptopBag.ProductCode}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default LaptopBag;
