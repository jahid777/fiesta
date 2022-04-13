import React, { useState } from "react";
import { officeBag } from "../../../AllData/BagData";
import OfficeBagPopup from "../../Shared/PopupModal/OfficeBagPopup";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import logo from "../../../Image/logo/loading.gif";

const OfficeBag = () => {
  const [officeBags, setOffice] = useState(officeBag);
  return (
    <main>
      <OfficeBagPopup />
      <div className="row row-cols-1 row-cols-md-4 g-4 container-fluid">
        {officeBags.map((singleOfficeBag) => (
          <div key={singleOfficeBag.id} className="col">
            <div
              className="card h-100 cardBody"
              data-bs-toggle="modal"
              data-bs-target="#officeModal"
            >
              <LazyLoadImage
                src={singleOfficeBag.img}
                className="card-img-top img-fluid homeProductImage"
                alt="..."
                placeholderSrc={logo}
              />
              <div className="card-body homeProductDes">
                <h5 className="card-title">Tk. {singleOfficeBag.price}</h5>
                <p className="card-text">{singleOfficeBag.description}</p>
                <p className="card-text">Color: {singleOfficeBag.color}</p>
                <p className="card-text">Size: {singleOfficeBag.size}</p>
              </div>
              <div className="card-footer ProductModelNumber">
                <small>{singleOfficeBag.ProductCode}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default OfficeBag;
