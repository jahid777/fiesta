import React, { useState } from "react";
import { laptopBag } from "../../../AllData/BagData";
import LaptopBagPopup from "../../Shared/PopupModal/LaptopBagPopup";

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
              <img
                src={singleLaptopBag.img}
                className="card-img-top img-fluid homeProductImage"
                alt="..."
              />
              <div className="card-body">
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
