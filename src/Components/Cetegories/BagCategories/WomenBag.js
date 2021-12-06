import React from "react";
import { useState } from "react";
import { womenBag } from "../../../AllData/BagData";
import WomenBagPopup from "../../Shared/PopupModal/WomenBagPopup";

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
              <img
                src={singleWomenBag.img}
                className="card-img-top img-fluid homeProductImage"
                alt="..."
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
