import React, { useState } from "react";
import { menBelt } from "../../../AllData/BeltData";
import MenPopModal from "../../Shared/PopupModal/MenPopModal";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import logo from "../../../Image/logo/loading.gif";

const MenBeltCategories = () => {
  const [mensBelt, setMensbelt] = useState(menBelt);
  return (
    <main>
      <MenPopModal />
      <div className="row row-cols-1 row-cols-md-4 g-4 container-fluid">
        {mensBelt.map((singleMensBelt) => (
          <div key={singleMensBelt.id} className="col">
            <div
              className="card h-100 cardBody"
              data-bs-toggle="modal"
              data-bs-target="#menModal"
            >
              <LazyLoadImage
                src={singleMensBelt.img}
                className="card-img-top img-fluid homeProductImage"
                alt="..."
                placeholderSrc={logo}
              />
              <div className="card-body homeProductDes">
                <h5 className="card-title">Tk. {singleMensBelt.price}</h5>
                <p className="card-text">
                  <p className="card-text">{singleMensBelt.description}</p>
                  <p className="card-text">Color: {singleMensBelt.color}</p>
                </p>
              </div>
              <div className="card-footer ProductModelNumber">
                <small>{singleMensBelt.ProductCode}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MenBeltCategories;
