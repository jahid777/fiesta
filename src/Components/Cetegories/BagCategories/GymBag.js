import React, { useState } from "react";
import { gymBag } from "../../../AllData/BagData";
import PopupModal from "../../Shared/PopupModal/PopupModal";

const GymBag = () => {
  const [gyms, setGyms] = useState(gymBag);
  return (
    <main>
      <PopupModal />
      <div className="row row-cols-1 row-cols-md-4 g-4 container-fluid">
        {gyms.map((singleGym) => (
          <div key={singleGym.id} className="col">
            <div
              className="card h-100 cardBody"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                src={singleGym.img}
                className="card-img-top img-fluid homeProductImage"
                alt="..."
              />
              <div className="card-body homeProductDes">
                <h5 className="card-title">Tk. {singleGym.price}</h5>
                <p className="card-text">{singleGym.description}</p>
                <p className="card-text">Color: {singleGym.color}</p>
                <p className="card-text">Size: {singleGym.size}</p>
              </div>
              <div className="card-footer ProductModelNumber">
                <small>{singleGym.ProductCode}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default GymBag;
