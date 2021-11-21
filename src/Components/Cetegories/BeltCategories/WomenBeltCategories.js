import React, { useState } from "react";
import { womenBelt } from "../../../AllData/BeltData";
import PopupModal from "../../Shared/PopupModal/PopupModal";

const WomenBeltCategories = () => {
  const [womensBelt, setWomensbelt] = useState(womenBelt);
  return (
    <main>
      <PopupModal />
      <div className="row row-cols-1 row-cols-md-3 g-4 container-fluid">
        {womensBelt.map((singleWomensBelt) => (
          <div key={singleWomensBelt.id} className="col">
            <div
              className="card h-100"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                style={{ height: "250px", width: "auto" }}
                src={singleWomensBelt.img}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Tk. {singleWomensBelt.price}</h5>
                <p className="card-text">
                  <p className="card-text">{singleWomensBelt.description}</p>
                  <p className="card-text">Color: {singleWomensBelt.color}</p>
                  <p className="card-text">Size: {singleWomensBelt.size}</p>
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
